/**************************** IMPORTS ******************************/

import express, { Express } from "express"
import cors from "cors"

import { userRouter } from "./routes/userRoutes"
import { postRouter } from "./routes/postRoutes"
import { friendshipRouter } from "./routes/friendshipRoutes"

/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())

/**************************** ENDPOINTS ******************************/

app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/friendship", friendshipRouter);

/**************************** SERVER INIT ******************************/

app.listen(3000, () => {
   console.log("Server running on port 3000")
})