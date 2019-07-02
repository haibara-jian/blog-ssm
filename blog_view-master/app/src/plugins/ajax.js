export default {
  get(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
        console.log('success');
      }
    };
    xhr.send();
  },
  pose() {

  },
  jsonToObj(json) {
    const obj = JSON.parse(json);
    return obj;
  },
  objToJson(obj) {
    const json = JSON.stringify(obj);
    return json;
  },

};
