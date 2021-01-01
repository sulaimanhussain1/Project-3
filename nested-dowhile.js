

// This is the dowhile loop ..practice




document.write("<h1> DO WHILE LOOP</h1>")

var i = 0;

do{

   document.write("<strong> OUTER LOOP.</strong>");
    document.write(i);
    i++;
    document.write("<br>");

        var j = 0 ;
        do{
            document.write("INNER LOOP");
            document.write(j);
            j++;
            document.write("<br>");
        }while( j < 3);
}while(i < 5);