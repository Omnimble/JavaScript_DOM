'use strict';

const main = document.querySelector("main");
const newArticle = document.createElement("ARTICLE");

newArticle.innerHTML = `            <header>
                <h2>Article header 3</h2>
            </header>
            <figure>
                <img src="http://placekitten.com/384/192" alt="title">
                <figcaption>Caption 3</figcaption>
            </figure>
            <p>Here is some text 3. Here is some text 3. Here is some text 3. Here is some text 3.</p>`;

main.appendChild(newArticle);