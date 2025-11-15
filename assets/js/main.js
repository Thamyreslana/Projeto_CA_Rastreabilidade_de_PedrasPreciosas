funtion mostrarPedras(){
  const lista = document.getElementById("lista-pedras");
  lista.innerHTML = "";
} 

  const pedras = JSON.parse(localStorage.getItem("pedras")) || [];
  pedras.forEach(p => {
    lista.innerHTML += `
        <div class="card">
          <h3>${p.tipo} (${p.cor})</h3>
          <p><strong>Categoria:</strong> ${p.categoria}</p>
          <p><strong>Peso:</strong> ${p.peso}</p>
          <p><strong>Local:</strong> ${p.local_extracao}</p>
          <p><strong>Data:</strong> ${p.data_extracao}</p>

          <h4>Garimpeiro</h4>
          <p>${p.garimpeiro.nome} - ${p.garimpeiro.cooperativa}</p>

          <h4>Método</h4>
          <p>${p.metodo.tecnica}</p>
          </div>
          <hr>
    `;
  });
}
mostrarPedras();

const form = document.getElementById("form-pedra");
form.addEvenListener("submit", (e) => {
  e.preventDefaulf();

  const novaPedra = {
    id: crypto.randomUUID(),
    categora: document.getElementById("categoria").value,
    cor: document.getElementById("cor").value,
    tipo: document.getElementById("tipo").value,
    peso: document.getElementById("peso").value,
    local_extracao: document.getElementById("local").value,
    data_extracao: new Date().toISOString().split("T")[0],

    garimpeiro: {
      nome: document.getElementById("garimpeiro-nome").value,
      cooperativa: document.getElementById("garimpeiro-coop").value
    },

    metodo_garimpo: {
      tecnica: document.getElementById("tecnica").value
      }
    };

  let pedras = JSON.parse(localStrorage.getItem("pedras") || [];

  pedras.push(novaPedra);

  localStrorage.setItem("pedras", JSON.strigify(pedras))
  alert("Pedra cadastrada com sucesso!!");
  form.reset();

  mostrarPedras();
}); 
