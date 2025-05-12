const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const listEl = document.getElementById("list-el");
let lista = [];

let arquivos = JSON.parse(localStorage.getItem("tarefas"));
//renderiza a base que ja existe
if (arquivos) {
  lista = arquivos;
  for (let i = 0; i < lista.length; i++) {
    const tarefaTexto = lista[i];
    const tarefa = document.createElement("li");
    tarefa.innerHTML = tarefaTexto;
    listEl.appendChild(tarefa);
    const removerItem = document.createElement("button");
    removerItem.innerHTML = "Remover";
    tarefa.appendChild(removerItem);
    removerItem.addEventListener("click", function () {
      const index = lista.indexOf(tarefaTexto);
      if (index !== -1) {
        lista.splice(index, 1);
        localStorage.setItem("tarefas", JSON.stringify(lista));
        tarefa.remove();
      }
    });
  }
} else {
}
//adicionar tarefa criando uma li nova
inputBtn.addEventListener("click", function () {
  if (inputEl.value.trim() === "") {
    alert("Por favor, insira uma tarefa!");
    return; // Não faz nada se estiver vazio
  }

  const tarefaTexto = inputEl.value;
  const tarefa = document.createElement("li");
  tarefa.innerHTML = inputEl.value;
  listEl.appendChild(tarefa);
  lista.push(tarefaTexto);
  localStorage.setItem("tarefas", JSON.stringify(lista));
  inputEl.value = "";

  const removerItem = document.createElement("button");
  removerItem.innerHTML = "Remover";
  tarefa.appendChild(removerItem);
  removerItem.addEventListener("click", function () {
    const index = lista.indexOf(tarefaTexto);
    if (index !== -1) {
      lista.splice(index, 1);
      localStorage.setItem("tarefas", JSON.stringify(lista));
      tarefa.remove();
    }
  });
});

deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  listEl.innerHTML = "";
  lista = [];
});
