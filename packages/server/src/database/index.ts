import 'reflect-metadata';
import { createConnection, getConnection } from 'typeorm';

/* eslint-disable no-console */
const connectDB = async (): Promise<void> => {
  try {
    await createConnection();
    console.info('Connected to DB.');
  } catch (error) {
    console.error('DB connection error: ', error);
  }
};
/* eslint-enable no-console */

export const closeDBConnection = async (): Promise<void> => {
  getConnection().close();
};

export default connectDB;
