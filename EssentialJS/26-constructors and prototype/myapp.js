function Apple( color, weight )
{   
    this.color = color;
    this.weight = weight;
}

Apple.prototype = {
	//eat : function(){ return "eat the apple"; },
	eat : function(){ return this; },
    throw : function(){ return "throw the apple"; }
};

var apple1 = new Apple( "red", 99 );
var apple2 = new Apple( "green", 109 );
var apple3 = new Apple( "pink", 299 ); 

/* change a new prototype


Apple.prototype.eat = function(){ return "A huevo nueva manzana"};


//read console

apple1.eat();
"A huevo nueva manzana"*/