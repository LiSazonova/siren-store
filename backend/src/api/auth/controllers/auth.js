const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

module.exports = {
    async googleLogin(ctx) {
        console.log('Получен запрос на /api/auth/google');
        const { token } = ctx.request.body;
        console.log('Токен:', token);

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
};