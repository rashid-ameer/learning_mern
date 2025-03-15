import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import notesRouter from "./routes/notes.route";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ health: "100%" });
});

app.use("/notes", notesRouter);

app.use((req, res, next) => {
  next(new Error("Endpoint not defined"));
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  let errorMessage = "An unknown error occured";
  if (error instanceof Error) {
    errorMessage = error.message;
  }

  res.status(500).json({ error: errorMessage });
});

export default app;
