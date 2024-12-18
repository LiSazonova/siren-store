export default {
    routes: [
        {
            method: 'POST',
            path: '/api/auth/local/register',
            handler: 'auth.register',
            config: {
                policies: [],
            },
        },
        {
            method: 'POST',
            path: '/api/auth/local',
            handler: 'auth.login',
            config: {
                policies: [],
            },
        },
        {
            method: 'POST',
            path: '/auth/google',
            handler: 'auth.googleLogin',
            config: {
                policies: [],
            },
        },
    ],
};