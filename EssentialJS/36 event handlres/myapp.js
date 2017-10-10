var select = document.getElementsByName('cars')[0];

select.onclick = function( event ){

	console.log( event );
};

function ClickCallback(event){

	console.log( 'clicked by add event listener 3' );
	
}

/* 
select.addEventListener( 'click', function( event ){

	console.log('clicked by add event listener');
} );

select.addEventListener( 'click', function( event ){

	console.log('clicked by add event listener 2');
} );
*/

select.addEventListener('click', ClickCallback);

select.removeEventListener( 'click', ClickCallback );