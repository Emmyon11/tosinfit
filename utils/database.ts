import mongoose from 'mongoose';

let isConnected = false; //track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('=> using existing database connection');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: 'tosinfit',
    });
    isConnected = true;
    console.log('=> using new database connection');
  } catch (error) {
    console.log(error);
  }
};
