
const buttons = document.getElementById("buttons");
const wrapper = document.getElementById("wrapper");
const simple_one_card = document.getElementById("simple_one_card");
const simple = document.getElementById("simple");

/*function pageOne() {
	wrapper.style.display = "none";
	simple_one_card.innerHTML = "страница 1";
};

function pageTwo() {
	wrapper.style.display = "none";
	simple_one_card.innerHTML = "страница 2";
};*/
button.addEventListener("click", function(q) {
	if (simple.onclick === true) {
		wrapper.style.display = "none";
		simple_one_card.innerHTML = "страница 1";
	} else {
		wrapper.style.display = "none";
		simple_one_card.innerHTML = "страница 2";
	};
});