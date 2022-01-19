let input = "daabcbaabcbc";
let unwant = "abc"
// let input = "axxxxyyyyb";
// let unwant = "xy";
let newChar = '';

while(1){
  if(input.includes(unwant)){
    input = input.replace(unwant,'')
  }
  else{
      console.log(input);
      break;
  }
}
