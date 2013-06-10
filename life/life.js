var Life = function(playerElement) {
	this.player = playerElement;
	this.addLifeContainer(this.player);
	this.life = 20;
}


// Add Life Container
Life.prototype.addLifeContainer = function(player) {

	var id = player.id+'life';
	var element = document.getElementById(id);

	if(typeof(element) == 'undefined' || element == null) {

		var section;
		var subtract, subtractText;
		var add, addText;
		var life;
		var parentObj = this;

		section = document.createElement('section');
		section.id        = id;
		section.className = 'lifeContainer';

		subtractText       = document.createTextNode('-');
		subtract           = document.createElement('a');
		subtract.className = 'subtract';
		subtract.href      = '#';
		subtract.onclick   = function() { parentObj.life--; return false; };
		subtract.appendChild(subtractText);

		addText       = document.createTextNode('+');
		add           = document.createElement('a');
		add.className = 'add';
		add.href      = '#';
		add.onclick   = function() { parentObj.life++; return false; };
		add.appendChild(addText);

		life           = document.createElement('span');
		life.className = 'life';

		section.appendChild(subtract);
		section.appendChild(add);
		section.appendChild(life);

		player.appendChild(section);
	}

}

// Get and set life.
Object.defineProperty(Life.prototype, "life", {
	get: function() { return Number(this.player.getElementsByClassName('life')[0].innerHTML) },
	set: function(value) { this.player.getElementsByClassName('life')[0].innerHTML = Number(value) }
});


