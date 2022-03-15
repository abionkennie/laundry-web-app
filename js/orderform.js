const formEl = document.querySelector('form')
const tableElement = document.querySelector('.table-element');
const tbodyEl = document.querySelector('tbody');
const tableEl = document.querySelector('#content-display');

function onAddWebsite(e) {
    e.preventDefault();
    const fabric = document.getElementById("select").value;
    const quantity = document.getElementById("quantity").value;
    tbodyEl.innerHTML += `
    <tr>
     <td>${fabric}</td>
     <td>${quantity}</td>
     <td><button class="deleteBtn">X</button></td>
    </tr>
     `
}


function onDeleteRow(e) {
    if (!e.target.classList.contains("deleteBtn")) {
        return;
    }
    const btn = e.target;
    btn.closest("tr").remove();
}


formEl.addEventListener('submit', onAddWebsite);
tableEl.addEventListener("click", onDeleteRow);