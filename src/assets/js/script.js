'use strict'

window.onload = function () {

    //получаем идентификатор элемента
	const searchCategoriesFilter = document.querySelector(".search-categories__filter");
	const searchCategoriesSubnav = document.querySelector(".search-categories__subnav");
	const searchCategoriesCategoryItem = document.querySelectorAll(".search-categories__category-item");
	const searchCategoriesFilterValue = document.querySelector(".search-categories__filter-value");
	const modalContactUsClose = document.querySelector(".modal-contact-us__close");
	const modalContactUs = document.querySelector(".modal-contact-us");
	const menuItemTel = document.querySelector(".menu__item-tel .menu__link");

	function categoriesSubnavToggle() {
		searchCategoriesSubnav.classList.toggle("search-categories__subnav--visible");
	}

	function categoriesSubnavClose() {
		searchCategoriesSubnav.classList.remove("search-categories__subnav--visible");
	}

	function onCategoryClick(event) {
		searchCategoriesFilterValue.innerText = event.target.innerText;
		categoriesSubnavClose();
	}
	
	function modalFormClose() {
		modalContactUs.classList.remove("modal-contact-us--visible");
		modalContactUs.classList.add("modal-contact-us--hidden");
	}

	function modalFormOpen() {
		modalContactUs.classList.remove("modal-contact-us--hidden");
		modalContactUs.classList.add("modal-contact-us--visible");
	}


	menuItemTel.onclick = modalFormOpen;
	modalContactUsClose.onclick = modalFormClose;
	searchCategoriesFilter.onclick = categoriesSubnavToggle;

	for (let index = 0; index < searchCategoriesCategoryItem.length; index++) {
		searchCategoriesCategoryItem[index].onclick = onCategoryClick;
	}
}

