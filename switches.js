function returnAsNumericKS3(grade)
{
switch(grade)
{
case '8a': var numeric = 21;
           break;
case '8b': var numeric = 20;
           break;
case '8c': var numeric = 19;
           break;           
case '7a': var numeric = 18;
           break;
case '7b': var numeric = 17;
           break;
case '7c': var numeric = 16;
           break;
case '6a': var numeric = 15;
           break;
case '6b': var numeric = 14;
           break;
case '6c': var numeric = 13;
           break;
case '5a': var numeric = 12;
           break;
case '5b': var numeric = 11;
           break;
case '5c': var numeric = 10;
           break;
case '4a': var numeric = 9;
           break;
case '4b': var numeric = 8;
           break;
case '4c': var numeric = 7;
           break;
case '3a': var numeric = 6;
           break;
case '3b': var numeric = 5;
           break;
case '3c': var numeric = 4;
           break;
case '2a': var numeric = 3;
           break;
case '2b': var numeric = 2;
           break;
case '2c': var numeric = 1;
           break;


case 'new': break;

case '': break;

default: var numeric = 0;
}

  var fixed = numeric.toFixed(0);
  var int = parseInt(fixed);
  return int;
  
}

function returnAsNumericKS4(grade)
{
switch(grade){
case 'A*': var numeric = 9;
           break;
case 'A': var numeric = 8;
           break;
case 'B': var numeric = 7;
           break;           
case 'C': var numeric = 6;
           break;
case 'D': var numeric = 5;
           break;
case 'E': var numeric = 4;
           break;
case 'F': var numeric = 3;
           break;
case 'G': var numeric = 2;
           break;
case 'U': var numeric = 1;
           break;

case 'new': break;

case '': break;

default: var numeric = 0;
}

  var fixed = numeric.toFixed(0);
  var int = parseInt(fixed);
  return int;
  
}

function returnAsNumericIB(grade)
{
switch(grade){
case 1: var numeric = 7;
           break;
case 2: var numeric = 6;
           break;
case 3: var numeric = 5;
           break;           
case 4: var numeric = 4;
           break;
case 5: var numeric = 3;
           break;
case 6: var numeric = 2;
           break;
case 7: var numeric = 1;
           break;

case 'new': break;

case '': break;

default: var numeric = 0;
}

  var fixed = numeric.toFixed(0);
  var int = parseInt(fixed);
  return int;
  
}