import { handler } from "./build/handler.js";
import express from "express";

const app = express();

app.get("/healthcheck", (req, res) => {
  res.end("ok");
});

// SvelteKit handles everything we don't explicitly define above
app.use(handler);

const port = process.env.PORT || 3000;

app.listen(+port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});
