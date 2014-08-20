(function(count) {
	var words = {
		sentence1: ["Lets"],
		sentence2: ["talk", "do","play","kill","programming"],
		sentence3: ["science","programming","coffee","hipster","hipstertalk"]
	};

	var sentence = ["sentence1","sentence2","sentence3"];

	var arrayRandom = function(myArray) {
		return myArray[ Math.floor( Math.random() * myArray.length)];
	};

	var readysentence = [];

	while(count--) {
		readysentence.length = 0;
		for (var ii = 0; ii < sentence.length; ++ii) {
			readysentence.push(arrayRandom(words[sentence[ii]]));
		};
		document.writeln(readysentence.join(" "));
	}
})(1);