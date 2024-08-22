console.log(`JS OK`);
document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

// ------------------------------------------------------------------------------------

/*Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello ispirandovi alle foto in allegato. Potete anche usare 
immagini diverse e variare leggermente lo stile, l'importante è la logica!
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande in modo da 
poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array 
fornito e un semplice ciclo for. Possiamo concatenare una stringa con un template literal oppure utilizzare gli 
altri metodi di manipolazione del DOM che abbiamo visto insieme. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito 
dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è la prima e l'utente clicca la freccia per andare 
indietro, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso avanti, deve 
attivarsi la prima immgine.
BONUS 2:
Creiamo delle miniature di tutte le immagni, in cui dovrà apparire in evidenza l’immagine equivalente a quella attiva, scegliete 
liberamente se scurire le altre immagini oppure se evidenziarla semplicemente con un bordo. Tra queste miniature, quella corrispondente 
all'immagine attiva deve evidenziarsi, scegliete voi l'effetto estetico, potete colorarla diversamente rispetto 
alle altre o aggiungere un semplice bordo.*/


//Si recuperano gli elementi in pagina
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const images = document.querySelectorAll('.carousel img');


//Do la classe active alla prima immagine
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');

nextButton.addEventListener('click', function () {
    //Togliamo la classe active all'immagine attualmente attiva
    images[currentActiveIndex].classList.remove('active');
    //Incremento l'indice
    currentActiveIndex++;
    //Metto la classe active allímmagine successiva
    images[currentActiveIndex].classList.add('active');

})

prevButtonButton.addEventListener('click', function () {


    //Togliamo la classe active all'immagine attualmente attiva
    images[currentActiveIndex].classList.remove('active');
    //Decremento l'indice
    currentActiveIndex--;
    //Metto la classe active allímmagine successiva
    images[currentActiveIndex].classList.add('active');
})