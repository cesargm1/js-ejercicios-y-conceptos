const callApi = async () => {

    // try dentro de el esta  codigo que puede dar un error 
    try {

        // hace una peticion http con fetch 
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
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
            console.log(pokemon.name,pokemon.url)
        })

        // Captura el error del try si ocurre uno y imprime el error por consola

    } catch (error) {
        console.log(error)
    }
    }

callApi()