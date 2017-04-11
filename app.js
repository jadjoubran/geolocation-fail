(function() {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((data) => {
        data.forEach(function(user){
            let name = user.name;
            let card = `<div class="card">${name}</div>`;
            document.querySelector('#users-list').innerHTML += card;
        });
    });
})();
