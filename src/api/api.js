const backEnd = "http://localhost:8080/";


async function get(endPoint) {
    var response;

    await fetch(backEnd + endPoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      response = data;
    })
    .catch((error) => {
      console.log(error);
    });

    return response;
}

async function authenticate() {
  return await get('dummy_auth');
}

export default authenticate;
