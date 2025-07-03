import express from 'express';
import mongoose from 'mongoose';
import routerPost from './routers/routerPost.js';
import routerRole from "./routers/routerRole.js";
import routerRestaurant from "./routers/routerRestaurant.js";
import routerMenu from "./routers/routerMenu.js";
import routerUser from "./routers/routerUser.js";
import authRoutes from "./routers/authRoutes.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT || 5001;
const DB_URL = process.env.DB_URL;

app.use(express.json());
app.use('/api', routerPost);
app.use('/api', routerRestaurant);
app.use('/api', routerRole);
app.use('/api', routerMenu);
app.use('/api', routerUser);
app.use('/api/auth', authRoutes);
console.log('routers mounted on /api');


async function startApp(){
    try {
        await mongoose.connect(DB_URL)
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        })
    }catch (err){
        console.error(err);
    }
}
startApp();
