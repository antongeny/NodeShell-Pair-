const fs = require("fs");

module.exports = function () {
	const files = fs.readdir("./", "utf-8");
	process.stdout.write(files.join("\n"));

	// code blow did strange call back without wait sync
	// fs.readdir("./", "utf-8", (err, files) => {
	// 	if (err) throw err;
	// 	else {
	// 		process.stdout.write(files.join("\n"));
	// 	}
	// });
};
