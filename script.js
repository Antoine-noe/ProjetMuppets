//DOM Inputs et bouton lancer partie
let nomJoueur1=document.querySelector('#joueur1');
let nomJoueur2=document.querySelector('#joueur2');
let recupInputs=document.querySelectorAll('input');
let recupDiv=document.querySelectorAll('.NomJ12');
let boutonValider=document.querySelector('#debuterPartie');
boutonValider.addEventListener('click', lancerPartie);



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


//Les noms sont incrémentés donc on supprime les Inputs:

        let recherchePourEffacerInput1=document.querySelector('#asuppr1');
        recherchePourEffacerInput1.removeChild(recupInputs[0]);

        let recherchePourEffacerInput2=document.querySelector('#asuppr2');
        recherchePourEffacerInput2.removeChild(recupInputs[1]);

//Ici mettre la fonction tableau

}
    //Ici mettre variables pions


    //mecanique du jeu

}




// Tableau coordonnées
    let damierArticle=document.querySelector('#tableau');

let coord = ["A","B","C","D","E","F","G","H","I","J"];

// Création et affichage du damier
let table = document.createElement("table");
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
    damierArticle.appendChild(table);
console.log(table);

//Creation pions et insertion tableau

let pionsBlanc=["pb1", "pb2", "pb3", "pb4", "pb5","pb6", "pb7", "pb8", "pb9", "pb10","pb11", "pb12", "pb13", "pb14", "pb15","pb16", "pb17", "pb18", "pb19", "pb20"];
let pionsNoir=["pn1", "pn2", "pn3", "pn4", "pn5","pn6", "pn7", "pn8", "pn9", "pn10","pn11", "pn12", "pn13", "pn14", "pn15","pn16", "pn17", "pn18", "pn19", "pn20"];
console.log(pionsBlanc);
let y=0;
let z=0;
for(let i=0; i<=10; i++)
{

    if(i%2===0)
    {
            table[i][0]=pionsBlanc[z];
            z++;
            table[i][2]=pionsBlanc[z];
            z++;
            table[i][6]=pionsNoir[y];
            y++;
            table[i][8]=pionsNoir[y];
            y++;
    }else{

            table[i][1]=pionsBlanc[z];
            z++;
            table[i][3]=pionsBlanc[z];
            z++;
            table[i][7]=pionsNoir[y];
            y++;
            table[i][9]=pionsNoir[y];
            y++;
        }

}



