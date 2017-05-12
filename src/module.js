export default function sum(a, b) {
    return a + b;
}

function gaStandardMapping (ckData) {
  if(isCkDataValid(ckData)){
    return ckData.map((ckData) => ckData.name + ':' + ckData.value + ';');
  } else {
    return false;
  }
};

let isCkDataValid = (ckData) => {
  if(valid = ckData.length > 0){
    for (var i = 0; i < ckData.length; i++) {
      if (!(ckData[name].match('/[a-zA-Z]+')
        && ckData[value].match('/[a-zA-Z0-9,]+/g'))) {
        return false;
      }
    }
    return true;
  }
  return false;
};