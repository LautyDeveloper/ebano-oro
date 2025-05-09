import express from "express";
import cors from "cors";
import platosRoutes from "./routes/plates-routes.js";
import testsRoutes from "./routes/tests-routes.js";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use("/platos", platosRoutes);
app.use("/tests", testsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
