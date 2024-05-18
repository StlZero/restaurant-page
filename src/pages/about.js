export function loadAboutPage() {
    const div_content = document.querySelector('#content');

    const div_container = document.createElement('div');
    div_container.classList.add('container');

    div_container.innerHTML += `
    <h1>About Us</h1>

    <p class="about-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod</p>      
    `;

    div_content.appendChild(div_container);
}