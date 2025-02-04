const db = require('../models/db');

exports.getPosts = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM posts");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createPost = async (req, res) => {
    try {
        console.log("Recebendo dados no POST /posts:", req.body); 

        const { title, content, user_id } = req.body; 

        if (!title || !content || !user_id) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios: title, content, user_id" });
        }

        await db.query("INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)", [title, content, user_id]);
        res.status(201).json({ message: "Post criado com sucesso!" });
    } catch (error) {
        console.error("Erro ao criar post:", error.message);
        res.status(500).json({ error: error.message });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        await db.query("UPDATE posts SET title = ?, content = ? WHERE id = ?", [title, content, id]);
        res.json({ message: "Post atualizado!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query("DELETE FROM posts WHERE id = ?", [id]);
        res.json({ message: "Post deletado!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
