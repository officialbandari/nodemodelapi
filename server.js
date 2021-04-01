import express from 'express';
import bodyparser from 'body-parser';
import userRouter from './routers/userRouter.js'
const PORT =8000;

const app = express();

app.use(bodyparser.json());


app.use('/parent', userRouter);


app.listen(PORT, ()=>{`The server is Running in http://localhost:${PORT}`})