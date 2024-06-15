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
            swagger: {
                enable: process.env.SWAGGER_ENABLE === 'true',
                path: process.env.SWAGGER_PATH ?? 'docs',
                title: process.env.SWAGGER_TITLE ?? 'School Management Swagger Documentation',
                desc: process.env.SWAGGER_DESC ?? 'School Management Api Documentation',
                version: process.env.SWAGGER_VERSION ?? '0.1',
            },
        }
    ) as const;

export type ConfigurationType = ReturnType<typeof getConfiguration>;