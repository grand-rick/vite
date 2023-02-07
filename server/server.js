//IMPORTS
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

//ROUTE IMPORTS
import blogRoutes from './routes/blogRoutes.js'

//GENERAL CONSTANTS
const app = express();
const PORT = process.env.PORT || 5000;
const db_URL = "mongodb://localhost:27017/blogDB";

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set('strictQuery', true);

//ROUTES
app.use('/blogs', blogRoutes);

const connectDB = async url => {
    await mongoose
        .connect(url)
        .then(() => console.log("Database Connected"))
        .catch(err => console.log(err));
}

//PORT LISTEN
app.listen(PORT, async () => {
    await connectDB(db_URL);
    console.log(`Server Started at port ${PORT}`);
})

