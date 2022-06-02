function getAdd(){
   let number1 = +document.getElementById("val1").value;
   let number2 = +document.getElementById("val2").value;
   let sum = number1 + number2;
   document.getElementById("result").innerHTML = sum;
   if(sum % 2 === 0){
    document.getElementById("result").style.background = "blue"
   }else if(sum % 2 === 1){
    document.getElementById("result").style.background = "red"
   }
}