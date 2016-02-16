//Speechbar Timer
var time = setTimeout(timeout, 2000);

function timeout()
{
	$('#word_1').animate(
	{
		marginTop: '-=20px'
	}, 750); 
	time = setTimeout(timeout, 2000);
}
