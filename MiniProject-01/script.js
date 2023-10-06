// let loading = document.getElementById("loadingWheel");
const myFormValue = document.getElementById("contentForm");
const searchHistory = [];
const menuSvgContainer = document.getElementById("menuSvgContainer");
const dropdownMenu = document.getElementById("dropdownMenu");

menuSvgContainer.addEventListener("click", function () {
	console.log("clicked");
	if (dropdownMenu.style.display === "none") {
		dropdownMenu.style.display = "block";
	} else {
		dropdownMenu.style.display = "none";
	}
});

myFormValue.addEventListener("submit", (e) => {
	e.preventDefault();

	const searchValue = document.getElementById("inputField");
	if (searchValue.value === "") {
		console.log("error");
	} else {
		callOpenApi(searchValue.value);
		searchHistory.push(searchValue.value);
	}
});

const callOpenApi = async (searchValue) => {
	try {
		const response = await fetch(
			`https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=c9db7ab6&app_key=159b2efbdd90aec7d4d3852ef7503522`
		);
		const data = await response.json();
		const { hits } = data;
		console.log("hits", hits);
		if (hits.length > 0) {
			const cards = document.getElementById("cards");
			cards.innerHTML = "";
			hits.forEach((item) => {
				const cardDiv = document.createElement("div");
				cardDiv.className = "card";

				cardDiv.innerHTML = `
					<div class="cardContent">
						<div class="cardImage">
							<Image src="${item.recipe.image}" width="100%" height="220px" alt="${item.recipe.label}"/>
						</div>
						<div class="cardInfo">
							<div class="cardInfoTitle">
								<h3>${item.recipe.label}</h3>  
								<h4>${item.recipe.mealType}</h4>
							</div> 
						</div>   
					</div>
				`;
				cards.appendChild(cardDiv);
			});
		}

		if (searchHistory.length > 0) {
			const searchListContainer = document.getElementById(
				"searchListContainer"
			);
			const searchListContainerMenu = document.getElementById(
				"searchListContainerMenu"
			);
			searchListContainer.innerHTML = "";
			searchListContainerMenu.innerHTML = "";
			searchHistory.forEach((item) => {
				const list = document.createElement("li");
				list.innerHTML = item;
				list.id = "searchItem";
				searchListContainer.append(list);
			});
			searchHistory.forEach((item) => {
				const list = document.createElement("li");
				list.innerHTML = item;
				list.id = "searchItem";
				searchListContainerMenu.append(list);
			});
		}
	} catch (error) {
		alert("error", error);
	}
};

/**Animation and Background*/
const blob = document.getElementById("blob");

window.onpointermove = (event) => {
	const { clientX, clientY } = event;

	blob.animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{ duration: 3000, fill: "forwards" }
	);
};
