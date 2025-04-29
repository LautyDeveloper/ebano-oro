import express from "express";
import cors from "cors";
import platosRoutes from "./routes/plates-routes.js";
import testsRoutes from "./routes/tests-routes.js";
import getConnection from "./database/connection.js";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use("/platos", platosRoutes);
app.use("/tests", testsRoutes);

const getLanguages = async () => {
  try {
    const database = await getConnection();
    const languages = await database.collection("Platos").find().toArray();
    console.table(languages);
    console.log("Lenguages Listed!!")
  } catch (error) {
    console.error("Error al obtener los idiomas:", error);
  }
}

getLanguages();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
