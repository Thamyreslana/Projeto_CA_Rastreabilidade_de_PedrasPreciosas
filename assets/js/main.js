funtion mostrarPedras(){
  const lista = document.getElementById("lista-pedras");
  lista.innerHTML = "";
} 

  const pedras = JSON.parse(localStorage.getItem("pedras")) || [];
  pedras.forEach(p => {
    lista.innerHTML += `<p>${p.tipo} - ${p.cor}</p>`;
  });
}
mostrarPedras();
