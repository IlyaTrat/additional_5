module.exports = function check(str, bracketsConfig) {
  let strArray = Array.from(str);
  let tempArray = [];
  for(let i = 0; i < strArray.length; i++) {
    let char = strArray[i];
    let open = checkOpen(char, bracketsConfig);
    let closeParam = checkClose(char, bracketsConfig);
    if(open && closeParam[0]) {
      if(tempArray.includes(char) && tempArray[tempArray.length -1] == char) {
        tempArray.pop();
      }
      else if (!tempArray.includes(char)) {
        tempArray.push(char);
      }
    }
    else if (open) {
      tempArray.push(char);
    }
    else if (closeParam[0] && tempArray[tempArray.length -1] == closeParam[1]) {
      tempArray.pop();
    }
    else if (!open && closeParam[0] && tempArray.length < 1) {
      tempArray.push(false);
    }
  }
  return tempArray.length != 0 ? false : true; 
}

function checkOpen(char, bracketsConfig) {
  let res = false;
  for(let i = 0; i < bracketsConfig.length; i++) {
    char == bracketsConfig[i][0] ? res = true : false;
  }
  return res;
}

function checkClose(char, bracketsConfig) {
  let res = false;
  for(let i = 0; i < bracketsConfig.length; i++) {
    char == bracketsConfig[i][1] ? res = [true, bracketsConfig[i][0]] : false;
  }
  return res;
}