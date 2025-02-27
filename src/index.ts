import express, {Request,Response} from "express"
import pathRouter from './router/pathRouter';
import gripperRouter from "./router/gripperRouter";
import testRouter from "./router/test";
import pointRouter from "./router/pointRouter";

import cors from 'cors';

const app=express()

app.use(express.json())
app.use(cors())

app.use('/path',pathRouter)
app.use('/testpath',testRouter)

app.use('/gripper',gripperRouter)
app.use('/points',pointRouter)

app.listen(5000,()=>{
    console.log("server is listening on port 5000")
})
