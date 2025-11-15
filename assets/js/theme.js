const toggleBtn = docment.getElementById("toggle-theme");
const body = document.body;

//Salva o tema escolhido
const saved = localStorage.getItem("theme");
if(saved === "dark") body.classList.add("dark-theme");

toggleBtn.addEvenListener("click", () => {
  body.classList.toggle("dark-theme");

  if(body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  }else{
    localStorage.setItem("theme", "light");
  }
});
