async function carregarPedras() {
  cons resposta = await fetch("assets/data/pedras.json");
  cons pedras = await resposta.json();
  cons lista = document.getElemenById("lista-pedras");
  
  pedras.forEach(pedra => {
    const div = document.createElement("div");
    div.classList.add("pedra-card");
    div.innerHTML = `
      <h2>${pedra.tipo} (${pedra.cor})</h2>
      <p><strong>Peso:</strong> ${pedra.peso}g</p>
      <p><strong>Categoria:</strong> ${pedra.categoria}</p>
      <p><storng>Local:</strong> ${pedra.local_extracao}</p>

      <h3>Garimpeiro</h3>
      <p>${pedra.garimpeiro.nome}</p>

      <h3>Método de Garimpo</h3>
      <p>${pedra.metoso_garimpo.tecnica}</p>
  ´;
   lista.appendChild(div);
   });
}
carregarPedras();
