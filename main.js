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

const hiddenItemLeft = document.querySelector(".projects_item_hidden_left_pf");
const hiddenItemRight = document.querySelector(".projects_item_hidden_right_pf");

function showHiddenEffect() {
	
	hiddenItemLeft.classList.remove("rojects-hover-hidden-item");
	hiddenItemLeft.classList.add("projects-hover-showing-item");

	hiddenItemRight.classList.remove("rojects-hover-hidden-item")
	hiddenItemRight.classList.add("projects-hover-showing-item")
}

function hideHiddenEffect() {
	hiddenItemLeft.classList.remove("projects-hover-showing-item");
	hiddenItemLeft.classList.add("rojects-hover-hidden-item");

	hiddenItemRight.classList.remove("projects-hover-showing-item");
	hiddenItemRight.classList.add("rojects-hover-hidden-item");
}

const projectItem = document.querySelectorAll(".projects_item_pf");

function hoverBoxProject(){
	
}