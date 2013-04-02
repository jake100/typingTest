//**************************************************************************************
//********************************      TILE       *************************************
//**************************************************************************************

function Tile(name, sprite, background, passable, spawns) {
	this.name = name;
	this.sprite = sprite;
	this.background = background;
	this.passable = passable;
	this.inhabitants = [];
	this.spawns = spawns;

	for (var index in spawns){
		var element = spawns[index];
		if (Math.floor((Math.random() * element) + 1) == element) {
			this.inhabitants.push(this.factory(index));
			this.inhabitants.push(this.factory(index));
		}
	}

	/*$.each(spawns, function(index, element){
		if (Math.floor((Math.random() * element) + 1) == element) {
			this.inhabitants.push(this.factory(index));
			this.inhabitants.push(this.factory(index));
		}
	});*/
	
}

/*Tile.prototype.getImage = function() {
	return "<img style='float:left' src='" + this.sprite + "'/>";
}*/

Tile.prototype.factory = function(name) {
	switch(name) {
		case "cow":
			return new Cow();
			break;
		case "ogre":
			return new Ogre();
			break;
		default:
			// error
	}
}

Tile.prototype.getImage = function() {
	//return "<img style='float:left' src='" + this.sprite + "'/>";
	var html = "<div class='tile' style=\"background-image:url('" + this.sprite + "')\">";
	
	if (this.hasInhabitant()) {
		//this.sprite = 'img/plains-cow.png';
		html += "<img src='" + this.inhabitants[0].getIcon() + "'/>";
	} else {
		//this.sprite = 'img/plains.png';
	}

	html += "</div>";
	return html;
}

Tile.prototype.getBackground = function() {
	return this.background;
}

Tile.prototype.getInhabitants = function() {
	return this.inhabitants;
}

Tile.prototype.hasInhabitant = function() {
	return (this.inhabitants.length > 0);
}


//**************************************************************************************
//********************************     PLAINS      *************************************
//**************************************************************************************

function Plains() {
	Tile.call(this, "Plains", "img/plains.png", "img/plains-old.png", true, {"cow": 40});

	//Tile.call(this, "Plains", 'img/plains.png', true);
	/*if (Math.floor((Math.random()*50)+1) == 50) {
		this.inhabitants.push(new Cow());
		this.inhabitants.push(new Cow());
	}*/
}
Plains.prototype = new Tile();
Plains.prototype.constructor = Plains;


//**************************************************************************************
//********************************     FOREST      *************************************
//**************************************************************************************

function Forest() {
	Tile.call(this, "forest", "img/forest.png", "img/forest-battle.png", true, {"imp": 15});
}
Forest.prototype = new Tile();
Forest.prototype.constructor = Forest;


//**************************************************************************************
//********************************    MOUNTAINS    *************************************
//**************************************************************************************

function Mountains() {
	Tile.call(this, "mountains", "img/mountains-icon.png", "img/mountains.png", true, {"ogre": 10});

	/*if (Math.floor((Math.random()*10)+1) == 10) {
		this.inhabitants.push(new Ogre());
		this.inhabitants.push(new Ogre());
	}*/
}
Mountains.prototype = new Tile();
Mountains.prototype.constructor = Mountains;