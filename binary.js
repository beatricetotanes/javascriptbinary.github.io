
function binary(){
  var binary = Array();
  var count = 0;
  var countLoop = 0;
  var num = document.getElementById("num").value;
  var length;
  var rem;
  var decimal;
  var reset;

  decimal = num;
  if (num==0) {
    document.getElementById("output").innerHTML = "Decimal Number: " + decimal + "<br>Binary Number: 0";
  }else {

    while (num!=0) {
      rem = num%2;
      num = Math.trunc(num/2);
      binary.push(rem);
    }

    document.getElementById("output").innerHTML = "Decimal Number: " + decimal + "<br>Binary Number: ";
    while(binary.length!=0){
      document.getElementById("output").innerHTML += binary.pop();
    }
  }


}
