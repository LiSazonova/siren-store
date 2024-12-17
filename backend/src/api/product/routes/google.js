// ./src/api/auth/routes/google.js

module.exports = {
    routes: [
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
