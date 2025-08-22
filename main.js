// Aqui fica a função para quando clicar no botão da pagina CV, apareça as informações

const buttons = document.querySelectorAll(".info_buttons_cv");

function clickBoxText(){

	buttons.forEach(function(button) {		// Aqui pegamos cada botão individualmente

		button.addEventListener('click', function(){	// Adicionamos um eventListener para quando clicar ativar a função
			
			const textBody = this.querySelector(".info_buttons_body_cv");	// Selecionamos o botão
			const textInsideBodyTitle = textBody.querySelectorAll(".info_buttons_body_title_cv"); // Pegamos os elementos do foreach do PHP de titulo
			const textInsideBodyDescription = textBody.querySelectorAll(".info_buttons_body_description_cv"); // Pegamos os elementos do foreach do PHP de body/description
			const isOpen = this.classList.contains("visible_box");
			const currentButton = this

			if (this.dataset.animating === "true"){
				return;
			};

			this.dataset.animating = "true"
			
			if (isOpen){
				textBody.classList.add("fade-out")

				
				currentButton.classList.remove("visible_box");
				setTimeout(() => {
					textBody.classList.remove("visible_body");
					textBody.classList.remove("fade-out");
				}, 1000);

				// Aqui colocamos a class .visible para todos os elementos que aparecem no foreach do PHP
				textInsideBodyTitle.forEach(function(title) {
					title.classList.remove("visible");
				});
				textInsideBodyDescription.forEach(function(description){
					description.classList.remove("visible")
				})
				

				setTimeout(() => {
					currentButton.dataset.animating = "false"
				}, 1500)

			} else {
				this.classList.add("visible_box");
				textBody.classList.add("visible_body");

				// Aqui colocamos a class .visible para todos os elementos que aparecem no foreach do PHP
				textInsideBodyTitle.forEach(function(title) {
					title.classList.add("visible");
				});
				textInsideBodyDescription.forEach(function(description){
					description.classList.add("visible")
				})

				setTimeout(() => {
					currentButton.dataset.animating = "false"
				}, 1500);
			}
			
		});
	});
};

clickBoxText(); //Chamamos a função para que ela seja ativada

// Aqui é a parte do portfolio para o aumento das boxs dos projetos no hover

// Aqui é a função para fazer aparecer as divs que contem _hidden_
function showHiddenEffect(projectItemHover) {
	if (projectItemHover.dataset.animating === "true"){
		return;
	}

	projectItemHover.dataset.animating = "true";

	const hiddenItemLeft = projectItemHover.querySelector(".projects_item_hidden_left_pf");
	const hiddenItemRight = projectItemHover.querySelector(".projects_item_hidden_right_pf");

	hiddenItemLeft.classList.remove("projects-hover-hidden-item");
	hiddenItemLeft.classList.add("projects-hover-showing-item");
	hiddenItemRight.classList.remove("projects-hover-hidden-item");
	hiddenItemRight.classList.add("projects-hover-showing-item");

	setTimeout(() => {
        hiddenItemLeft.classList.add("fade-in");
        hiddenItemRight.classList.add("fade-in");

		projectItemHover.dataset.animating = "false"
    }, 100);
}

// Aqui é a função para fazer desaparecer as divs que contem _hidden_
function hideHiddenEffect(projectItemHover) {
	if (projectItemHover.dataset.animating === "true"){
		return;
	}

	projectItemHover.dataset.animating = "true";

	const hiddenItemLeft = projectItemHover.querySelector(".projects_item_hidden_left_pf");
	const hiddenItemRight = projectItemHover.querySelector(".projects_item_hidden_right_pf");	

	hiddenItemLeft.classList.remove("fade-in");
    hiddenItemRight.classList.remove("fade-in");

	
	setTimeout(() => {
		hiddenItemLeft.classList.remove("projects-hover-showing-item");
		hiddenItemLeft.classList.add("projects-hover-hidden-item");
		hiddenItemRight.classList.remove("projects-hover-showing-item");
		hiddenItemRight.classList.add("projects-hover-hidden-item");

		projectItemHover.dataset.animating = "false"
	}, 1000);
	
}

// Aqui fazemos a box inteira expandir
function expandHoverBox(projectItemHover) {
	projectItemHover.classList.add("projects-hover-box");
		showHiddenEffect(projectItemHover)
}

// Aqui fazemos a box inteira retrtair
function retractHoverBox(projectItemHover) {
	projectItemHover.classList.remove("projects-hover-box");
	hideHiddenEffect(projectItemHover);
}

// Aqui começa a função em si de aumentar e diminuir
const projectItems = document.querySelectorAll(".projects_item_pf");

projectItems.forEach(function(projectItem){ // Pegamos cada projeto individualmente com o for each

	projectItem.addEventListener("mouseenter", function(){ // Colocamos um event listener para a entrada do mouse na div
		const projectItemCurrentHover = this;

		projectItems.forEach(function(projectItemHover) { // Aqui selecionamos de novo individualmente cada projeto

			if (projectItemHover === projectItemCurrentHover) { // Quem está com o hover, aumenta, quem não está, mantem a mesma proporção ou retrai
				expandHoverBox(projectItemHover);
			} else {
				retractHoverBox(projectItemHover);
			}
		});
	});
	// Aqui apenas colocamos a função de sair do hover para voltar ao normal
	projectItem.addEventListener("mouseleave", function(){
		projectItems.forEach(function(projectItemHover){
				retractHoverBox(projectItemHover);
		});
	});
});