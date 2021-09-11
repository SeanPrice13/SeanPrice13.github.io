//Generate the Current Date
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0'),
    mm = String(today.getMonth() + 1).padStart(2, '0'), //January is 0!
    yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById('date').children[0].innerHTML = today;

//Add Item to Invoice
const newItem = () => {
    let row = document.createElement('tr'),
        desc = document.createElement('td'),
        total = document.createElement('td');
    desc.innerHTML = '<label for="desc"></label><select name="desc" class="desc-list"><option value="WomensCut">Women\'s Haircut </option><option value="WomensWash">Women\'s Hair Wash</option><option value ="WomensDye">Women\'s Hair Dye</option><option value="test1">Test 1</option><option value ="test2">Test 2</option><option value="VIPDiscount">VIP Discount</option></select>';
    total.innerHTML = 'CAD $' + 0.00;
    row.appendChild(desc);
    row.appendChild(total);
    document.getElementById('table').appendChild(row);
}

//Refresh Button
const redoInv = () => {
    location.reload();
}

//Edit Invoice Name
const setName = () => {
    document.getElementById('name').children[0].style.color = 'black';
    document.getElementById('name').children[0].innerHTML = document.getElementById('invname').value;
}

const editName = () => {
    document.querySelector('#name').children[0].innerHTML = '<input type="text" name="invname" id="invname">';
    document.getElementById('invname').addEventListener('focusout', setName);
    document.querySelector('#name').children[0].removeEventListener('click', editName);
}

document.querySelector('#name').children[0].addEventListener('click', editName);