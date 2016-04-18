function tree() {
	var height = document.getElementById("tree-height-input").value;
	var character = document.getElementById("tree-character-input").value;

	if(height < 1 || character.length < 1) return;

	var treeString = "";
	for (var i = 0; i < height; ++i) {
		var spaces = Array(height - i + 1).join(' ');
		var branch = Array(i + 1).join(character);

		var row = spaces + branch + character + branch + spaces;
		console.log(row);

		treeString += row + "<br/>";
	}

	document.getElementById("tree-output").innerHTML = treeString;
}

function enterListener(e) {
	if(e.keyCode == 13) {
		tree();
	}
}

document.getElementById("tree-height-input").onkeypress = enterListener;
document.getElementById("tree-character-input").onkeypress = enterListener;
document.getElementById("grow-button").onclick = tree;
