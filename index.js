function scuberGreetingForFeet(rideLength){
  if (rideLength <= 400) {
    return 'This one is on me!';
  } else if (rideLength > 2000 && rideLength < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (rideLength > 2500) {
    return 'No can do.';
  }
  }
  

function ternaryCheckCity(city){
  const destination = (city === 'NYC') ?  "Ok, sounds good." : "No go."; 
  return destination;
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case tip = 'generous' :
      return "Thank you so much.";
      
    case tip = 'not as generous' :
      return "Thank you.";
     
    default: 
      return "Bye.";
  }

}