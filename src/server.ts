// src/server.ts
import { createApp } from "./app";

const app = createApp();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Wepay backend listening on port ${port}`);
});
