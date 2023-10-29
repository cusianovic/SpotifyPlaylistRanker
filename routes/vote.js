const express = require('express');
const router = express.Router();

function vote(db, path){
    router.post('/upvote', (req, res) => {
        let user = req.body["user"];
        let post = req.body["playlistID"];

        (async () => {
            try {
                if(DB.query(`SELECT EXISTS(select * from votes WHERE userid = ${user}, playlist = ${post})`)[0]){
                    res.send(400);
                    return;
                }
                const results = await DB.query(`UPDATE playlists SET upvotes = upvotes + 1 where playlistid = '${post}'`);
                const results2 = await DB.query(`INSERT INTO votes(userID, playlist) VALUES('${user}', '${post}')`)
                
                console.log("yipee");
            } catch (err) {
                console.error("error executing query:", err);
            }
        })();
    });

    router.post('/downvote', (req, res) => {
        let user = req.body["user"];
        let post = req.body["playlistID"];
    
        (async () => {
            try {
    
                if(DB.query(`SELECT EXISTS(select * from votes WHERE userid = ${user}, playlist = ${post})`)[0]){
                    res.send(400);
                    return;
                }
                const results = await DB.query(`UPDATE playlists SET upvotes = upvotes + 1 where playlistid = '${post}'`);
                const results2 = await DB.query(`INSERT INTO votes(userID, playlist) VALUES('${user}', '${post}')`)
                
                console.log("yipee");
            } catch (err) {
                console.error("error executing query:", err);
            }
        })();
    });
}