import { MongoClient } from 'mongodb';
import User from '@/models/User';


const url = 'mongodb://localhost:27017/';


export async function connectToDatabase() {
  const client = await MongoClient.connect(url);
  const db = client.db('local');


  
  console.log('Connected to MongoDB');
  return db;
}

connectToDatabase();
