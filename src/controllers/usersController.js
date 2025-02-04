const db = require('../models/db');

exports.getUsers = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM users");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        console.log("Recebendo dados:", req.body); // 🔥 DEBUG
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: "Nome e e-mail são obrigatórios!" });
        }
        await db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email]);
        res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        await db.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, id]);
        res.json({ message: "Usuário atualizado!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query("DELETE FROM users WHERE id = ?", [id]);
        res.json({ message: "Usuário deletado!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
