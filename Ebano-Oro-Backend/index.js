import express from "express";
import platosRoutes from "./routes/plates-routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/platos", platosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
