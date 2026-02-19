document.getElementById('addList').addEventListener('click', function(){

    let inputText = document.getElementById('input-box')

    let listContainer =document.getElementById('list-container')

    if(inputText.value === ''){
        alert('you must write something!')
    }

    else{
        let li = document.createElement('li')
        li.innerHTML = inputText.value;
        listContainer.appendChild(li)

        let span = document.createElement('span')
        span.innerText = '\u00d7'
        li.appendChild(span)
    }

    inputText.value = ''
    saveData()
})

let listContainer = document.getElementById('list-container')

document.getElementById('list-container').addEventListener('click', function(event){
     
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked')
        saveData()
    }

    else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove()
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()