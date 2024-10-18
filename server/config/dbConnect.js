import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const mongoDB = "mongodb+srv://clarelantoine:K7XiiQGJYkS8Auqd@cluster0.wp16rwy.mongodb.net/ptl?retryWrites=true&w=majority";

export const dbConnect = async () =>
{
    try 
    {
        const con = await mongoose.connect(mongoDB)
        console.log("connected to:", con.connection.host);
    } 
    catch (error) 
    {
        console.error(error)
    }
}