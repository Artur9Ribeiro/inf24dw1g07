const db = require('../models/db');

exports.getComments = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM comments");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createComment = async (req, res) => {
    try {
        const { content, postId, userId } = req.body;
        await db.query("INSERT INTO comments (content, post_id, user_id) VALUES (?, ?, ?)", [content, postId, userId]);
        res.status(201).json({ message: "Comentário criado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;
        await db.query("UPDATE comments SET content = ? WHERE id = ?", [content, id]);
        res.json({ message: "Comentário atualizado!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query("DELETE FROM comments WHERE id = ?", [id]);
        res.json({ message: "Comentário deletado!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
