
function go(){
  var value=document.getElementById("input").value;
  if(document.getElementById("problem").value=="triangle"){
    document.getElementById("div2").innerHTML=triangle(value);
  }if(document.getElementById("problem").value=="countHi"){
    document.getElementById("div2").innerHTML=countHi(value);
  }if(document.getElementById("problem").value=="fibonacci"){
    document.getElementById("div2").innerHTML=fibonacci(value);
  }if(document.getElementById("problem").value=="sumDigits"){
    document.getElementById("div2").innerHTML=sumDigits(value);
  }if(document.getElementById("problem").value=="bunnyEars"){
    document.getElementById("div2").innerHTML=bunnyEars(value);
  }if(document.getElementById("problem").value=="count7"){
    document.getElementById("div2").innerHTML=count7(value);
  }if(document.getElementById("problem").value=="bunnyEars2"){
    document.getElementById("div2").innerHTML=bunnyEars2(value);
  }if(document.getElementById("problem").value=="factorial"){
    document.getElementById("div2").innerHTML=factorial(value);
  }

}


//triangle
function triangle(rows) {
  if (rows==0){
    return 0;
  }else{
    return rows+triangle(rows-1);
  }
}

//countHi
function countHi(str){
  if(str.length()<2){
    return 0;
  }if (str.substring(0,2).equals("hi")){
    return countHi(str.substring(2)+1)
  }else{
  return countHi(str.substring(1));
  }
}

//fibonacci
function fibonacci(n) {
  if(n==0){
    return 0;
  }if(n==1){
    return 1;
  }else{
    return fibonacci(n-1)+fibonacci(n-2);
  }
}

//sumDigits
function sumDigits(n) {
  if(n%10==0){
    return n;
  }else{
    return n%10+sumDigits(Math.floor(n/10));
  }
}

//bunnieEars
function bunnyEars(bunnies) {
  if(bunnies==0){
    return 0;
  }else{
    return bunnyEars(bunnies-1)+2;
  }
}

//count7
function count7(n) {
  var a=n/10; //remove digit
  var b=n%10; //right most
  if(n==0){ergh
    return 0;
  }if(b==7){
    return count7(a)+1;
  }else{
    return count7(a);
  }
}

//bunnieEars2
function bunnieEars2(bunnies){
  if(bunnies==0){
    return 0;
  }if(bunnies%2==1){
    return 2+bunnieEars2(bunnies-1);
  }else{
    return 3+bunnieEars2(bunnies-1);
  }
}

//factorial
function factorial(n){
  if(n==1){
    return 1;
  }else{
    return n+factorial(n-1);
  }
}
