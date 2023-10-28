const { Client } = require("pg");

function DB(SECRET){
    const client = new Client(`${SECRET}`);

    (async () => {
        await client.connect();
    try {
        const results = await client.query("SELECT NOW()");
        console.log(results);
    } catch (err) {
        console.error("error executing query:", err);
    }
    })();

    return client;
}

module.exports = DB;