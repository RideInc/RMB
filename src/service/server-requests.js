// https://serjride.pythonanywhere.com/?input=get_json
// https://swapi.co/api/people/1/

// для сервера
const url = 'https://serjride.pythonanywhere.com/rmb'

// для localhost
// const url  = 'http://127.0.0.1:5000/rmb'

const postResource = async (url = url) => {
  const res = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: localStorage.Base
  })
  let result = await res.json();
  return result;
};

const checkAuth = async (url = url, pass) => {
  const res = await fetch(`${url}_auth`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: pass
  })
  let result = await res.json();
  return result;
};

export { url, postResource, checkAuth };
