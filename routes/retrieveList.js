const express = require('express');
const router = express.Router();

function retrieveList(DB) {
    router.post("/retrieveList", (req, res) => {
        (async () => {
            try {
                console.log("?");
                const results = await DB.query(`select name, upvotes, downvotes, playlistID from playlists ORDER BY (upvotes - downvotes) DESC;`);
                res.json(results.rows);
            } catch (err) {
                console.error("error executing query:", err);
            }
        })()
    })

    return router;
}

module.exports = retrieveList;