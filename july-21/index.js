function addStudents()

{

    let ul = document.getElementById("student")

    let li = document.createElement("li")

    li.classList.add("list-group-item","list-group-item-action")

    let text = document.getElementById("student_name").value

    // alert(text)

    let li_text = document.createTextNode(text)

    li.appendChild(li_text)
    li.onclick = function() {
        this.style.backgroundColor = "blue"; 
    };
   

const listItems = document.querySelectorAll('li');


listItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(`You clicked: ${item.textContent}`);
    });
});
    ul.appendChild(li)
    li.style.backgroundColor = "yellow";
  

 

}

function test()

{

    let comp = document.getElementById("sample")

    let comp1 = document.createElement("div")

    comp1.innerHTML = 'div'

    comp1.classList.add("bg-success")

    let comp2 = document.createElement("div")

    comp2.innerHTML = 'div'

    comp2.classList.add("bg-dark")

    comp.append(comp1,comp2)
    li.onclick = function() {
        this.style.backgroundColor = "blue"; 
    };
   

const listItems = document.querySelectorAll('li');


listItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(`You clicked: ${item.textContent}`);
    });
});

}