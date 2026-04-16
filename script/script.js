
function order() {
    alert("Заказ оформлен!");
}
function podpiska() {
    alert("Вы подписались на рассылку!")
}
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("card"); 
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        if (x[i].className.indexOf(c) > -1) {
            x[i].style.display = "flex"; 
        } else {
            x[i].style.display = "none";
        }
    }
}

let cart = [];

function addToCart(title, price) {
    const existingItem = cart.find(item => item.title === title);

    if (existingItem) {
        existingItem.quantity += 1; 
        existingItem.totalPrice += price;
    } else {
        cart.push({ title, price, quantity: 1, totalPrice: price });
    }
    console.log("Товар " + "'" + title + "'" + " добавлен в корзину!");
    alert("Товар " + "'" + title + "'" + " добавлен в корзину!");
    updateCartDisplay();
}


function updateCartDisplay() {
    const cartItemsList = document.getElementById('cartItems');
    const cartNum = document.getElementById('cartNum');


    cartItemsList.innerHTML = '';

    let totalSum = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
            <span>${item.title} x${item.quantity}</span>
            <button class="removebutton" onclick="removeFromCart(${index})">X</button>
        `;
        cartItemsList.appendChild(li);

        totalSum += item.totalPrice;
    });

    cartNum.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    document.getElementById('totalPrice').textContent = totalSum.toLocaleString();
}

function removeFromCart(index) {
    cart.splice(index, 1); 
    updateCartDisplay(); 
}

function toggleCart() {
    const window = document.getElementById('cartWindow');

    if (window.style.display === 'block') {
        window.style.display = 'none';
    } else {
        window.style.display = 'block';
        updateCartDisplay(); 
    }
}

function applyWallColor() {

    const colorPicker = document.getElementById('wallColor');

    const wallBackground = document.getElementById('wallBackground');

    if (colorPicker && wallBackground) {
        const selectedColor = colorPicker.value;

        wallBackground.style.backgroundColor = selectedColor;
    }
}

    const currentYear = new Date().getFullYear();

    const footerYear = document.querySelector('current-year');

    footerYear.textContent = ` ${currentYear}`;

function toggleMenu() {
    const nav = document.getElementById("mainNav");
    const burger = document.querySelector(".burger-menu");

    // Проверяем, есть ли класс 'open'
    if (nav.classList.contains("open")) {
        // Если есть - убираем его (закрываем меню)
        nav.classList.remove("open");
        // Небольшая задержка для плавности перед полным скрытием (опционально)
        setTimeout(() => {
            // Здесь можно добавить логику для изменения иконки бургера обратно в "X", если нужно
        }, 400);
    } else {
        // Если класса нет - добавляем его (открываем меню)
        nav.classList.add("open");
    }
}