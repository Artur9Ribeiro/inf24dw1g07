const db = require('../models/db');

exports.getTags = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM tags");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createTag = async (req, res) => {
    try {
        const { name } = req.body;
        await db.query("INSERT INTO tags (name) VALUES (?)", [name]);
        res.status(201).json({ message: "Tag criada com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateTag = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        await db.query("UPDATE tags SET name = ? WHERE id = ?", [name, id]);
        res.json({ message: "Tag atualizada!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTag = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query("DELETE FROM tags WHERE id = ?", [id]);
        res.json({ message: "Tag deletada!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
