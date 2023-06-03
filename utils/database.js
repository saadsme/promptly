import mongoose from 'mongoose'

let isConnected = false

export const connecttoDB = async () =>{
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('mongodb is connected')
        return
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected=true;
        console.log('MongoDB Connected')
    }
    catch(error){
        console.log(error)
    }
}