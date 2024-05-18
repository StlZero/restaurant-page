import "./styles/index.css";

import { loadHomePage } from "./pages/home.js";
import { loadMenuPage } from "./pages/menu.js";
import { loadAboutPage } from "./pages/about.js";

function loadPages() {
    const homeButton = document.querySelector('#home');
    const menuButton = document.querySelector('#menu');
    const aboutButton = document.querySelector('#about');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (document.querySelector('.container')) {
                document.querySelector('.container').remove();
            };
        });
    });

    document.addEventListener('DOMContentLoaded', (e) => {
        loadHomePage();
    });

    homeButton.addEventListener('click', (e) => {
        loadHomePage();
    });

    menuButton.addEventListener('click', (e) => {
        loadMenuPage();
    });

    aboutButton.addEventListener('click', (e) => {
        loadAboutPage();
    });
}

loadPages();