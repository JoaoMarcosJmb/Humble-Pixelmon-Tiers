async function loadAllowlist() {
  const params = new URLSearchParams(window.location.search);
  const file = params.get("file");

  if (!file) {
    document.getElementById("title").textContent = "Nenhum arquivo selecionado.";
    return;
  }

  // Deixa o nome bonito: remove prefixo/sufixo e coloca primeira letra maiúscula
  let displayName = file
    .replace("allowlist_", "")   // tira "allowlist_"
    .replace(".json", "");       // tira ".json"

  displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);

  document.getElementById("title").textContent = `Tier: ${displayName}`;

  try {
    const response = await fetch(file);
    const data = await response.json();

    const container = document.getElementById("pokemonContainer");
    container.innerHTML = "";

    for (const [name, info] of Object.entries(data)) {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${info.sprite}" alt="${name}">
        <div class="name">${name}</div>
        <div class="id">#${info.id}</div>
      `;

      container.appendChild(card);
    }
  } catch (error) {
    document.getElementById("title").textContent = "Erro ao carregar o arquivo.";
    console.error(error);
  }
}

loadAllowlist();
