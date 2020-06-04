
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let start = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let in1 = ['Willy the Goblin','Big Daddy','Father Christmas'];
let in2 = ['the soup kitchen','Disneyland','the White House'];
let in3 = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = start;

  let xItem = randomValueFromArray(in1);
  let yItem = randomValueFromArray(in2);
  let zItem = randomValueFromArray(in3);

  newStory = newStory.replace(':in1:',xItem);
  newStory = newStory.replace(':in1:',xItem);
  newStory = newStory.replace(':in2:',yItem);
  newStory = newStory.replace(':in3:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}