//DOM Inputs et bouton lancer partie
let nomJoueur1=document.querySelector('#joueur1');
let nomJoueur2=document.querySelector('#joueur2');
let recupInputs=document.querySelectorAll('input');
let recupDiv=document.querySelectorAll('.NomJ12');
let boutonValider=document.querySelector('#debuterPartie');
boutonValider.addEventListener('click', lancerPartie);



function lancerPartie (){
    //Recherche inputs pour vérifier si les noms sont deja inscrits
    let rechercheH3=document.querySelectorAll("h3");
    if(rechercheH3.length === 0)
    //Si tableau des inputs vides, alors je créer, sinon, je ne fais rien.
    {
        //JOUEUR1
    let Joueur1=document.createElement('h3');
    let Joueur1T=document.createTextNode(nomJoueur1.value);
        Joueur1.appendChild(Joueur1T);
        Joueur1.style.color='white';
        Joueur1.style.fontSize='30px';
        Joueur1.style.fontWeight='bold';
        recupDiv[0].appendChild(Joueur1);
        //JOUEUR2
    let Joueur2=document.createElement('h3');
    let Joueur2T=document.createTextNode(nomJoueur2.value);
        Joueur2.appendChild(Joueur2T);
        Joueur2.style.color='black';
        Joueur2.style.fontSize='30px';
        Joueur2.style.fontWeight='bold';
        recupDiv[1].appendChild(Joueur2);


//Les noms sont incrémentés donc on supprime les Inputs:

    let recherchePourEffacerInput1=document.querySelector('#joueur1');

    recherchePourEffacerInput1.removeChild(recupInputs[0]);
        nomJoueur2.removeChild(recupInputs[1]);
}
//Ici mettre la fonction tableau


    //Ici mettre variables pions


    //mecanique du jeu





}


