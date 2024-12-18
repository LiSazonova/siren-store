import { OAuth2Client } from 'google-auth-library';
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export default {
    async register(ctx) {
        const { username, email, password } = ctx.request.body;

        if (!username || !email || !password) {
            return ctx.badRequest('Все поля обязательны для заполнения');
        }

        try {
            const existingUser = await strapi.query('plugin::users-permissions.user').findOne({
                where: { email },
            });

            if (existingUser) {
                return ctx.badRequest('Пользователь с таким email уже существует');
            }

            const user = await strapi.query('plugin::users-permissions.user').create({
                data: {
                    username,
                    email,
                    password,
                },
            });

            const jwt = strapi.plugins['users-permissions'].services.jwt.issue({
                id: user.id,
            });

            ctx.send({
                jwt,
                user,
            });
        } catch (err) {
            console.error('Ошибка при регистрации:', err);
            return ctx.internalServerError('Ошибка при регистрации');
        }
    },

    async googleLogin(ctx) {
        const { token } = ctx.request.body;

        if (!token) {
            return ctx.badRequest('Токен отсутствует');
        }

        try {
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const payload = ticket.getPayload();

            let user = await strapi.query('plugin::users-permissions.user').findOne({
                where: { email: payload.email },
            });

            if (!user) {
                user = await strapi.query('plugin::users-permissions.user').create({
                    data: {
                        username: payload.name || payload.email,
                        email: payload.email,
                    },
                });
            }

            const jwt = strapi.plugins['users-permissions'].services.jwt.issue({
                id: user.id,
            });

            ctx.send({
                jwt,
                user,
            });
        } catch (error) {
            console.error('Ошибка валидации Google токена:', error);
            ctx.badRequest('Некорректный токен');
        }
    },

    async login(ctx) {
        const { identifier, password } = ctx.request.body;

        if (!identifier || !password) {
            return ctx.badRequest('Email или пароль обязательны');
        }

        try {
            const user = await strapi.query('plugin::users-permissions.user').findOne({
                where: {
                    OR: [{ email: identifier }, { username: identifier }],
                },
            });

            if (!user) {
                return ctx.badRequest('Пользователь не найден');
            }

            const isPasswordValid = await strapi.plugins['users-permissions'].services.auth.validatePassword(password, user.password);
            if (!isPasswordValid) {
                return ctx.badRequest('Неверный пароль');
            }

            const jwt = strapi.plugins['users-permissions'].services.jwt.issue({ id: user.id });

            ctx.send({ jwt, user });
        } catch (error) {
            console.error('Ошибка при логине:', error);
            return ctx.badRequest('Ошибка при логине');
        }
    },
};