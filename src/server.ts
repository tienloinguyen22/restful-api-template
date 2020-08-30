import { config } from '@app/config';
import express from 'express';
import helmet from 'helmet';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { StatusCodes } from 'http-status-codes';
import admin from 'firebase-admin';
import { logger, startDatabase, bulidSwaggerDocs, errorHandler, verifyToken } from './core';
import { usersController } from './modules/auth/aggregates/users/users.controller';
import { rolesController } from './modules/auth/aggregates/roles/roles.controller';
import { profilesController } from './modules/auth/aggregates/profiles/profiles.controller';
import { authController } from './modules/auth/aggregates/auth/auth.controller';
import { uploadsController } from './modules/uploads/aggregates/uploads/uploads.controller';

(async () => {
  // 0. connect to mongo
  logger.info(`[Server] Initialize mongo ...`);
  await startDatabase(config.database.connectionString);

  // 1. bootstrap firebase
  logger.info(`[Server] Initialize firebase.....`);
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: config.firebase.serviceAccount.project_id,
      clientEmail: config.firebase.serviceAccount.client_email,
      privateKey: config.firebase.serviceAccount.private_key,
    }),
    databaseURL: config.firebase.databaseURL,
  });

  // 2. bootstrap server
  const server = express();
  server
    .use(helmet())
    .use(compress())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(cookieParser())
    .use(
      cors({
        origin: config.cors.whitelistUrls,
        credentials: true,
      }),
    )
    .use(verifyToken());

  // 3. setup controllers
  server.use(`${config.api.prefix}/auth`, authController);
  server.use(`${config.api.prefix}/users`, usersController);
  server.use(`${config.api.prefix}/roles`, rolesController);
  server.use(`${config.api.prefix}/profiles`, profilesController);
  server.use(`${config.api.prefix}/uploads`, uploadsController);
  server.use(errorHandler());

  // 4. setup swaggers
  const swaggerDocument = bulidSwaggerDocs();
  server.use(`${config.api.prefix}${config.api.docsUrl}`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  server.use(`${config.api.prefix}${config.api.docsJson}`, async (_req, res) => {
    res.status(StatusCodes.OK).json(swaggerDocument);
  });

  // 5. start server
  const port = parseInt(process.env.PORT ? process.env.PORT : '', 10) || 3000;
  server.listen(port);
  logger.info(`[Server] Server listens on port ${port} ...`);
})();
