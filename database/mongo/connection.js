import mongoose from 'mongoose';
const { connect } = mongoose;

export class ConnectMongo {
  static async connect() {
    console.log('Connecting to the database');
    return await connect(process.env.URL_DATABASE);
  }
}
