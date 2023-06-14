const btn = document.querySelector("get-quotes");
btn.addEventListener("click", getQuotes);

function getQuotes(e) {
  e.preventDefault();

  fetch("users.json")
    .then((resp) => {
      return resp.json();
    })
    .then((users) => {
      let output = "";
      users.forEach((user) => {
        output += `
          <hr>
          <ul>
            <li>id: ${user.id}</li>
            <li>name: ${user.name}</li>
            <li>age: ${user.age}</li>
            <li>email: ${user.email}</li>
          </ul>
          `;
      });
      document.getElementById("users").innerHTML = output;
    });
}
