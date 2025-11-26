import express from 'express';
import { config } from 'dotenv';
import connectDB from './config/db.js';         
import categoryRoutes from './routes/category.route.js';  

config();

const app = express();
const PORT = Number(process.env.PORT) || 2000;

app.use(express.json());

app.use('/api/categories', categoryRoutes);   

const startServer = async () => {
    try {
        await connectDB();    
        app.listen(PORT, () => {
            console.log(`Server ${PORT}-p`);
        });
    } catch (err) {
        console.error("Server ishga tushmadi:", err);
    }
};

startServer();