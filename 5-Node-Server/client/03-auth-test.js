function fetchAllFromAuthRoute() {
  const fetch_url = `http://localhost:3001/authtest/getall`;
  const accessToken = localStorage.getItem("SessionToken");

  const response = fetch(fetch_url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
}
function postToAuthRouteCreate() {
  const fetch_url = "http://localhost:3001/authtest/create";
  const accessToken = localStorage.getItem("SessionToken");

  let authTestDataInput = document.getElementById("authTestData").value;
  let authInputData = { authtestdata: { item: authTestDataInput } };

  const response = fetch(fetch_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken
    },
    body: JSON.stringify(authInputData)
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
}

function getOneByUser() {
  let postIdNumber = document.getElementById("getNumber").value;

  const fetch_url = `http://localhost:3001/authtest/${postIdNumber}`;
  const accessToken = localStorage.getItem("SessionToken");

  const response = fetch(fetch_url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken
    }
  })
    .then(response => {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
      var myItem = document.getElementById("getItemValue");
      myItem.innerHTML = response.authtestdata;
    });
}

function updateItem() {
  let postIdNumber = document.getElementById("updateNumber").value;
  let authTestDataInput = document.getElementById("updateValue").value;

  const fetch_url = `http://localhost:3001/authtest/update/${postIdNumber}`;
  const accessToken = localStorage.getItem("SessionToken");

  let authInputData = { authtestdata: { item: authTestDataInput } };
  const response = fetch(fetch_url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken
    },
    body: JSON.stringify(authInputData)
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      var myItem = document.getElementById("newItemValue");
      myItem.innerHTML = data.authtestdata;
      fetchAllFromAuthRoute();
    });
}

function showCurrentData(e) {
  const fetch_url = `http://localhost:3001/authtest/${e.value}`;
  const accessToken = localStorage.getItem("SessionToken");

  fetch(fetch_url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken
    }
  })
    .then(response => {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
      var myItem = document.getElementById("updateValue");
      if (!response) return;
      else myItem.value = response.authtestdata;
    });
}
function deleteItem() {
  let postIdNumber = document.getElementById("deleteNumber").value;

  const fetch_url = `http://localhost:3001/authtest/delete/${postIdNumber}`;
  const accessToken = localStorage.getItem("SessionToken");

  const response = fetch(fetch_url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken
    }
  }).then(response => {
    console.log(response);
    fetchAllFromAuthRoute();
  });
}
