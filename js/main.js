/* Adding the script tag to the head as suggested before */

var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '../js/jquery-3.5.1.js';

// Then bind the event to the callback function.
// There are several events for cross browser compatibility.
// Fire the loading
head.appendChild(script);

/*----  SCROLL SCRIPT  ----*/

window.onscroll = function () {
	const nav = document.querySelector('.navbar');
	nav.classList.toggle('active', window.scrollY > 0);
};

/*----  SCROLLBAR  ----*/

/* -----  ON LOAD FUNCTION  ----*/

$(window).on('load', () => {
	$('.load_div').fadeOut(1000);
	$('main').fadeIn(1000);
});

/*----  JQUERY SCRIPT  ---+*/

$('.menu').click(function () {
	$('.right_side_nav').css('right', '0');
});
$('.close').click(function () {
	$('.right_side_nav').css('right', '-100vw');
});
$('.right_side_nav span').click(function () {
	$('.right_side_nav').css('right', '-100vw');
});

document.getElementById('form').addEventListener('submit', function (e) {
	e.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;
	const subject = 'Cafe Website';
	window.open(
		`mailto:cafewebsite08@gmail.com?subject=${subject}&body=Sender: ${name} ,%0D%0AEmail: ${email} ,%0D%0A${message}`
	);
});
