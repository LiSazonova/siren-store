module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/api/auth/google',
            handler: 'auth.googleLogin',
            config: {
                policies: [],
            },
        },
    ],
};
