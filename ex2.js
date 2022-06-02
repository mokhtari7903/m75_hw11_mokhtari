let trs = document.querySelectorAll("tbody > tr");
// console.log(trs);
// for (item of trs) {
    //     item.style.backgroundColor = "#9de8fb"
    
    // }
    
    
function deleteElem(num){
    let trS = document.querySelectorAll("tbody > tr");

   for (let i = 0; i < num; i++) {
       trS[i].remove();
       
   }
}

function AddElem(num){
    let tbody = document.getElementById("tbody")
    for (let i = 0; i < num; i++) {

       let tr = document.createElement("tr");

       let listColor = ["#5596f8", "#f76a6a", "#9de8fb"];

       tbody.appendChild(tr);

       tr.className = "border-b"
       tr.style.backgroundColor = listColor[i]
       
       for (let i = 0; i < 3; i++) {
           let td = document.createElement("td");
           tr.appendChild(td);
           td.innerText = "blank";
           td.className = "px-28 py-4";
       }
        
    }
}

 trs[0].style.backgroundColor = "white";
 trs[1].style.backgroundColor = "#5596f8";
 trs[2].style.backgroundColor = "#fc7adb";
 trs[3].style.backgroundColor = "#0ef8167d";
 trs[4].style.backgroundColor = "#f76a6a";
 trs[5].style.backgroundColor = "#f8ca5d";
 trs[6].style.backgroundColor = "#9de8fb";
 trs[7].style.backgroundColor = "#f8f9fa";
 trs[8].style.backgroundColor = "#212529"; 
 