let invData = {
    date: 0,
    customer: 0,
    email: 0,
    phone: 0,
};

let sum = 0;

//Create/Load Local Storage
if (localStorage.getItem('lastInv') == null) {
    let invNo = '101';
    document.getElementById('inv-no').innerHTML = 'HER' + invNo;
} else {
    document.getElementById('inv-no').innerHTML = 'HER' + localStorage.getItem('newInv');
}

const saveInv = () => {
    lastInv = parseInt(document.getElementById('inv-no').innerHTML.substring(3));
    localStorage.setItem('lastInv', lastInv);
    newInv = (parseInt(document.getElementById('inv-no').innerHTML.substring(3)) + 1);
    localStorage.setItem('newInv', newInv);
    document.getElementById('inv-no').innerHTML = 'HER' + newInv;
    location.reload();
}

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
    desc.innerHTML = '<select name="desc" class="desc-list"><option value=" ">Select Description</option><option value="Women\'s Haircut">Women\'s Haircut</option><option value="Women\'s Hair Wash">Women\'s Hair Wash</option><option value ="Women\'s Hair Dye">Women\'s Hair Dye</option><option value="VIP Discount">VIP Discount</option></select>';
    total.innerHTML = 'CAD $' + '<input type="number" name="item-price" min="0" style="width: 15%" class="srvcPrice"></input>';
    row.appendChild(desc);
    row.appendChild(total);
    document.querySelector('table').appendChild(row);

    //Set Service Description
    const setDesc = (e) => {
        desc.innerHTML = e.target.value;
    }

    document.querySelector('.desc-list').addEventListener('change', setDesc);

    //Set Price for Selected Service
    const setPrice = () => {
        let amt = Number(document.querySelector('.srvcPrice').value);
        total.innerHTML = 'CAD $' + amt.toFixed(2);

        //Update Total Due
        sum = (Number(sum) + amt).toFixed(2);
        document.querySelector('#grand-total').innerHTML = sum;
    }

    document.querySelectorAll('.srvcPrice').forEach(element => {
        element.addEventListener('focusout', setPrice);
    });
}

//Refresh
const redoInv = () => {
    location.reload();
}

//Add Customer Name
const setName = () => {
    document.getElementById('name').children[0].style.color = 'black';
    document.getElementById('name').children[0].innerHTML = document.getElementById('invname').value;
    invData.customer = document.getElementById('name').children[0].innerHTML;
}

const editName = () => {
    document.querySelector('#name').children[0].innerHTML = '<input type="text" name="invname" id="invname">';
    document.getElementById('invname').addEventListener('focusout', setName);
    document.querySelector('#name').children[0].removeEventListener('click', editName);
}

document.querySelector('#name').children[0].addEventListener('click', editName);

//Add Customer Email
const setEmail = () => {
    document.getElementById('email').children[0].style.color = 'black';
    document.getElementById('email').children[0].innerHTML = document.getElementById('invemail').value;
    invData.email = document.getElementById('email').children[0].innerHTML;
}

const editEmail = () => {
    document.querySelector('#email').children[0].innerHTML = '<input type="email" name="invemail" id="invemail">';
    document.getElementById('invemail').addEventListener('focusout', setEmail);
    document.querySelector('#email').children[0].removeEventListener('click', editEmail);
}

document.querySelector('#email').children[0].addEventListener('click', editEmail);

//Add Customer Phone Number
const setPhone = () => {
    document.getElementById('phone').children[0].style.color = 'black';
    document.getElementById('phone').children[0].innerHTML = document.getElementById('telnum').value;
    invData.phone = document.getElementById('phone').children[0].innerHTML;
}

const editPhone = () => {
    document.querySelector('#phone').children[0].innerHTML = '<input type="tel" name="phone" id="telnum">';
    document.getElementById('telnum').addEventListener('focusout', setPhone);
    document.querySelector('#phone').children[0].removeEventListener('click', editPhone);
}

document.querySelector('#phone').children[0].addEventListener('click', editPhone);