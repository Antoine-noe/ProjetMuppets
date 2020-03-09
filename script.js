//DOM Inputs et bouton lancer partie
let nomJoueur1=document.querySelector('#joueur1');
let nomJoueur2=document.querySelector('#joueur2');
let recupInputs=document.querySelectorAll('input');
let recupDiv=document.querySelectorAll('.NomJ12');
let boutonValider=document.querySelector('#debuterPartie');
let recupSelects=document.querySelectorAll('select');

boutonValider.addEventListener('click', lancerPartie);

//Annulation de partie

//Debut de partie
function lancerPartie (){

    let TextNouvelPartie=document.createTextNode("Recommencer la partie");
    let boutonValider2=document.querySelector('#debuterPartie');
    boutonValider2.removeChild(boutonValider2.firstChild);
    boutonValider2.addEventListener('click', recommencerPartie);
    boutonValider2.appendChild(TextNouvelPartie);

    //Si champs joueurs vides
    if(nomJoueur1.value===""){
        nomJoueur1.value="Joueur1";
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
            tableJS[i][0]="<img src='images/pionBlanc.png' alt='pb"+z+"' id='pb"+z+"'>";
            z++;
            tableJS[i][2]="<img src='images/pionBlanc.png' alt='pb"+z+"' id='pb"+z+"'>";
            z++;
            tableJS[i][6]="<img src='images/pionNoir.png' alt='pn"+y+"' id='pn"+y+"'>";
            y++;
            tableJS[i][8]="<img src='images/pionNoir.png' alt='pn"+y+"' id='pn"+y+"'>";
            y++;
        }else{

            tableJS[i][1]="<img src='images/pionBlanc.png' alt='pb"+z+"' id='pb"+z+"'>";
            z++;
            tableJS[i][3]="<img src='images/pionBlanc.png' alt='pb"+z+"' id='pb"+z+"'>";
            z++;
            tableJS[i][7]="<img src='images/pionNoir.png' alt='pn"+y+"' id='pn"+y+"'>";
            y++;
            tableJS[i][9]="<img src='images/pionNoir.png' alt='pn"+y+"' id='pn"+y+"'>";
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
        /*td.setAttribute("mouseover", "SurvolDamier(this)");*/
        td.setAttribute("onmouseover", "SurvolDamier(this)");
        td.setAttribute("onmouseout", "SurvolDamier2(this)");
        td.setAttribute("onclick", "SelectionPion(this)");

        td.id = coord[i]+j;
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

function SurvolDamier(tdAC){
tdAC.firstChild.style.transform = 'scale(1.6)';
}
function SurvolDamier2(tdAC){
    tdAC.firstChild.style.transform = 'scale(1)';
}
function SelectionPion(tdAC){
  if(tdAC.style.backgroundColor!=='yellow'){
    tdAC.style.backgroundColor='#d5s4s5 0.5';
                                     }
  else{tdAC.style.backgroundColor='';}
}





