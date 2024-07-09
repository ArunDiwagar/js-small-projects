async function fetchdata() {
    try {
        const pokemonname = document.getElementById("pokemonname").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);

        if (!response.ok) {
            throw new Error("could not fetch pokemon ");
        }

        const data = await response.json();
        const pokemonsprite = data.sprites.front_default;
        const pokemonweight = data.weight;
        const imgelement = document.getElementById("pokemonsprite");
        const weightelement = document.getElementById("pokemonweight");

        weightelement.textContent = `Weight: ${pokemonweight}`;
        weightelement.style.display = 'block';
        imgelement.src = pokemonsprite;
        imgelement.style.display = "block";

    } catch (error) {
        console.error(error);
    }
}
