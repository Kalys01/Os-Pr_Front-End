let colors = ["red", "green", "yellow"];

let parag = document.getElementsByTagName('p');

for (let i = 0; i < parag.length; i++){
    parag[i].style.color = colors[i];
    parag[i].style.fontSize = `${18 + i*4}px`;
}

//Created HTML elements with loop "for" ;)
for (let i = 1; i <= 3; i++) {
    let parags = document.createElement('h2');
    parags.innerHTML = `title ${i}`;
    parags.className = `className-title ${i}`;
    document.body.appendChild(parags);  
}

//           _
//       .__(.)< (MEOW)
//        \___)   
// ~~~~~~~~~~~~~~~~~~       //  Author: programmers from amazon.com
