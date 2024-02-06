import * as process from 'process';

export default () => ({
  PORT: parseInt(process.env['PORT'], 10) || 3000,
  NODE_ENV: process.env['NODE_ENV'],
  CORS_ORIGIN: process.env['CORS_ORIGIN'],
  LIMIT_JSON: process.env['LIMIT_JSON'],
  JWT_SECRET: process.env['JWT_SECRET'] || 'MySecret*Seed*2022',
  JWT_EXPIRES_IN: process.env['JWT_EXPIRES_IN'] || '60m',
  JWT_ALGORITHM: process.env['JWT_ALGORITHM'],
  APP_KEY: process.env['APP_KEY'] || '-',
  AUTH_HASH_ROUNDS: parseInt(process.env['AUTH_HASH_ROUNDS'], 10) || 10,
  COGNITO_USER_POOL_ID: process.env['COGNITO_USER_POOL_ID'],
  COGNITO_CLIENT_ID: process.env['COGNITO_CLIENT_ID'],
  COGNITO_CLIENT_ID_SECRET: process.env['COGNITO_CLIENT_ID_SECRET'],
  COGNITO_REGION: process.env['COGNITO_REGION'],
  COGNITO_AUTHORITY: `arn:aws:cognito-idp:eu-west-1:549000814829:userpool/eu-west-1_ufyLs7Lxg`,
  AMQP_URL: process.env['AMQP_URL'],
  DATABASE_MONGODB_URI: process.env['DATABASE_MONGODB_URI'],
});
