(function(count) {
	var words = {
		sentence1: ["Lets Talk science!", "lets kill programming!", "Why do hipster?", "dont talk hipster!!", "Programming is everything!", "Who am I?", "Who are you?", "My favorite colour is pants!", "I can count to potatoes!", "Brilliant minds think alike!", "WWW = W.hy W.orld W.ay stupid"]
	};

	var sentence = ["sentence1"];

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