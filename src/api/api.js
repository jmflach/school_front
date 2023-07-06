const backEnd = "http://localhost:8080/";

export async function get(endPoint) {
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

async function post(endPoint, data) {
  var response;

  await fetch(backEnd + endPoint, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      response = data;
    })
    .catch((error) => {
      response = { 
        "message" : "Can not communicate with server"
      };
      console.log(error);
    });

  return response;
}

export async function authenticate_dummy() {
  return await get("dummy_auth");
}

export async function authenticate(authData) {
  return await post("auth/signin", authData);
}

export async function signup(data) {
  return await post("auth/signup", data);
}
