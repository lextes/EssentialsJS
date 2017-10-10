var arraySelect = document.getElementsByTagName('select');

var element = document.getElementById('content');

function dropdownStyles(){
    
    var style = this.id;
    var value = this.value;
    
    element.style[style] = value;
    
}


//number of objects inside of dropdownStyles, for that use the for

for( var i = 0; i < arraySelect.length; i++ ){
    
    arraySelect[i].addEventListener( 'change', dropdownStyles );
    
}

