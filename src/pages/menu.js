export function loadMenuPage() {
    const div_content = document.querySelector('#content');

    const div_container = document.createElement('div');
    div_container.classList.add('container');

    div_container.innerHTML += `
    <h1>Menu</h1>

    <div class="main-dishes">
        <h2>Main Dishes</h2>
        <div class="item"><p>Cheeseburger</p><p>$34</p></div>
        <div class="item"><p>Chicken burgers</p><p>$23</p></div>
        <div class="item"><p>Cheese sandwich</p><p>$22</p></div>
    </div>
    
    <div class="appetizers">
        <h2>Appetizers</h2>
        <div class="item"><p>Fruit salad</p><p>$13</p></div>
        <div class="item"><p>Nuggets</p><p>$14</p></div>
        <div class="item"><p>French Fries</p><p>$15</p></div>
    </div>
    
    <div class="beverages">
        <h2>Beverages</h2>
        <div class="item"><p>Milk Shake</p><p>$3</p></div>
        <div class="item"><p>Iced Tea</p><p>$2</p></div>
        <div class="item"><p>Coffee</p><p>$5</p></div>
    </div>
    `;

    div_content.appendChild(div_container);
}