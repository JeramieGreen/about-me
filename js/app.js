'use strict';

console.log('hello world');

alert('Welcome to my About Me page!');

let usrnm = prompt('What do you like to be called?');
console.log(usrnm);
alert('Cheers ' + usrnm + '!');

alert('Guesing game: Please answer the following, yes or no, questions.');

let score = 0;

//Question One
function havePets() {
  let pets = prompt('Do you think I have any pets?').toLowerCase();

  if (pets === 'yes' || pets === 'y') {
  /*console. log*/alert('Not at the moment ' + usrnm + 'but quite a few over my lifetime.');
  } else if (pets === 'no' || pets === 'n') {
  /*console. log*/alert('Wow ' + usrnm + '. Spot on guess!');
    score++;
  }else {
  /*console. log*/alert('Please answer with yes or no only. Thanks ' + usrnm + '!');
  }
}

//Question Two
function weather() {
  let snow = prompt('Do I like the snow?').toLowerCase();

  if (snow === 'yes' || snow === 'y') {
  /*console. log*/alert('I take rain over snow; any day of the week.');
  } else if (snow === 'no' || snow === 'n') {
  /*console. log*/alert('Correct! We never had snow days, but always had snow growing up. Ha');
    score++;
  }else {
  /*console. log*/alert('Please answer with yes or no only. Thanks ' + usrnm + '!');
  }
}

//Question Three
function champCity() {
  let champ = prompt('Is Boston the championship city?').toLowerCase();

  if (champ === 'yes' || champ === 'y') {
  /*console. log*/alert('Of course! Evey Boston spots team has current championships.');
    score++;
  }else if (champ === 'no' || champ === 'n') {
  /*console. log*/alert('I would feel that way if I was coming from your town too.');
  } else {
  /*console. log*/alert('Please answer with yes or no only. Thanks ' + usrnm + '!');
  }
}

//Question Four
function middleName() {
  let bruno = prompt('Is my middle name Bruno?').toLowerCase();

  if (bruno === 'yes' || bruno === 'y') {
  /*console. log*/alert('No; and nobody is suppose to talk about Bruno.');
  } else if (bruno === 'no' || bruno === 'n') {
  /*console. log*/alert('Correct! Now off the subject of Bruno; why did you bring it up?!');
    score++;
  }else {
  /*console. log*/alert('Please answer with yes or no only. Thanks ' + usrnm + '!');
  }
}

//Question Five
function cityFact() {
  let bean = prompt('Is the city of Boston known for beans?').toLowerCase();

  if (bean === 'yes' || bean === 'y') {
  /*console. log*/alert('Correct; and locally the city is reffered to as The Bean or Bean Town!');
    score++;
  } else if (bean === 'no' || bean === 'n') {
  /*console. log*/alert('Wow. You never heard of Boston Baked Beans!!');
  } else {
    /*console. log*/alert('Please answer with yes or no only. Thanks ' + usrnm + '!');
  }
}

//Question Six
function countries() {
  let shotsLeft = 3;
  for (let i = 0; i < 4; i++) {
    let number = parseInt(prompt('From 1 - 10; in how many countries have I lived?'));
    if (number === 5) {
      /*console. log*/alert('Including the US, yes!');
      score++;
      break; 
    } if (number < 5) {
    /*console. log*/alert(`Just a little higher; you have ${shotsLeft--} shots left!`);
    } if (number > 5) {
    /*console. log*/alert(`One day! But try a lower number. You still have ${shotsLeft--} shots left.`);
    }
  } /*console. log*/alert('5 countries lived so far.');
}

//Question Seven
function turtle(){
//            0.              1.          2.        .3          4.          5.
  let tmnt = ['michelangelo','donatello','raphael','leonardo','splinter','metalhead'];

  console. log(tmnt.length);

  let moreAttempts = 6;
  let rightAnswer = false;

  for (let i = 0; i < 6; i++) {
    let userResponse = prompt(`Name a Ninja Turtle character; you have ${moreAttempts-i} chances left!`).toLowerCase();
    for (let j = 0; j < tmnt.length; j++) {
      if (userResponse === tmnt[j]) {
        console. log('That is correct!');
        rightAnswer = true;
        score++;
        break;
      } if (userResponse !== tmnt[j]) {
        console. log('Incorrect, this time.');
        break;
      }
    } if (rightAnswer) {
      break;
    }
  }
}

// This is where my functions are being called
/*question one*/havePets();
/*question two*/weather();
/*question three*/champCity();
/*question four*/middleName();
/*question five*/cityFact();
/*question six*/countries();
/*question seven*/turtle();

alert('Thanks for playing ' + usrnm + '! You scored a ' + score + ' out of 7!');
