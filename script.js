//DOM Inputs et bouton lancer partie

let nomJoueur1=document.querySelector('#joueur1');
let nomJoueur2=document.querySelector('#joueur2');
let recupInputs=document.querySelectorAll('input');
let recupDiv=document.querySelectorAll('.NomJ12');
let boutonValider=document.querySelector('#debuterPartie');
let recupSelects=document.querySelectorAll('select');
let recupTableau=document.querySelector('#tableau');
let rotateBut=document.querySelector('#rotateBut');
let cadreJ1=document.querySelector('#cadreJ1');
let cadreJ2=document.querySelector('#cadreJ2');
boutonValider.addEventListener('click', lancerPartie);


//Annulation de partie

//Debut de partie
function lancerPartie (){
    rotateBut.addEventListener('click', rotationTab);
    let TextNouvelPartie=document.createTextNode("Recommencer la partie");
    let boutonValider2=document.querySelector('#debuterPartie');
    boutonValider2.removeChild(boutonValider2.firstChild);
    boutonValider2.addEventListener('click', recommencerPartie);
    boutonValider2.appendChild(TextNouvelPartie);

    //Si champs joueurs vides
    if(nomJoueur1.value===""){
        nomJoueur1.value="Joueur 1";
    }
    if(nomJoueur2.value===""){
        nomJoueur2.value="Joueur2";
    }
    //Recherche inputs pour vérifier si les noms sont deja inscrits
    let rechercheH3=document.querySelectorAll("h1");
    if(rechercheH3.length === 0)
    //Si tableau des inputs vides, alors je créer, sinon, je ne fais rien.
    {
        //JOUEUR1
    let Joueur1=document.createElement('h1');
    let Joueur1T=document.createTextNode(nomJoueur1.value);
        Joueur1.appendChild(Joueur1T);
        Joueur1.style.color='white';
        Joueur1.style.fontSize='70px';
        Joueur1.style.fontWeight='bold';
        recupDiv[0].appendChild(Joueur1);
        //JOUEUR2
    let Joueur2=document.createElement('h1');

    let Joueur2T=document.createTextNode(nomJoueur2.value);
        Joueur2.appendChild(Joueur2T);
        Joueur2.style.color='black';
        Joueur2.style.fontSize='70px';
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

function recommencerPartie(){
    if(confirm("Souhaitez-vous annuler la partie en cours ?")){
        document.location.reload(true);}
}

//Tableau Javascript
let tableJS = new Array(10);

for(let i=0; i<10; i++){
    tableJS[i]= new Array(10);
}

//Coordonnées TableauJS

let y=0;
let z=0;

for(let i=0; i<10; i++){

        if(i%2===0)
        {
            tableJS[i][0]="<img src='images/pionBlanc.png' class='pBlanc' alt='pb"+z+"' id='pb"+z+"'>";
            z++;
            tableJS[i][2]="<img src='images/pionBlanc.png' class='pBlanc' alt='pb"+z+"' id='pb"+z+"'>";
            z++;
            tableJS[i][6]="<img src='images/pionNoir.png' class='pNoir' alt='pn"+y+"' id='pn"+y+"'>";
            y++;
            tableJS[i][8]="<img src='images/pionNoir.png' class='pNoir' alt='pn"+y+"' id='pn"+y+"'>";
            y++;
        }else{

            tableJS[i][1]="<img src='images/pionBlanc.png' class='pBlanc' alt='pb"+z+"' id='pb"+z+"'>";
            z++;
            tableJS[i][3]="<img src='images/pionBlanc.png' class='pBlanc' alt='pb"+z+"' id='pb"+z+"'>";
            z++;
            tableJS[i][7]="<img src='images/pionNoir.png' class='pNoir' alt='pn"+y+"' id='pn"+y+"'>";
            y++;
            tableJS[i][9]="<img src='images/pionNoir.png' class='pNoir' alt='pn"+y+"' id='pn"+y+"'>";
            y++;

                }}
console.log(tableJS);

// Tableau HTML coordonnées
    let damierArticle=document.querySelector('#tableau');

let coord = ["A","B","C","D","E","F","G","H","I","J"];

// Création et affichage du damier
let table = document.createElement("table");
damierArticle.appendChild(table);
for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    tr.id = coord[i];
    for (let j = 0; j < 10; j++) {
        let td = document.createElement('td');
        td.id = coord[i]+j;
       /* td.setAttribute("onclick", "SurvolDamier(this)");*/
      /*  td.setAttribute("onclick", "SurvolDamier2(this)");*/

        if (i%2 === j%2) {
            td.className = "caseblanche";

        } else {
            td.className = "casenoire";
        }
        td.innerHTML=tableJS[i][j];

        td.style.textAlign="center";
        if(td.innerHTML==="undefined"){
            td.innerHTML="";
        }
        tr.appendChild(td);
    }

    table.appendChild(tr);
}

/*function SurvolDamier(tdAC){

 console.log("tdAC.id :" +tdAC.id);
}*/
/*function SurvolDamier2(tdAC){
    if(tdAC.firstChild!==null){
    tdAC.firstChild.style.transform = 'scale(1)';
}}*/
/*let x=false;
function SurvolDamier(tdAC){

    if(tdAC.firstChild!==null && tdAC.firstChild.style.transform !== 'scale(1.6)' && x===false){
        tdAC.firstChild.style.transform = 'scale(1.6)'; x=true;
    }else
        if(tdAC.firstChild!==null && tdAC.firstChild.style.transform !== 'scale(1)'){
            tdAC.firstChild.style.transform = 'scale(1)'; x=false;
        }
}*/


function rotationTab() {
    if(recupTableau.style.transform!== "rotate(-90deg)")
    recupTableau.style.transform= "rotate(-90deg)"; /* Équivalent à rotateZ(45deg) */
    else if(recupTableau.style.transform=== "rotate(-90deg)"){
        recupTableau.style.transform= "rotate(270deg)";
        }if(recupTableau.style.transform=== "rotate(270deg)") {recupTableau.style.transform= "rotate(360deg)";}
}


// Fonction pour selectionner un pion et le déplacer

let etat = false; // Faux quand aucune pièce n'est pas sélectionné
let pionSelectionne;
let tdSelectionne;

let td = document.querySelectorAll("td");
for (let i = 0; i < td.length; i++) {
    td[i].onclick = function(){
        selectionCase(this);
    };
}

function selectionCase(truc) {
    if(!etat) { //je selectionne le pion dans la case
        etat = true;
        pionSelectionne = truc.innerHTML; // selection  du pion
        console.log(truc.id);
        tdSelectionne = truc; // selection du td

    }
    else { // sinon je bouge le pion

        console.log(tdSelectionne.id);
        truc.innerHTML = pionSelectionne;
        tdSelectionne.innerHTML = "";
        etat = false;

    }
}

/*Affichage victoire*/

/*
if (finPartie==true) {
    if (victoireJ1==true) {
        const imgULR = "../muppetsCheckers/images/victoire.gif";
        swal({
            title: "Victoire!",
            text: "Bravo " +nomJoueur1.value+ ", vous avez gagné!",
            icon: imgULR,
            button: "Rejouer",
        })
            .then((value)=> {
                document.location.reload(true);
            })
        if (victoireJ2==true) {
            const imgULR = "../muppetsCheckers/images/victoire.gif";
            swal({
                title: "Victoire!",
                text: "Bravo " +nomJoueur2.value+ ", vous avez gagné!",
                icon: imgULR,
                button: "Rejouer",
            })
                .then((value)=> {
                    document.location.reload(true);
                })
        }
    }
}*/
