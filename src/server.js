require("dotenv").config();
require("dotenv").config({ path: __dirname + "/../.env" });
const app = require("./app"); // 🔥 Importa o Express corretamente

// Usar a variável de ambiente PORT, com fallback para 3000
const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
