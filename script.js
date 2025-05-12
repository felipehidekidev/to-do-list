const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const listEl = document.getElementById("list-el");
let lista = [];

let arquivos = JSON.parse(localStorage.getItem("tarefas"));

if (arquivos) {
  lista = arquivos;
  for (let i = 0; i < lista.length; i++) {
    const tarefa = document.createElement("li");
    tarefa.innerHTML = lista[i];
    listEl.appendChild(tarefa);
  }
} else {
}

inputBtn.addEventListener("click", function () {
  if (inputEl.value.trim() === "") {
    alert("Por favor, insira uma tarefa!");
    return; // Não faz nada se estiver vazio
  }
  {
    const tarefa = document.createElement("li");
    tarefa.innerHTML = inputEl.value;
    listEl.appendChild(tarefa);
    lista.push(inputEl.value);
    localStorage.setItem("tarefas", JSON.stringify(lista));
    inputEl.value = "";
  }
});

deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  listEl.innerHTML = "";
  lista = [];
});
