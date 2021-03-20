// http://serjride.pythonanywhere.com/?input=get_json
// https://swapi.co/api/people/1/

let token = 'Token 0ecfe74acc8a79bfae41279f794a3175f4e562a0'

const getServerRecord = (record) => {

  fetch('http://serjride.pythonanywhere.com/?input=get_json', {
    headers: {
      Authorization: token
    }
  })
};

export { getServerRecord };
