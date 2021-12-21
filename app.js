import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bakerRouter from './Routes/bakers.js';
import {connectDb} from "./Middleware/db.js";

const app = express();

const port = 3001;

// ENV Config
dotenv.config();

// DB Connection
connectDb();

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true}));
app.use(express.json({extended: true}));
//Routes
app.use('/api', bakerRouter);



app.listen(port, () => {
    return console.log(`app listening ${port}`);
})