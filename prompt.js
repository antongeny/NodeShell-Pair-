const ls = require("./ls");

//prompt the user to write commands
process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
	const command = data.toString().trim();
	console.log(command);

	if (command === "ls") {
		ls();
		process.stdout.write("You typed: " + command);
	} else {
		process.stdout.write("You typed: " + command);
	}
	process.stdout.write("\nprompt > ");
});
