var buyBtn = document.querySelectorAll(".item-buy");
var basketAdd = document.querySelector(".modal-basket-add");
var closeBtn = document.querySelectorAll(".close-btn");
var openFormBtn = document.querySelector(".company-contacts .btn");
var modalForm = document.querySelector(".modal-form");
var miniMap = document.getElementById("yandex-map");
var modalMap = document.getElementById("modal-map");
var moveLeftBtn = document.querySelector(".icon-left");
var moveRightBtn = document.querySelector(".icon-right");
var firstSlide = document.querySelector(".slide:first-child");
var lastSlide = document.querySelector(".slide:last-child");
var firstTab = document.querySelector(".services-menu a:nth-child(1)");
var secondTab = document.querySelector(".services-menu a:nth-child(2)");
var thirdTab = document.querySelector(".services-menu a:nth-child(3)");
var activeTab = document.querySelector(".services-menu .active-tab");
var delivery = document.querySelector(".delivery");
var garantie = document.querySelector(".garantie");
var credit = document.querySelector(".credit");

for (var i = 0; i < buyBtn.length; i++){
	buyBtn[i].addEventListener("click", function(event) {
		event.preventDefault();
		basketAdd.classList.add("show-element");	
	});
}

for (var i = 0; i < closeBtn.length; i++){
	closeBtn[i].addEventListener("click", function(event) {
		event.preventDefault();
		this.parentElement.classList.remove("show-element");	
	});
};

openFormBtn.addEventListener("click", function(event){
	event.preventDefault();
	modalForm.classList.add("show-element");
});

miniMap.addEventListener("click", function(event){
	event.preventDefault();
	modalMap.classList.add("show-element");
});

moveLeftBtn.addEventListener("click", function(event) {
	event.preventDefault();
	firstSlide.classList.toggle("hide-element");
});

moveRightBtn.addEventListener("click", function(event) {
	event.preventDefault();
	firstSlide.classList.toggle("hide-element");
});

firstTab.addEventListener("click", function(event){
	event.preventDefault();

	delivery.classList.add("show-element");
	this.classList.add("active-tab");
	delivery.classList.remove("hide-element");
	garantie.classList.add("hide-element");
	credit.classList.add("hide-element");
	thirdTab.classList.remove("active-tab");
	secondTab.classList.remove("active-tab");
});

secondTab.addEventListener("click", function(event){
	event.preventDefault();

	garantie.classList.add("show-element");
	this.classList.add("active-tab");
	garantie.classList.remove("hide-element");
	delivery.classList.add("hide-element");
	credit.classList.add("hide-element");
	firstTab.classList.remove("active-tab");
	thirdTab.classList.remove("active-tab");
});

thirdTab.addEventListener("click", function(event){
	event.preventDefault();
	
	credit.classList.add("show-element");
	this.classList.add("active-tab");
	credit.classList.remove("hide-element");
	garantie.classList.add("hide-element");
	delivery.classList.add("hide-element");
	firstTab.classList.remove("active-tab");
	secondTab.classList.remove("active-tab");
});