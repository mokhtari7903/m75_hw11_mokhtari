array = [
    { name: 'James', age: 9, country: 'United States' },
    { name: 'Rony', age: 31, country: 'United Kingdom' },
    { name: 'Peter', age: 58, country: 'Canada' },
    { name: 'Marks', age: 20, country: 'Spain' }
];
let div = document.getElementById("cont");

let table = document.createElement('table');

table.style.width = "50%";

table.style.margin = "auto";



div.appendChild(table);

// table.style.border = "1px solid blue";


let thead = document.createElement("thead");

table.appendChild(thead);

let tr = document.createElement("tr");

thead.appendChild(tr);
//  th.style.border = "1px solid gray";

for (const item in array[0]) {
    let th = document.createElement("th")
    tr.appendChild(th);
  th.style.border = "1px solid green";
  th.innerHTML = item

   
}
let tbody = document.createElement("tbody");


 table.appendChild(tbody);
 for (let i = 0; i < array.length; i++) {
    //  let tr = document.createElement("tr");
    //  tr.style.backgroundColor = ""
    let tr = tbody.insertRow()
     
     tbody.appendChild(tr);

     
     
     Object.values(array[i]).forEach((item) => {
         //  let td = document.createElement("td");
         
         let td = tr.insertCell()
         
         td.style.border = "1px solid gray";
         
         //  tr.appendChild(td);
         
         td.innerHTML = item
         
        })
       
        if(tr.children[1].innerHTML < 10){
            tr.style.backgroundColor = "yellow";
       }else if(tr.children[1].innerHTML >= 10 && tr.children[1].innerHTML < 40){
           tr.style.backgroundColor = "green";
       }else if(tr.children[1].innerHTML >= 40 && tr.children[1].innerHTML < 80){
           tr.style.backgroundColor = "red";
       }else if(tr.children[1].innerHTML >= 80){
           tr.style.backgroundColor = "blue";
       }
        
 }