const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 Importar rotas corretamente
const usersRoutes = require("./routes/usersRoutes");
const postsRoutes = require("./routes/postsRoutes");
const commentsRoutes = require("./routes/commentsRoutes");
const tagsRoutes = require("./routes/tagsRoutes");

// 🔥 Registrar rotas corretamente
app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);
app.use("/comments", commentsRoutes);
app.use("/tags", tagsRoutes);

// Teste para verificar se o servidor está rodando
app.get("/", (req, res) => {
  res.send("🚀 API está rodando corretamente!");
});

// 🔍 Log para verificar se as rotas foram registradas
app._router.stack.forEach((r) => {
  if (r.route && r.route.path) {
    console.log(`✅ Rota registrada: ${r.route.path}`);
  }
});

module.exports = app;
