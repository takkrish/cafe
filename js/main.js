/* Adding the script tag to the head as suggested before */

var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "../js/jquery-3.5.1.js";

// Then bind the event to the callback function.
// There are several events for cross browser compatibility.
// Fire the loading
head.appendChild(script);


/*----  SCROLL SCRIPT  ----*/


window.onscroll = function() {
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


$('.menu').click(function() {
  $('.right_side_nav').css('right', '0');
});
$('.close').click(function() {
  $('.right_side_nav').css('right', '-100vw');
});
$('.right_side_nav span').click(function() {
  $('.right_side_nav').css('right', '-100vw');
});


// for email form 

// document.querySelector('.email_me').addEventListener('submit',submitForm);
// function submitForm(e){
//   e.preventDefault();

//   let name = document.querySelector('.name').value;
//   let email = document.querySelector('.email').value;
//   let message = document.querySelector('.message').value;

//   document.querySelector('.email_me').reset();

//   sendEmail(name,email,message);
// }


// function sendMail() {

// Email.send({
//   Host: 'smtp.gmail.com',
//   Username: 'pubghello95@gmail.com',
//   Password: '9001889409',
//   To: 'takrishtak2002@gmail.com',
//   From: "pubghello95@gmail.com",
//   Subject: "Mail sent from Website",
//   Body: `Name: ${name} <br/>Email: ${email} <br/>Message: ${message}`
// }).then((message) => alert("Mail sent successfully !")
// )
// }
/*

//  ENABLE  THIS ONLY WHEN MENU LIST IS ENABLED  

function show_hide() {
  var list = document.querySelector('.menu_list');
  list.classList.toggle('show_hide');
};

function rotate_times() {
  var times = document.querySelector('.menu_list span i');
  times.classList.toggle('fa-rotate-180');
};

*/


/*
function blue_color() {
  var btn = document.querySelector('.btn');
  btn.className.add('color_change');
//  #C7ECFFCC
}

function original_color() {
  var btn = document.querySelector('.btn');
  btn.className.remove('color_change');
//  #C7ECFFCC
}

function color_gray() {
  var explore = document.querySelector('.explore');
  explore.classList.add('color_change');
}

function color_black() {
  var explore = document.querySelector('.explore');
  explore.classList.remove('color_change');
}
*/