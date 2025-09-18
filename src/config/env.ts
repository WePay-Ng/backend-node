const defaultPort = 3000;

export interface Environment {
  context: 'LOCAL' | 'DEVELOP' | 'STAGING' | 'PRODUCTION';
  appName: string;
  domain: string;
  port: number | string;
  debug?: string;
  jwt: {
    secret: string;
    refreshSecret: string;
    refreshDays: string;
    expiresIn: string;
    saltRounds: number;
  };
  aws: {
    projectId: string;
    bucket: string;
  };
  password: {
    passwordResetsIn: number;
  };

  database: {
    url: string;
  };

  google: {
    projectId: string;
    clientEmail: string;
    privateKey: string;
    bucketName: string;
    bucketNameTemporary: string;
    asyncFunction: string;
    taskQueue: string;
    taskQueueHandler: string;
    taskQueueLocation: string;
    oauthGoogleClientToken: string;
    clientId: string;
    clientSecret: string;
    callbackURL: string;
  };
}

const context =
  (process.env.CONTEXT as
    | 'LOCAL'
    | 'DEVELOP'
    | 'STAGING'
    | 'PRODUCTION'
    | undefined) || 'LOCAL';

export const environment: Environment = {
  context,
  port: process.env.PORT || defaultPort,
  appName: process.env.APP_NAME as string,
  domain: process.env.FE_URL as string,
  debug: process.env.DEBUG,

  password: {
    passwordResetsIn: Number(process.env.PASSWORD_RESET_EXPIRES_MIN),
  },

  database: {
    url: process.env.DATABASE_URL as string,
  },
  aws: {
    projectId: process.env.GCP_PROIECT_ID as string,
    bucket: process.env.GCP_BUCKET_NAME as string,
  },
  jwt: {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN as string,
    refreshDays: process.env.REFRESH_TOKEN_EXPIRES_DAYS as string,
    secret: process.env.JWT_ACCESS_SECRET as string,
    refreshSecret: process.env.JWT_REFRESH_SECRET as string,
    saltRounds: Number(process.env.AUTH_SALT_ROUNDS) || 10,
  },

  google: {
    projectId: process.env.GCP_PROJECT_ID!,
    clientEmail: process.env.GCP_CLIENT_EMAIL!,
    privateKey: process.env.GCP_PRIVATE_KEY!,
    bucketName: process.env.GCP_BUCKET!,
    bucketNameTemporary: process.env.GCP_BUCKET_TEMPORARY!,
    asyncFunction: process.env.GCP_ASYNC_FUNCTION!,
    taskQueue: process.env.GCP_ASYNC_TASK_QUEUE!,
    taskQueueHandler: process.env.GCP_ASYNC_TASK_QUEUE_HANDLER!,
    taskQueueLocation: process.env.GCP_ASYNC_TASK_QUEUE_LOCATION!,
    oauthGoogleClientToken: process.env.OAUTH_GOOGLE_CLIENT_TOKEN!,
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: process.env.GOOGLE_CALLBACK!,
  },
};
