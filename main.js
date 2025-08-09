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

function showHiddenEffect(projectItemHover) {
	const hiddenItemLeft = projectItemHover.querySelector(".projects_item_hidden_left_pf");
	const hiddenItemRight = projectItemHover.querySelector(".projects_item_hidden_right_pf");

	hiddenItemLeft.classList.remove("projects-hover-hidden-item");
	hiddenItemLeft.classList.add("projects-hover-showing-item");
	hiddenItemRight.classList.remove("projects-hover-hidden-item");
	hiddenItemRight.classList.add("projects-hover-showing-item");
}

function hideHiddenEffect(projectItemHover) {
	const hiddenItemLeft = projectItemHover.querySelector(".projects_item_hidden_left_pf");
	const hiddenItemRight = projectItemHover.querySelector(".projects_item_hidden_right_pf");	

	hiddenItemLeft.classList.remove("projects-hover-showing-item");
	hiddenItemLeft.classList.add("projects-hover-hidden-item");
	hiddenItemRight.classList.remove("projects-hover-showing-item");
	hiddenItemRight.classList.add("projects-hover-hidden-item");
}

function expandHoverBox(projectItemHover) {
	projectItemHover.classList.toggle("projects-hover-box");
	showHiddenEffect(projectItemHover);
}

function retractHoverBox(projectItemHover) {
	projectItemHover.classList.toggle("projects-hover-box");
	hideHiddenEffect(projectItemHover);
}

const projectItems = document.querySelectorAll(".projects_item_pf");

projectItems.forEach(function(projectItem){
	projectItem.addEventListener("mouseenter", function(){
		const projectItemCurrentHover = this;
		projectItems.forEach(function(projectItemHover) {
			if (projectItemHover === projectItemCurrentHover) {
				expandHoverBox(projectItemHover);
			} else {
				retractHoverBox(projectItemHover);
			}
		});
	
		projectItem.addEventListener("mouseleave", function(){
			projectItems.forEach(function(projectItemHover){
				retractHoverBox(projectItemHover);
			});
		});
	});
});
