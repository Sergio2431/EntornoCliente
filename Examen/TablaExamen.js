
let table = document.body.firstElementChild;
//console.log(table);
let tableBody = table.tBodies[0];
//console.log(tableBody);
let rows = tableBody.rows;
//console.log(rows);
for(let row of rows){
    let rows = row.cells;
    if(parseFloat) {
        //tendre que cambiar el color de la fila
        rows[2].style = 'background-color:red;'
    }
}




