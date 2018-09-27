function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`);
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  }
  else {
    return katzDeliLine[0];
    katzDeliLine.slice[0];
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.';
  }
  else {
    
  }
}