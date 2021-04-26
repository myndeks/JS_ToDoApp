// Geting Dom Elements


const form = document.getElementById('getTextForm');
const input = form.querySelector("input");
const listUl = document.querySelector("ol");

// If btnAdd clickes add do to inside li
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ul = document.getElementsByTagName('ol')[0];
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = input.value;
    li.appendChild(span);
    ul.appendChild(li);
    input.value = "";

    addListButtons(li);

  });

  
  
// If button pressed, remove item, up or down
listUl.addEventListener('click', (event) => {
  
    if (event.target.tagName === 'BUTTON') {
      const li = event.target.parentNode;
    if (event.target.className === 'remove') {
      const li = event.target.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
        } else if (event.target.className === "up") {
        const li = event.target.parentNode;
        const prevLi = li.previousElementSibling;
        const ul = li.parentNode;
        if (prevLi) {
          ul.insertBefore(li, prevLi);
        }
      } else if (event.target.className === "down") {
        const li = event.target.parentNode;
        const nextLi = li.nextElementSibling;
        const ul = li.parentNode;
        if (nextLi) {
          ul.insertBefore(nextLi, li);
        }
      } else if (event.target.textContent === 'Edit') {
        const span = li.firstElementChild;
        const input = document.createElement('input');
        input.type = 'text';
        li.insertBefore(input, span);
        li.removeChild(span);
        const button = event.target;
        button.textContent = "Save";
      } else if (event.target.textContent === 'Save') {
        const input = li.firstElementChild;
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        const button = event.target;
        button.textContent = 'Edit';
      }
  }
});



// Create buttons for remove, up, down 
function addListButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = 'down';
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = 'remove';
  li.appendChild(remove);

  let edit = document.createElement('button');
  edit.textContent = 'Edit';
  li.appendChild(edit);
}


