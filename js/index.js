const listElement = document.getElementById("list")
const showPanelElement = document. getElementById("show-panel")

document.addEventListener("DOMContentLoaded", function() {

    fetch('http://localhost:3000/books',{
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json',
        }
        })
    .then(res => res.json())
    .then(bookList => {
        bookList.forEach(book => {
            createBookElemement(book)
        })
     })
    }
);

function createBookElemement(book){
    const newListBookElement = document.createElement("li")
    newListBookElement.textContent = book.title
    listElement.appendChild(newListBookElement)

    book.addEventListener('click', event => {
        displayBookElement(book)
    }
}

function displayBookElement(book){
    showPanelElement.src = book.img_url
}
