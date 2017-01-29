// typer
function whatIam() {
	var traitsMarina = ['front-end developer', 'solution provider', 'awesome friend', 'jQuery lover', 'SASS appreciator'];
	var getTraitsMarina = Math.floor(Math.random() * traitsMarina.length);
	document.getElementById("my-traits").innerHTML = traitsMarina[getTraitsMarina];
}
setInterval(whatIam, 1500);

// typer effect
setInterval(function() {
	$(".typer-effect").animate({
		opacity: 0
	}, "fast", "swing").animate({
		opacity: 1
	}, "fast", "swing");
}, 600);

// update footer
var today = new Date();
var year = today.getFullYear();
var copyright = document.getElementById("copyright");
copyright.innerHTML = "&copy Marina Marques " + year;