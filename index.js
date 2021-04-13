//const writeCards=[["Ada", "Brendan", "Ali"], "birthday"];


//  for (let i = 0; i < writeCards.length; i++) {
  //  console.log(`Thank you, ${writeCards[[i]]}, for the wonderful ${writeCards[i]} gift!" `);
//  }

//  return writeCards;
//}

//greetings(writeCards);
const writeCard = [["Ada", "Brendan", "Ali"], "birthday"];
writeCards(writeCard,"birthday");
function writeCards(x,y){
  const birthday = [];
  for (let i = 0; i < x[0].length; i++) {
    birthday.push(`Thank you, ${x[0][i]}, for the wonderful ${y} gift!`);
  }
  return birthday;
}
