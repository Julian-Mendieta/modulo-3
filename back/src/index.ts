import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import userRouter from "./routes/userRoutes";
import appointmentRouter from "./routes/appointmentRoutes";

createConnection().then(async connection => {
  const app = express();
  
  app.use(express.json());

  app.use("/users", userRouter);
  app.use("/appointments", appointmentRouter);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => console.log(error));
