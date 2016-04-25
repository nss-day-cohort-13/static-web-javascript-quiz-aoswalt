function tree() {
	var treeData = {};
	treeData.height = document.getElementById("tree-height-input").value;
	treeData.character = document.getElementById("tree-character-input").value;
	buildTree(treeData);
}

function buildTree(treeData) {
	if(treeData.height < 1 || treeData.character.length < 1) {
		alert("Height and Character must be specified.");
		return;
	}

	var treeString = "";
	for (var i = 0; i < treeData.height; ++i) {
		var spaces = Array(treeData.height - i + 1).join(' ');
		var branch = Array(i + 1).join(treeData.character);

		var row = spaces + branch + treeData.character + branch + spaces;
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
