import mongoose from 'mongoose';

export const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/bakers", {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('DB connected');
    } catch (err) {
        console.error(err.message);
        console.log(process.env.LOCAL_DB)
    }
}