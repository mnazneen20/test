import express from 'express'
import userRouter from './router/userRouter.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use('/users', userRouter);


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});