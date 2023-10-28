const express = require('express');
const router = express.Router();


function upload(DB){
    router.post("/upload",(req, res) => {
        let playlist = url.substring(req.body["playlistURL"].lastIndexOf('/') + 1);
        let description = (req.body["description"]) ? req.body["description"] : NULL;
        let name = req.body["name"];
        (async () => {
            try {
                const results = await DB.query(`INSERT INTO playlists(playlistID, description) VALUES('${playlist}', '${description}')`);
                console.log("yipee");
            } catch (err) {
                console.error("error executing query:", err);
            }
        })();
    }); 



    return router;
}


module.exports = upload;