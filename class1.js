

// PARAMETERIZED CLASS

class Mobile {
    constructor(model_no , price) {
            this.model = model_no;
            this.pri = price ;
    }

    display () {
        return this.model + " Black " + this.pri + "<br><br>" ;
    }
}

var sumsung = new Mobile ("galaxy" , 8500);
document.write(sumsung.display());
var motorola  = new Mobile ("moto E4" , 9500);
document.write(motorola.display());