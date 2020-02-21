// Variables

// Tableau coordonnées
var coord = ["A","B","C","D","E","F","G","H","I","J"];

// Création et affichage du damier
var table = document.createElement("table");
for (var i = 0; i < 10; i++) {
    var tr = document.createElement('tr');
    tr.id = coord[i];
    for (var j = 1; j <= 10; j++) {
        var td = document.createElement('td');
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
document.body.appendChild(table);

// Tableau associatif ?