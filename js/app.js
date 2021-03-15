'use strict';

alert('Hello there , we are gonna play about me guessing game ,  are you ready ? ');

let q1 = prompt('Is my name Ahmad').toLowerCase();
if(q1==='yes' || q1==='y')
{
  alert('Noooo  ,That is not my name , my name is Qusay, it is a nice name right ? ^_^');
  console.log('Noooo  ,That is not my name , my name is Qusay, it is a nice name right ? ^_^');
}
else if (q1==='no' || q1==='n')
{
  alert('yeah that is correct , that is not my name , My name is Qusay , it is a nice name right ? ^_^');
  console.log('yeah that is correct , that is not my name , My name is Qusay , it is a nice name right ? ^_^');
}

else
{
  alert('answer the question right next time ok ? it doesn\'t need you to be a genius to answer');
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
  console.log('you are right , I\'m not that old , I\'m 23 old , still young  ');
}

else
{
  alert('answer the question right next time ok ? it doesn\'t need you to be a genius to answer');
}

let q3 = prompt('Am I an web developer ?').toLowerCase();
if(q3==='yes' || q3==='y')
{
  alert('yeah that\'is right , and I hope to become one of the greatest programmers ');
  console.log('yeah that\'is right , and I hope to become one of the greatest programmers ');
}
else if (q3==='no' || q3==='n')
{
  alert('no , come on be realistic you like my work , who does not :) ');
  console.log('no , come on be realistic you like my work , who does not :) ');
}

else
{
  alert('answer the question right next time ok ? it doesn\'t need you to be a genius to answer');
}

let q4 = prompt('Do I live in jordan ?').toLowerCase();
if(q4==='yes' || q4==='y')
{
  alert('yeah that\'is right , fortunetly I live in this great country');
  console.log('yeah that\'is right , fortunetly I live in this great country');
}
else if (q4==='no' || q4==='n')
{
  alert('you are wrong , I live in jordan ');
  console.log('you are wrong , I live in jordan ');
}

else
{
  alert('answer the question right next time ok ? it doesn\'t need you to be a genius to answer');
}

let q5 = prompt('Do you think I prefer online classes ? ').toLowerCase();
if(q5==='yes' || q5==='y')
{
  alert('yes that\'s right I do prefer them because it saves me time and effort of transporting');
  console.log('yes that\'s right I do prefer them because it saves me time and effort of transporting');
}
else if(q5==='no' || q5==='n')
{
  alert('no that\'s wrong . I do prefer online classes');
  console.log('no that\'s wrong . I do prefer online classes');
}

else
{
  alert('answer the question right next time ok ? it doesn\'t need you to be a genius to answer');
}


let name1 = prompt('What is your name by the way ?');

alert('that is really a beautiful name, nice to meet you ' + name1 +' ^_^');

document.getElementById('info').innerHTML = 'Hello Everyone, I\'m Qusay Al-Amarat from Jordan , I\'m Electrical Engineer and soon will be a full stack web developer inchallah, I have graduated from The University of Jordan in 2020 , my dream is to become a great programmer ' ;
