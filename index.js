function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log('HELLO')
}

function logWhisper(string){
  console.log('hello')
}

function sayHiToGrandma (string) {
  
  // we need to be careful of syntax otherwise it will break
  //we also need to use the string argument and not hardcode the text
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
   }else if(string.toUpperCase() === string){
      return "YES INDEED!" 
    } else {
        return "I love you, too"
   }
    
}