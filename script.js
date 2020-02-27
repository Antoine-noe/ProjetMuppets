//DOM Inputs et bouton lancer partie
let nomJoueur1=document.querySelector('#joueur1');
let nomJoueur2=document.querySelector('#joueur2');
let recupInputs=document.querySelectorAll('input');
let recupDiv=document.querySelectorAll('.NomJ12');
let boutonValider=document.querySelector('#debuterPartie');
let recupSelects=document.querySelectorAll('select');

boutonValider.addEventListener('click', lancerPartie);
//Annulation de partie
let boutonValider2=document.querySelector('#debuterPartie');
boutonValider2.removeChild(boutonValider2.firstChild);
let TextNouvelPartie=document.createTextNode("Recommencer la partie");
boutonValider2.appendChild(TextNouvelPartie);

boutonValider2.addEventListener('click', recommencerPartie);
function recommencerPartie(){
    if(confirm("Souhaitez-vous annuler la partie en cours ?")){
        document.location.reload(true);}
}


//Debut de partie
function lancerPartie (){
    //Si champs joueurs vides
    if(nomJoueur1.value===""){
        nomJoueur1.value="Joueur1";
    }
    if(nomJoueur2.value===""){
        nomJoueur2.value="Joueur2";
    }
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


//Les noms sont incrémentés donc on supprime les Inputs et les select et les options:

        let recherchePourEffacerInput1=document.querySelector('#asuppr1');
        recherchePourEffacerInput1.removeChild(recupInputs[0]);
        recherchePourEffacerInput1.removeChild(recupSelects[0]);

        let recherchePourEffacerInput2=document.querySelector('#asuppr2');
        recherchePourEffacerInput2.removeChild(recupInputs[1]);
        recherchePourEffacerInput2.removeChild(recupSelects[1]);




//Ici mettre la fonction tableau

}
    //Ici mettre variables pions


    //mecanique du jeu

}

//Tableau Javascript
let tableJS = new Array(10);

for(let i=0; i<10; i++){
    tableJS[i]= new Array(10);
}

//Coordonnées TableauJS
let coord2 = ["A","B","C","D","E","F","G","H","I","J"];
let coord3= [1,2,3,4,5,6,7,8,9,10];

for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        tableJS[i][j]=coord2[i]+coord3[j];
    }
}


// Tableau HTML coordonnées
    let damierArticle=document.querySelector('#tableau');

let coord = ["A","B","C","D","E","F","G","H","I","J"];

// Création et affichage du damier
let table = document.createElement("table");
damierArticle.appendChild(table);
for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    tr.id = coord[i];
    for (let j = 1; j <= 10; j++) {
        let td = document.createElement('td');
        td.id = coord[i]+j;
        if (i%2 === j%2) {
            td.className = "caseblanche";

        } else {
            td.className = "casenoire";
        }
        tr.appendChild(td);
    }

    table.appendChild(tr);
}








//Creation pions et insertion tableau

/*function initialisationPions(){




            tableJS[0][0]=pionsBlanc[0];

}


initialisationPions();
console.log(tableJS);*/
/*if(i%2===0)
{
    tableJS[i][0]=pionsBlanc[z];
    z++;
    tableJS[i][2]=pionsBlanc[z];
    z++;
    tableJS[i][6]=pionsNoir[y];
    y++;
    tableJS[i][8]=pionsNoir[y];
    y++;
}else{

    tableJS[i][1]=pionsBlanc[z];
    z++;
    tableJS[i][3]=pionsBlanc[z];
    z++;
    tableJS[i][7]=pionsNoir[y];
    y++;
    tableJS[i][9]=pionsNoir[y];
    y++;
}*/
