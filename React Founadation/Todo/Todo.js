let globalId = 1;

function markasdone(id) {
  const parent = document.getElementById(id);
  parent.children[2].innerHTML = "DONE";
}

function newtodo(title, descr, id) {
  const outerdiv = document.createElement("div");

  const firstDiv = document.createElement("div");
  firstDiv.innerHTML = title;
  const seconddiv = document.createElement("div");
  seconddiv.innerHTML = descr;
  const markasdone = document.createElement("button");
  markasdone.innerHTML = "Mark as done";
  markasdone.setAttribute("onclick", `markasdone(${id})`);

  outerdiv.appendChild(firstDiv);
  outerdiv.appendChild(seconddiv);
  outerdiv.appendChild(markasdone);
  outerdiv.setAttribute("id", id);

  return outerdiv;
}

function todo() {
  const title = document.getElementById("title").value;
  const descr = document.getElementById("description").value;
  const conatiner = document.getElementById("container");
  conatiner.appendChild(newtodo(title, descr, globalId))
}
