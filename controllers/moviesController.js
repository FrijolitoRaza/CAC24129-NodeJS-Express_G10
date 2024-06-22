const db = require('../config/db');

const index = (req, res) => {
    const sql = "SELECT * FROM Peliculas";

    db.query(sql, (error, rows) => {
        if (error) {
            res.status(500).json({error: "Intente más tarde."});
        }

        res.json(rows);
    });
};

module.exports= {
    index,
};