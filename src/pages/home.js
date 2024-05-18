export function loadHomePage() {
    const div_content = document.querySelector('#content');

    const div_container = document.createElement('div');
    div_container.classList.add('container');

    div_container.innerHTML += `
    <div class="welcome">
    <h1>Welcome to The Awesome Restaurant</h1>
    <p>We have tons of awesome food on our menu.</p>
    </div>
    
    <div class="schedule">
        <h2>Open hours</h2>
        <ul>
            <li>Sunday: 7am - 10pm</li>
            <li>Monday: 6am - 8pm</li>
            <li>Tuesday: 6am - 8pm</li>
            <li>Wednesday: 6am - 8pm</li>
            <li>Thursday: 6am - 10pm</li>
            <li>Friday: 6am - 10pm</li>
            <li>Saturday: 7am - 10pm</li>
        </ul>
    </div>
    
    <div class="location">
    <h2>Location</h2>
    <p>No. 123, St. 321, Awesomeville</p>
    </div>    
    `;

    div_content.appendChild(div_container);
}