'use strict';

console. log('hello world');

alert ('Welcome to my About Me page!');

let usrnm = prompt('What do you like to be called?');
console. log(usrnm);
alert('Cheers ' + usrnm+ '!');

alert('Guesing game: Please answer the following, yes or no, questions.');

let pets = prompt ('Do you think I have any pets?').toLowerCase();

if (pets === 'yes' || pets === 'y') {
  /*console. log*/alert('Not at the moment ' + usrnm + 'but quite a few over my lifetime.');
} else if (pets === 'no' || pets === 'n') {
  /*console. log*/alert('Wow ' + usrnm + '. Spot on guess!');
} else {
  /*console. log*/alert('Please answer with yes or no only. Thanks ' + usrnm + '!');
}

let snow = prompt ('Do I like the snow?').toLowerCase();

if (snow === 'yes' || snow === 'y') {
  /*console. log*/alert('I take rain over snow; any day of the week.');
} else if (snow === 'no' || snow === 'n') {
  /*console. log*/alert('Correct! We never had snow days, but always had snow growing up. Ha');
} else {
  /*console. log*/alert('Please answer with yes or no only. Thanks ' + usrnm + '!');
}

let champ = prompt ('Is Boston the championship city?').toLowerCase();

if (champ === 'yes' || champ === 'y') {
  /*console. log*/alert('Of course! Evey Boston spots team has current championships.');
}
else if (champ === 'no' || champ === 'n') {
  /*console. log*/alert('I would feel that way if I was coming from your town too.');
} else {
  /*console. log*/alert('Please answer with yes or no only. Thanks ' + usrnm + '!');
}

let bruno = prompt ('Is my middle name Bruno?').toLowerCase();

if (bruno === 'yes' || bruno === 'y') {
  /*console. log*/alert('No; and nobody is suppose to talk about Bruno.');
} else if ( bruno === 'no' || bruno === 'n') {
  /*console. log*/alert('Correct! Now off the subject of Bruno; why did you bring it up?!');
} else {
  /*console. log*/alert('Please answer with yes or no only. Thanks ' + usrnm + '!');
}

let bean = prompt ('Is the city of Boston known for beans?').toLowerCase();

if (bean === 'yes' || bean === 'y') {
  /*console. log*/alert('Correct; and locally the city is reffered to as The Bean or Bean Town!');
} else if (bean === 'no' || bean === 'n') {
  /*console. log*/alert('Wow. You never heard of Boston Baked Beans!!');
} else {
  /*console. log*/alert('Please answer with yes or no only. Thanks ' + usrnm + '!');
}
