let taskList =[]
let inputTodo=document.querySelector('#inputTodo');
let inputDate=document.querySelector('#date');

function addTodo(){
    let value = inputTodo.value;
    let dvalue= inputDate.value;
    console.log(value);
    console.log(dvalue);
    taskList.unshift({todo: value,date: dvalue});
    inputTodo.value='';
    displayTodo();
}

function displayTodo(){
    let listBox = document.querySelector('#listBox');
    let newList ='';
    for (let i = 0; i < taskList.length; i++) {
        newList+=
        `<li class="listItem">
                <span>${taskList[i].todo}</span>
                <span>${taskList[i].date}</span>
                <span>abcd</span>
        </li>`
    }

    listBox.innerHTML =newList;

}