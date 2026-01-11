//book adding logic
const libraryArray = [];

//book object's constructor
function Book(author, title, numberOfPages, read) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

//function to add book object to libraryArray
function addBookToLibrary(author, title, numberOfPages, read) {
    const book = new Book(author, title, numberOfPages, read);
    libraryArray.push(book);
}

//added some placeholder books
addBookToLibrary('Stephen King', 'The Shining', 505, 'Yes');
addBookToLibrary('Harper Lee', 'Killing The Mockingbird', 336, "No");
addBookToLibrary('George Orwell', '1984', 328, "Yes");

function displayBooks(){
    const books = document.querySelector(".books");

    for(let i = 0; i < libraryArray.length; i++){
        //Creating containers for each book
        const bookContainer = document.createElement("div");
        bookContainer.className = "bookContainer";
        const bookCard = document.createElement("div");
        bookCard.className = "bookCard";

        //numbering each container with ID
        bookContainer.id= "bookContainerId" + i;
        books.appendChild(bookContainer);
        bookCard.id= "bookCardId" + i;
        bookContainer.appendChild(bookCard);

        //delete button
        const deleteBookBtn = document.createElement("button");
        deleteBookBtn.textContent = "X";
        bookCard.appendChild(deleteBookBtn);

        deleteBookBtn.addEventListener("click", () =>{
            libraryArray.splice(i,1);

            books.innerHTML = "";
            displayBooks();
        });

        //adding book's author
        const authorP = document.createElement("p");
        authorP.textContent = `Author: ${libraryArray[i].author}`;
        bookCard.appendChild(authorP);

        //adding book's title
        const titleP = document.createElement("p");
        titleP.textContent = `Title: ${libraryArray[i].title}`;
        bookCard.appendChild(titleP);

        //adding number of pages
        const pagesP = document.createElement("p");
        pagesP.textContent = `Pages: ${libraryArray[i].numberOfPages}`;
        bookCard.appendChild(pagesP);

        //showing if book was read or not
        const readP = document.createElement("p");
        readP.textContent = `Read: ${libraryArray[i].read}`;
        bookCard.appendChild(readP);

        //button to change book status
        const changeStatus = document.createElement("button");
        changeStatus.textContent = "Change status";
        bookCard.appendChild(changeStatus);

        changeStatus.addEventListener("click", () => {
            if(libraryArray[i].read == "No"){
                libraryArray[i].read = "Yes";
            }else{
               libraryArray[i].read = "No"; 
            }
            books.innerHTML = "";
            displayBooks();
        });
    }
}

const addBook = document.querySelector("#addBook");
const bookFormBg = document.querySelector(".bookFormBg");
const closeBookForm = document.querySelector(".closeBookForm");
const addBookBtn = document.querySelector(".addBookBtn");
const formAuthor = document.querySelector(".author");
const formTitle = document.querySelector(".title");
const formpPages = document.querySelector(".pages");
const formRead = document.querySelector(".read");

//displaying form to add new book
addBook.addEventListener("click", () => {
    bookFormBg.style.display = "block";
});

//closing the form
closeBookForm.addEventListener("click", () => {
    bookFormBg.style.display = "none";
});

//submitting new book
addBookBtn.addEventListener("click", () => {
    addBookToLibrary(formAuthor.value, formTitle.value, formpPages.value, formRead.value);
    
    const books = document.querySelector(".books");
    books.innerHTML = "";
 
    displayBooks();
});

displayBooks();
