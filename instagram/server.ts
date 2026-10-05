import app from "./app.js";
import connectDB from "./src/config/db.js";
import "dotenv/config"

const PORT=process.env.PORT||6000

const startserver=async():Promise<void>=>{
    await connectDB()

    app.listen(PORT,()=>{
        console.log(`server running on http://localhost:${PORT}`);
        
    })
}
startserver()