const buttonSearch = document.getElementById("button-search")

const InputField = document.getElementById('input-field')
const divContainer = document.getElementById("container")
const errorDiv = document.getElementById('error-container')
const resultDiv = document.getElementById('result-container')
resultDiv.classList.add("result")
errorDiv.classList.add("error");



function loadData() {

    const searchText = InputField.value;
    if (searchText === '') { //using triple equal
        errorDiv.innerText = "No result found"; // empty string error message
        return;
    } else {
        errorDiv.innerText = '';

    }
    divContainer.innerHTML = '';
    InputField.value = '';
    fetch(` https://openlibrary.org/search.json?q=${searchText}`) //using fetch
        .then(res => res.json())
        .then(data => showData(data))

}

function showData(item) {
    resultDiv.innerText = `Total Found:${item.num_found}`;
    const itemBooks = item.docs;
    itemBooks.forEach(books => { //using forEach

        const div = document.createElement('div');
        div.classList.add("col")
        div.innerHTML = `
        
        <div class="card">
             <img src="https://covers.openlibrary.org/b/id/${books.cover_i}-M.jpg" class="card-img-top" alt="..."> 
            <div class="card-body">
                <h5 class="card-title">${books.title}</h5>
                <p class="card-text"> Author Name: ${books.author_name}</p>
                <p class="card-text"> Publish Year: ${books.first_publish_year}</p>
            </div>
        </div>
   
        `;
        divContainer.appendChild(div);
    })

}