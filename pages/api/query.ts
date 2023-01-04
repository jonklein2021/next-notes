import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../models/user';
import mongoose from 'mongoose';

export default async function query(req: NextApiRequest, res: NextApiResponse) {
  try {
    // connect
    console.log('CONNECTING TO MONGODB...');
    await mongoose.connect("mongodb://localhost/next-chat");
    console.log('** CONNECTION MADE SUCCESSFULLY **');
    
    // query & wait for response
    console.log('** QUERYING DATABASE... **');
    const data = await User.find(req.body);
    console.log('** RESPONSE RECEIVED **');

    // return response
    res.json({ data });    
  } catch (error) {
    res.json({ error });
    console.log(error);
  }
  
}