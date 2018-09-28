function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`);
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  }
  else {
    var personBeingServed = katzDeliLine[0];
    return `Currently serving ${personBeingServed}.`;
    katzDeliLine.shift(`${katzDeliLine[0]}`);
  }
}

function currentLine(katzDeliLine){
  var newString = 'The line is currently: ';
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.';
  }
  else {
    for(let i=0; i<katzDeliLine.length; i++){
      var personName = katzDeliLine[i];
      newString += `${i+1}. ${personName}, `;
    }
    newString = newString.slice(0,-2);
    return newString;
  }
}