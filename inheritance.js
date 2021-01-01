

document.write("<h1>INHERITANCE.</h1>");

//    INHERITANCE 

class father {
    showFmoney (){
        return " FATHER MONEY <br><br>";
    }
};

class Son extends father {
    showSmoney() {
        return " SON MONEY <br><br> ";
    }
};

class Gson extends Son {
    showGsonMoney () {
        return "GRAND SON MONEY<br><br> ";
    }
};

var s = new Son ();
document.write(s.showFmoney());
document.write(s.showSmoney());

// grand son money 

document.write("<br><br>Grand Son Money <br><br>");

var g = new Gson ();
document.write(g.showFmoney());
document.write(g.showSmoney());
document.write(g.showGsonMoney());
