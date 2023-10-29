const express = require('express');
const router = express.Router();

function vote(DB, path){

    router.post('/viewed', (req, res) => {
        let user = req.body["user"];
        let post = req.body["playlistID"];

        (async () => {
            try {
                const check = await DB.query(`SELECT EXISTS(select * from votes WHERE userid = '${user}' and playlist = '${post}')`);
                console.log(check.rows[0].exists);
            
                res.json({"seen": check.rows[0].exists});
                return;
            

            } catch (err) {
                console.error("error executing query:", err);
            }
        })();
    });

    router.post('/upvote', (req, res) => {
        let user = req.body["user"];
        let post = req.body["playlistID"];

        (async () => {
            try {
                const check = await DB.query(`SELECT EXISTS(select * from votes WHERE userid = '${user}' and playlist = '${post}')`);
                console.log(check);
                if(check.rows[0].exists == true){
                    res.json({"status": -1});
                    return;
                }
                const results = await DB.query(`UPDATE playlists SET upvotes = upvotes + 1 where playlistid = '${post}'`);
                const results2 = await DB.query(`INSERT INTO votes(userID, playlist) VALUES('${user}', '${post}')`)
                
                console.log("yipee");
                res.json({"status": 0})
            } catch (err) {
                console.error("error executing query:", err);
                res.send(400)
            }
        })();
    });

    router.post('/downvote', (req, res) => {
        let user = req.body["user"];
        let post = req.body["playlistID"];
    
        (async () => {
            try {
                const check = await DB.query(`SELECT EXISTS(select * from votes WHERE userid = '${user}' and playlist = '${post}')`);
                console.log(check);
                if(check.rows[0].exists == true){
                    res.json({"status": -1});
                    return;
                }
                const results = await DB.query(`UPDATE playlists SET downvotes = downvotes + 1 where playlistid = '${post}'`);
                const results2 = await DB.query(`INSERT INTO votes(userID, playlist) VALUES('${user}', '${post}')`)
                
                console.log("yipee");
                res.json({"status": 0})
            } catch (err) {
                console.error("error executing query:", err);
                res.send(400)
            }
        })();
    });

    return router;
}

module.exports = vote;