//DOM Inputs et bouton lancer partie

let nomJoueur1=document.querySelector('#joueur1');
let nomJoueur2=document.querySelector('#joueur2');
let recupInputs=document.querySelectorAll('inputs');
let recupAside=document.querySelectorAll('aside');
let boutonValider=document.querySelector('#lancerpartie');

boutonValider.addEventListener('click', lancerPartie);



function lancerPartie (){
    //Création des variables joueurs, et suppression des inputs.
    let Joueur1=document.createElement('h3');
    let Joueur1T=document.createTextNode(nomJoueur1.value);
        nomJoueur1.appendChild(Joueur1T);
        recupAside[0].appendChild(Joueur1);

    let Joueur2=document.createElement('h3');
    let Joueur2T=document.createTextNode(nomJoueur2.value);
    nomJoueur2.appendChild(Joueur2T);
    recupAside[1].appendChild(Joueur2);

    nomJoueur1.removeChild(recupInputs[0]);
    nomJoueur2.removeChild(recupInputs[1]);

//Ici mettre la fonction tableau


    //Ici mettre variables pions


    //mecanique du jeu





}


