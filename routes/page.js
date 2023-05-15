var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    if (req.user == null) {
        res.setHeader('Content-Type', 'text/html');
    }
    res.send(
        '<button style="width: 100px; height:100px" onclick="getTutorials()">Get Tutorials</button>\ <script>const getTutorials async()>(const response-await fetch("http://localhost:3000/tutorials")\ const data await response.json();}</script>'
    )
});
module.exports = router;