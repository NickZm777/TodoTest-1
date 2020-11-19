document.body.style.backgroundColor="grey"

let ch = document.querySelector(".change")
let backButton = document.querySelector("#back")
let inputarea = document.getElementsByClassName('inputarea')






function delAllDivs() {
    document.querySelector(".divArea").style.display = "none"
}

function addDiv() {
    
    const newDiv = document.createElement("div")
    newDiv.className="divArea"
    
    const now = new Date()
    const modDate = `${now.getDay()}, ${now.getMonth()}, ${now.getFullYear()}`
    const modTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    
    newDiv.innerHTML=`New div <br><p> created on: ${modDate} <br> created at: ${modTime} </p>`
    newDiv.style.margin = "10px"
    document.body.append(newDiv)
    
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete"
    newDiv.append(deleteButton)
    function del() {
        newDiv.style.display = "none"
    }
    const changeButton = document.createElement("button")
    changeButton.innerHTML = "Change color"
    newDiv.append(changeButton)
    function changeColor() {
        newDiv.style.backgroundColor = "red"
    }
    changeButton.addEventListener('click', changeColor)

    deleteButton.addEventListener("click", del)

    const clearButton = document.createElement("button")
    clearButton.innerHTML = "Clear"
    newDiv.append(clearButton)
    function clear() {
        newDiv.innerHTML = `Cleared <br> <p> on : ${new Date()} </p>`
        newDiv.style.backgroundColor = "white"
        const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete"
    newDiv.append(deleteButton)
    newDiv.querySelector("p").style.fontSize = "15px"
    newDiv.querySelector("p").style.color = "black"
    deleteButton.addEventListener("click", del)
    }
    clearButton.addEventListener('click', clear)

    
    function addInnerDiv(bgColor) {
        const innerDiv = document.createElement("div")
        innerDiv.innerHTML = "Inside DIV"
        innerDiv.style.backgroundColor = bgColor
        innerDiv.style.color = "black"
        innerDiv.style.padding = "10px"
        innerDiv.style.border = "1px solid violet"
        innerDiv.style.margin = "10px"
        newDiv.appendChild(innerDiv)
        const delInnerDivButton = document.createElement("button")
    delInnerDivButton.innerHTML = "delete"
    innerDiv.append(delInnerDivButton)
    function delinnerDiv() {
        innerDiv.style.display = "none"
    }
    delInnerDivButton.addEventListener('click', delinnerDiv)
    }

    const addGoldInnerDivButton = document.createElement("button")
    addGoldInnerDivButton.innerHTML = "Add  GOLDEN  inside DIV"
    newDiv.append(addGoldInnerDivButton)
    addGoldInnerDivButton.addEventListener("click", () => addInnerDiv("gold"))

    const addVioletInnerDivButton = document.createElement("button")
    addVioletInnerDivButton.innerHTML = "Add  VIOLET  inside DIV"
    newDiv.append(addVioletInnerDivButton)
    addVioletInnerDivButton.addEventListener("click", () => addInnerDiv("violet"))


}



function deleteChanger() {
    
    let er = document.querySelector(".inputarea3").innerHTML
    document.querySelector(".inputarea").innerHTML=er
    document.querySelector("#back").style.backgroundColor="lightgray"
}


function changer() {
    let er = document.querySelector(".inputarea2").innerHTML
    document.querySelector(".inputarea").innerHTML=er
    document.querySelector(".inputarea").style.backgroundColor="green"
    document.querySelector("#back").style.backgroundColor="red"
}

function back() {
    document.querySelector(".inputarea").style.backgroundColor="aquamarine"
    document.querySelector("#back").style.backgroundColor="lightgray"
    document.querySelector(".inputarea").innerHTML="This is input text example"

}


