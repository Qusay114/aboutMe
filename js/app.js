'use strict';


alert('Hello there , we are gonna play about me guessing game , answer with yes/no or y/n ,  are you ready ? ');

let name1 = prompt('What is your name ?');
alert('that is really a beautiful name, nice to meet you ' + name1 +' ^_^');

let countCorrect = 0 ;

let q1 = prompt('Is my name Ahmad').toLowerCase();
if(q1==='yes' || q1==='y')
{
  alert('Noooo  ,That is not my name , my name is Qusay, it is a nice name right ? ^_^');
  console.log('Noooo  ,That is not my name , my name is Qusay, it is a nice name right ? ^_^');
}
else if (q1==='no' || q1==='n')
{
  alert('yeah that is correct , that is not my name , My name is Qusay , it is a nice name right ? ^_^');
  countCorrect++;
  console.log('yeah that is correct , that is not my name , My name is Qusay , it is a nice name right ? ^_^');
}
else
{
  alert('Please answer with yes/no or y/n ');
}

let q2 = prompt('Am I 40 old ?').toLowerCase();
if(q2==='yes' || q2==='y')
{
  alert('Noooo  ,I\'m not that old come on -_-');
  console.log('Noooo  ,I\'m not that old come on -_-');
}
else if (q2==='no' || q2==='n')
{
  alert('you are right , I\'m not that old , I\'m 23 old , still young  ');
  countCorrect++;
  console.log('you are right , I\'m not that old , I\'m 23 old , still young  ');
}
else
{
  alert('Please answer with yes/no or y/n ');
}

let q3 = prompt('Am I an web developer ?').toLowerCase();
if(q3==='yes' || q3==='y')
{
  alert('yeah that\'is right , and I hope to become one of the greatest programmers ');
  countCorrect++;
  console.log('yeah that\'is right , and I hope to become one of the greatest programmers ');
}
else if (q3==='no' || q3==='n')
{
  alert('no , come on be realistic you like my work , who does not :) ');
  console.log('no , come on be realistic you like my work , who does not :) ');
}
else
{
  alert('Please answer with yes/no or y/n ');
}

let q4 = prompt('Do I live in jordan ?').toLowerCase();
if(q4==='yes' || q4==='y')
{
  alert('yeah that\'is right , fortunetly I live in this great country');
  countCorrect++;
  console.log('yeah that\'is right , fortunetly I live in this great country');
}
else if (q4==='no' || q4==='n')
{
  alert('you are wrong , I live in jordan ');
  console.log('you are wrong , I live in jordan ');
}
else
{
  alert('Please answer with yes/no or y/n ');
}

let q5 = prompt('Do you think I prefer online classes ? ').toLowerCase();
if(q5==='yes' || q5==='y')
{
  alert('yes that\'s right I do prefer them because it saves me time and effort of transporting');
  countCorrect++;
  console.log('yes that\'s right I do prefer them because it saves me time and effort of transporting');
}
else if(q5==='no' || q5==='n')
{
  alert('no that\'s wrong . I do prefer online classes');
  console.log('no that\'s wrong . I do prefer online classes');
}
else
{
  alert('Please answer with yes/no or y/n ');
}

let q6 = Number(prompt('How old am I ?'));
for(let i =0 ; i<3 ; i++ )
{
  
  if(q6===23)
  {
    alert('great you guessed correct');
    console.log('Great , you guessed right ');
    countCorrect++;
    break;
  }
  else if(q6 < 23)
  {
    q6 = Number(prompt('Wrong! ,it\'s too low , come on try again'));
  }
  else if(q6 > 23)
  {
    q6 = Number(prompt('Wrong! ,it\'s too high , come on try again'));
  }
  else 
  {
    q6 = Number(prompt('please , don\'t leave it empty , try again'));
  }

}

let triesLeft = 6;
let q7 = prompt('What is My favourite movie ?').toLowerCase();
let favMovies = ['interstellar', 'inception', 'idiot 3', 'parasite']; 
for(let j = 0 ; j < 5 ; j++)
{
  if(favMovies.indexOf(q7) === -1 )
  {
    triesLeft--;
    q7 = prompt('Wrong! , try again you still have ' + triesLeft + ' left').toLowerCase();
  }
  else
  {
    alert('Great , you guessed right ');
    console.log('Great , you guessed right ');
    countCorrect++;
    break;
  }
}

alert('here is My favourite movies : ' + favMovies);

document.getElementById('score').innerHTML ='Hello ' + name1 + ' you have answered ' + countCorrect + ' of 7 questions and down you can find all info about me , it was a pleasure to play with you' ;
