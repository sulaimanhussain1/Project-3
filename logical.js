

document.write("<h1>LOGICAL OPERATORS.</h1><br>");
document.write("c = 5 > 10 && 3 < 10 <br>");
var a = 5 > 10;
var b = 3 < 10;
c = a && b ;
document.write(c);
document.write("<br><br>");

document.write("c = 12 > 10 && 3 < 10 <br>");
var a = 12 > 10;
var b = 3 < 10;
c = a && b ;
document.write(c);
document.write("<br><br>");

document.write("c = 5 > 10 || 3 < 10 <br>");
var a = 5 > 10;
var b = 3 < 10;
c = a || b ;
document.write(c);
document.write("<br><br>");

document.write("c = 5 > 10 || 12 < 10 <br>");
var a = 5 > 10;
var b = 12 < 10;
c = a || b ;
document.write(c);
document.write("<br><br>");

document.write("c =  !(5 > 3) <br>");
var a = 5 ;
var b = 3 ;
c = !(a > b) ;
document.write(c);
document.write("<br><br>");

document.write("c =  !(5 < 3) <br>");
var a = 5 ;
var b = 3 ;
c = !(a < b) ;
document.write(c);
document.write("<br><br>");