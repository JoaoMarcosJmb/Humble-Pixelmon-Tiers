<script>
const container = document.getElementById("pokemonContainer");

// Exemplo de dados estáticos
const pokemons = [
  { name: "Pikachu", id: 25, image: "img/Starters.png" },
  { name: "Bulbasaur", id: 1, image: "img/Starters.png" },
  { name: "Monomon", id: 0, image: "img/Monomon.png" }
];

pokemons.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <div class="card-text">
      <h2>${p.name}</h2>
      <p>ID: ${p.id}</p>
    </div>
  `;
  container.appendChild(card);
});

// Atualiza o título
document.querySelector("header h1").textContent = "Pokémons Carregados!";
</script>
