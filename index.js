function writeCards(x,y){
  const card = [];
  for (let i = 0; i < x.length; i++) {
    card.push(`Thank you, ${x[i]}, for the wonderful ${y} gift!`);
  }
  return card;
}
 const writeCard = ['Lisa', 'Kaitlin', 'Jan'];
 writeCards(writeCard,"evnet");

 function countDown(num){
  if (num >= 0){
    while (num >= 0){
      console.log(num);
      num--;
    }
  }
  else{
    console.log("Please enter a positive integer!")
  }
}
