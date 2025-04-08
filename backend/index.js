import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import path from "path"; //change 1

databaseConnection();

dotenv.config({
    path: ".env"

})

const _dirname = path.resolve(); //change 2

const app = express();
//middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'https://tempmovies.onrender.com', //change 5
    credentials: true
}
app.use(cors(corsOptions));

// api
app.use("/api/v1/user", userRoute);

app.use(express.static(path.join(_dirname, "/prime/build"))); //change 3
app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "prime", "build", "index.html")); //change 4 youtube lo inko la undhi
});

app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);

});