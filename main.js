const buttons = document.querySelectorAll(".info_buttons_cv");
const textBody = document.querySelector(".info_buttons_body_cv");

function hoverBoxText(){

	buttons.forEach(function(button) {

		button.addEventListener('click', function(){

			button.classList.toggle("visivel_box");

			textBody.classList.toggle("visivel_body");
			
		});

	});

};

hoverBoxText()