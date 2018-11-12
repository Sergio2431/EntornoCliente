/*let tableElements
console.log(document.body.firstElementChild.lastChild.previousSibling.previousSibling.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.lastChild.previousSibling)

console.log(document.body.firstElementChild.lastChild.previousSibling.previousSibling.previousSibling.lastChild.previousSibling.lastChild.previousSibling)
*/

let table = document.body.firstElementChild;
//console.log(table);
let tableBody = table.tBodies[0];
//console.log(tableBody);
let rows = tableBody.rows;
//console.log(rows);
for(let row of rows){
    let cells = row.cells;
    let salary = cells[2].textContent;
    console.log(salary);
    if(parseFloat(salary)<0) {
        //tendre que cambiar el color de la celda
        cells[2].style = 'background-color:red;'
    }
}