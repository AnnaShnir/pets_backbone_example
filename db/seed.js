var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("petulance.db");
db.run("INSERT INTO pets (name, type) VALUES (?, ?)", "salty", "cat", function(err) {
		if(err) { 
			throw err; 
		}
	});
db.run("INSERT INTO pets (name, type) VALUES (?, ?)", "fluffy", "hamster", function(err) {
		if(err) { 
			throw err; 
		}
	});