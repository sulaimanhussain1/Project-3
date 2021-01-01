
      document.write("<h1>CLASS.</h1>");
    // CLASS DECLARATION 

class Mobile {
    constructor() {

        // INSTANCE MEMBER 

        this.a = 50 ;
        this.show = function() {
              return "INSTANCE MEMBER";
        }
    };

         // PROTOTYPE MEMBER 

         display () {

            return "PROTOTYPE MEMBER ";
         
        }

}

var nokia = new Mobile ();
document.write(nokia.display() + "<br>");
document.write(nokia.show() + "<br>");
document.write(nokia.a + "<br>");


// DEFAULT CONSTRUCTOR 

// This is the default class 


// class Mobile {
    
//     // PROTOTYPE MEMBER 

//          display () {

//             return "PROTOTYPE MEMBER ";
         
//         }

// }






