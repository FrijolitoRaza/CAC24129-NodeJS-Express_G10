const express = require('express');
const router = express.Router();



// Route for listing movies
router.get('/', (req, res) => {
    res.send("Listado de Peliculas.");
    // Uncomment the line below to send a JSON response instead
    // res.json({ mensaje: "Hola, desde la ruta de peliculas." });
});



module.exports = router;