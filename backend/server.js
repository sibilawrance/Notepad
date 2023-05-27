import express  from "express"; 
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import noteRoutes from "./routes/noteRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";


const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req,res) => {
    res.send("API is running successfully...")
});


app.use("/users", userRoutes);
app.use("/notes", noteRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6000

app.listen(PORT, console.log(`server starts on port ${PORT}`)); 
       