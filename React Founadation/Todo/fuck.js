let globalId=1

function markasdone(todoid){
    const parent=document.getElementById(todoid)
    parent.children[2].innerHTML="DONE"
}
function childtodo(title,description,id){
    const outerdiv=document.createElement("div")
    const firstdiv=document.createElement("div")
    firstdiv.innerHTML=title
    const seconddiv=document.createElement("div")
    seconddiv.innerHTML=description
    const thirddiv=document.createElement("button")
    thirddiv.innerHTML="Mark As Done"
    thirddiv.setAttribute("onclick",`markasdone(${id})`)
    outerdiv.appendChild(firstdiv)
    outerdiv.appendChild(seconddiv)
    outerdiv.appendChild(thirddiv)
    outerdiv.setAttribute("id",id) //parent in markasdone
    return outerdiv


}

function todo(){
    const title=document.getElementById("title").value
    const description=document.getElementById("description").value
    const container=document.getElementById("container")
    container.appendChild(childtodo(title,description,globalId++))
}