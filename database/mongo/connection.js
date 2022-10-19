import mongoose from 'mongoose';
const { connect } = mongoose;

export class ConnectMongo {
  static async connect() {
    // console.log('Connecting to the database');
    // return await mongoose.connect(process.env.URL_DATABASE);
    const connection = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connection');
    return connection;
  }
}
