import express from 'express';
import cors from 'cors';
import routerUser from "./routers/routerUser.js";
import authRoutes from "./routers/authRoutes.js";
import dotenv from 'dotenv';
import tourRouter from "./routers/tourRouter.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());

app.use('/api', routerUser);
app.use('/api/auth', authRoutes);
app.use("/api", tourRouter);


// Запуск сервера без подключения к базе данных
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});