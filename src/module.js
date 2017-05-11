export default function sum(a, b) {
    return a + b;
}

let gaStandardMapping = (ckData) => {
  ckData.map((ckData) => ckData.name + ':' + ckData.value).join(';');
}