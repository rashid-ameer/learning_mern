import "dotenv/config";
import { NODE_ENV, PORT } from "./constants/env";
import connectDB from "./db";
import app from "./app";


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(
      `Server is listening on port ${PORT} in ${NODE_ENV} environment`
    );
  });
});
