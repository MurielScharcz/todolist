const localStorageKey = 'to-do-list'

    function valideteIfExisteNewTask() {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
        let inputValue = document.getElementById("new-task").value
        let exists = values.find(x => x.name == inputValue)
        return !exists ? false : true
    }

    function newTask() {
    let input = document.getElementById("new-task");

    input.style.border = ''

    if (!input.value) {
        input.style.border = '1px solid red'
        alert("Digite algo para colocar na lista");
    }
    
    else if (valideteIfExisteNewTask()) {
        alert("Ja tem")
    }
    
    else {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
        values.push({
            name: input.value
        });
        localStorage.setItem(localStorageKey, JSON.stringify(values));
        showValues()
    }
    input.value = ''
}

function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let list = document.getElementById("to-do-list");
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++) {
        list.innerHTML += `<li>${values[i]['name']}<button id="btn-ok" onclick="removeItem('${values[i]['name']}')"><i class="fa-solid fa-xmark"></i></button><li/>`
    }
}

function removeItem(data) {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let index = values.findIndex(x => x.name == data);
    values.splice(index,1)
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    showValues()
}


showValues()