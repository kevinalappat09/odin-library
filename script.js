const submitButton = document.querySelector(".submit-button");

const authorInput = document.querySelector("#author-input");
const titleInput = document.querySelector("#title-input");
const pageInput = document.querySelector("#pages-input");
const is_readInput = document.querySelector('#is_read-input');

const libraryElement = document.querySelector('.library');

const myLibrary = [];

function book(title, author, pages, is_read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.is_read = is_read;

    this.info = function() {
        return ("Pages : " + pages + ", Is Read : " + is_read + ", Title : " + title + ", Author : " + author);
    }
};

function add_book(title, author, pages, is_read) {
    const new_book = new book(title,author,pages,is_read);
    myLibrary.push(new_book);
}

function addLibraryBook() {
    authorInputValue = authorInput.value;
    titleInputValue = titleInput.value;
    pageInputValue = pageInput.value;
    is_readInputValue = is_readInput.checked;

    if(is_readInputValue==false) {
        add_book(titleInputValue,authorInputValue,pageInputValue,false);
    } else {
        add_book(titleInputValue,authorInputValue,pageInputValue,true);
    }

    displayLibrary();
}

submitButton.addEventListener('click', addLibraryBook);

function displayLibrary() {
    libraryElement.innerHTML ="";
    for(let i=0;i<myLibrary.length;i++) {
        newLibItem = document.createElement('div');
        newLibItem.innerHTML = `${myLibrary[i].title} + ${myLibrary[i].author}`;
        
        newItemDel = document.createElement('button');
        newItemDel.setAttribute('data-id',i);
        newItemDel.textContent = "Delete";

        newItemDel.addEventListener('click', ()=> {
            console.log(this.getAttribute('data-id'));
        });

        newLibItem.appendChild(newItemDel);

        libraryElement.appendChild(newLibItem);
    }
}



