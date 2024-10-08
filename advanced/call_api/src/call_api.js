const callApi = async () => {
	// try dentro de el esta  codigo que puede dar un error
	try {
		// hace una peticion http con fetch

		// Importante a la Url que hacemos fetch podemos decirle cuantos pokemon queremos con el parametro limmit = 151 en este caso sacara los primeros 151 pokemos
		const responsePokemon = await fetch(
			"https://pokeapi.co/api/v2/pokemon?limit=151"
		);
		// Realizamos otra llamada por fetch para sacar el tipo de los pokemon
		const responseType = await fetch(" https://pokeapi.co/api/v2/type/");

		// Me saca la respuesta en formato json con  const dataPokemon = await response.json() y const dataType = await responseType.json(); estos json sacan el nombre del pokemon y el tipo

		const dataPokemon = await responsePokemon.json(); // saca el nombre del pokemon y la url en json
		const dataType = await responseType.json(); // saca el tipo del pokemon  en json
		/* saca la 4 posicion del los datos optenidos por fetch accediendo a las propiedades de datos y luego a los resultados // Imprime el cuarto Pokémon en la lista que es charmander

        console.log(data.results[3])
        */
		// console.log(dataPokemon);
		// console.log(dataType);

		// la constante dataPokemon  es toda la informacion de este fecth "https://pokeapi.co/api/v2/pokemon?limit=151" transformado en JSON

		// Lo mismo pasa con dataType

		// Mirar el metodo map y porque no funciona con foreach

		dataPokemon.results.map((pokemon) => {
			const section = document.querySelector("section");
			const article = document.createElement("article");
			const h2 = document.createElement("h2");
			const span = document.createElement("span");
			const imgPokemon = document.createElement("img");

			// console.log(pokemon.name, pokemon.url);

			/* Intentar entender esta parte
           filtra todos los valores que tengan contenido true si no tiene contenido sera false mejorar esta parte
            */
			const numberPokemon = pokemon.url.split("/").filter(Boolean).pop();
			const pokemonId = `#${numberPokemon} `;

			// En el elemento imagen accedemos  a la propiedad src y interpolamos la URL con el nombre de cada pokemon de este modo obtenemos la imagen de cada pokemon
			imgPokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numberPokemon}.png`;

			h2.textContent = pokemon.name;
			section.appendChild(article);
			article.appendChild(h2);
			article.appendChild(span);
			article.appendChild(imgPokemon);
			span.textContent = pokemonId;
		});
		// console.log(data.results);

		dataType.results.map((type) => {
			const section = document.querySelector("section");
			const article = document.querySelector("article");
			const span = document.createElement("span");
			const typePokemon = type.name;
			span.textContent = typePokemon;
			article.appendChild(span);

			console.log(typePokemon);
		});
	} catch (error) {
		// Captura el error del try si ocurre uno y imprime el error por consola
		console.log(error);
	}
};

callApi();

// apenchid inserta un elemento html desde javascript como hijo  section.appendChild(article) en este ejemplo dentro de section habra un article
