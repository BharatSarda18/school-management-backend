export const getConfiguration = () =>
(
    {
        database: {
            URI: process.env.MONGO_URI
        },
        application: {
            port: process.env.PORT ?? 3600,
            cors: {
              origin: process.env.CORS_ALLOWED_ORIGINS ?? [],
              methods: 'GET,PUT,PATCH,POST,DELETE',
            },
        },
    }
) as const;

export type ConfigurationType = ReturnType<typeof getConfiguration>;