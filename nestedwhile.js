

//  nested while loop 

document.write("<h1>NESTED LOOP</h1>")

var i = 0 ;
while ( i < 4)
{
    document.write( "<strong>OUTER LOOP </strong>") ;
    document.write(i);
    i++;
    document.write("<br>");
      var j = 0 ;
      while ( j < 5)
      {
          document.write("INNER LOOP");
          document.write(j);
          j++;
          document.write("<br>");
      }
}