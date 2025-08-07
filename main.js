const buttons = document.querySelectorAll(".info_buttons_cv");

function clickBoxText(){

	buttons.forEach(function(button) {

		button.addEventListener('click', function(){
			const textBody = this.querySelector(".info_buttons_body_cv");

			button.classList.toggle("visivel_box");

			textBody.classList.toggle("visivel_body");
			
		});

	});

};

clickBoxText();

const projectItem = document.querySelectorAll(".projects_item_pf");

function hoverBoxProject(){
	
}