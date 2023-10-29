


function random(DB){
    router.post('/getRandom', (req, res) => {
        (async () => {
            try {
                
                const results = await DB.query(`select * from playlists order by random() limit 1`);

                res.json(results);
                
                console.log("yipee");
            } catch (err) {
                console.error("error executing query:", err);
            }
        })();
    });
}