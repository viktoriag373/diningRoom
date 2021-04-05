'use strict'

window.onload = function () {

    //получаем идентификатор элемента
	const searchCategoriesFilter = document.querySelector(".search-categories__filter");
	const searchCategoriesSubnav = document.querySelector(".search-categories__subnav");
	const searchCategoriesCategoryItem = document.querySelectorAll(".search-categories__category-item");
	const searchCategoriesFilterValue = document.querySelector(".search-categories__filter-value");

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
	

	searchCategoriesFilter.onclick = categoriesSubnavToggle;

	for (let index = 0; index < searchCategoriesCategoryItem.length; index++) {
		searchCategoriesCategoryItem[index].onclick = onCategoryClick;
	}
}

