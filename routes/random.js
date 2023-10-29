
const express = require('express');
const router = express.Router();

function random(DB){
    router.post('/getRandom', (req, res) => {
        (async () => {
            try {
                
                const results = await DB.query(`select * from playlists order by random() limit 1`);

                console.log("yipee");
                res.json(results['rows'][0]);
                
            } catch (err) {
                console.error("error executing query:", err);
            }
        })();
    });

    return router;
}

module.exports = random;