

// nested loop practice

document.write("<h1>NESTED LOOP</h1><br>");
for(var i=0 ; i < 3 ; i++)
{
    document.write("<strong>OUTER LOOP</strong>");
    document.write(i);
    document.write("<br>");
        for(var j = 0 ; j < 5 ; j++)
         {
             document.write("INNER LOOP");
             document.write(j);
             document.write("<br>");
         }

} 