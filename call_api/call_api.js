
const callApi = async () => {

    // try dentro de el esta  codigo que puede dar un error 
    try {

        // hace una peticion http con fetch 
        
        // Importante a la Url que hacemos fetch podemos decirle cuantos pokemon queremos con el parametro limmit = 151 en este caso sacara los primeros 151 pokemos
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=721')
        console.log(response)

        // Me saca la respuesta en formato json con  const data = await response.json()

        const data = await response.json()
        /* saca la 4 posicion del los datos optenidos por fetch accediendo a las propiedades de datos y luego a los resultados // Imprime el cuarto Pokémon en la lista que es charmander

        console.log(data.results[3])
        */
        console.log(data)

        // la constante data es toda la informacion de la api 

        // Mirar el metodo map y porque no funciona con foreach

         data.results.map(pokemon => {
            const section = document.querySelector("section")
            const article = document.createElement("article")
            const  h2 = document.createElement("h2")
            const span = document.createElement("span")
            const pokemonInformation = console.log(pokemon.name,pokemon.url)

            /* Intentar entender esta parte
            const numberPokemon = pokemon.url.split("/").filter(Boolean).pop();
            */ 
            const numberPokemon = pokemon.url.split("/").filter(Boolean).pop();
            const pokemonId = `#${numberPokemon} `;

             h2.textContent = (pokemon.name)
             section.appendChild(article)
             article.appendChild(h2)
             article.appendChild(span)
             span.textContent = (pokemonId)
             console.log(pokemonInformation)
        })

        console.log(data.results)
        // Captura el error del try si ocurre uno y imprime el error por consola

    } catch (error) {
        console.log(error)
    }
    }

callApi()



// apenchid inserta un elemento html desde javascript como hijo  section.appendChild(article) en este ejemplo dentro de section habra un article