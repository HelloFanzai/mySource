var dt= new Date();
var hr = dt.getHours();
var min = dt.getMinutes();
var tm = hr.toString()+':'+min.toString();
var r1 = " BreakFast is served  in the morning ";
var r2 = " Midday is time for lunch ";
var r3 = " Supper is now served ";
var r4 = " It is not time to eat ";
var message = getCurrentMeal();

//A
// function getCurrentMeal() {
//     var message = '';
//         if (tm >= '6:00' && tm <= '9:00')  message = r1;
//         else if ( tm >= '11:00' && tm <= '13:00') message = r2;
//         else if ( tm >= '17:00' && tm <= '20:00') message = r3;
//         else message =r4;
//         return message;    
// }

//B
// function getCurrentMeal() {
//     var message = '';
//         if (tm >= '6:00' && tm < '9:00')  message = r1;
//         if ( tm >= '11:00' && tm <= '13:00') message = r2;
//         if ( tm >= '17:00' && tm < '20:00') message = r3;
//         else message =r4;
//         return message;    
// }

//C
// function getCurrentMeal() {
//     var message = '';
//        switch (tm) {
//            case ( tm >= '6:00' && tm < '9:00' ):
//                 message = r1;
//                 break;
//            case ( tm >= '11:00' && tm <= '13:00'):
//                 message = r2;
//                break;
//            case ( tm >= '17:00' && tm <= '20:00'):
//                 message = r3;
//                break;
       
//            default:
//                 message = r4;
//        }
//        return message;
// }

//D
// function getCurrentMeal() {
//     var message = ( tm >= '6:00' && tm < '9:00' ) ? r1 : ( tm >= '11:00' && tm <= '13:00') ? r2 : ( tm >= '17:00' && tm <= '20:00') ? r3 : r4
//     return message
    
// }

//E
// function getCurrentMeal() {
//     var message = ( tm >= '6:00' || tm < '9:00' ) ? r1 : ( tm >= '11:00' || tm <= '13:00') ? r2 : ( tm >= '17:00' || tm <= '20:00') ? r3 : r4
//     return message
    
// }

console.log( tm );
console.log( message );
