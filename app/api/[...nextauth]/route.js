import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { connecttoDB } from "@utils/database";
import User from '@models/user'


const handlers = NextAuth({
    providers: [
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret: GOOGLE_CLIENT_SECRET ,

        })
    ],
    async session({session}){
        
    },
    async signIn({profile}){
        try{
            await connecttoDB();
            //check if user exits
            const userExists = await User.findOne(
                {
                    email: profile.email,
                    
                });
            //if not create user and save to db
                if(!userExists){
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }
            return true;
        } catch(error){
            console.log(error)
            return false;
        }
    }
})

export {handler as GET, handler as POST }