const submitButton = document.querySelector(".submit-button");

const authorInput = document.querySelector("#author-input");
authorInput.addEventListener("input",(event)=> {
    if(authorInput.validity.valid) {
        authorInput.parentNode.querySelector(".error").textContent = "";
        authorInput.parentNode.querySelector(".error").className = "error";
    } else {
        if(authorInput.validity.valueMissing) {
            authorInput.parentNode.querySelector(".error").textContent = "You need to enter an author";
        }

        authorInput.parentNode.querySelector(".error").className = "error active";
    }
})
const titleInput = document.querySelector("#title-input");
titleInput.addEventListener("input",(event)=> {
    if(titleInput.validity.valid) {
        titleInput.parentNode.querySelector(".error").textContent = "";
        titleInput.parentNode.querySelector(".error").className = "error";
    } else {
        if(titleInput.validity.valueMissing) {
            titleInput.parentNode.querySelector(".error").textContent = "You need to have a title";
        }

        titleInput.parentNode.querySelector(".error").className = "error active";
    }
})
const pageInput = document.querySelector("#pages-input");
pageInput.addEventListener("input",(event) => {
    if(pageInput.validity.valid) {
        pageInput.parentNode.querySelector(".error").textContent = "";
        pageInput.parentNode.querySelector(".error").className = "error";
     } else {
        if(pageInput.validity.valueMissing) {
            pageInput.parentNode.querySelector(".error").textContent = "Input page numbers";
        } else if(pageInput.validity.typeMismatch) {
            pageInput.parentNode.querySelector(".error").textContent = "Page must be a number";
        }
        pageInput.parentNode.querySelector(".error").className = "error active"
     }
})
const is_readInput = document.querySelector('#is_read-input');

const libraryElement = document.querySelector('.library');

const myLibrary = [];

class book {
    constructor(title,author,pages,is_read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.is_read = is_read;
    }

    info() {
        return ("Pages : " + pages + ", Is Read : " + is_read + ", Title : " + title + ", Author : " + author);
    }
}




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

function delDiv(event) {
    const button = event.target;
    const divToDel = button.parentElement;
    myLibrary.splice(divToDel.getAttribute('data-id'),1);
    displayLibrary();
}

function isreadToggle(event) {
    target = event.target.parentElement.parentElement;

    if(myLibrary[target.getAttribute('data-id')].is_read === true) {
        myLibrary[target.getAttribute('data-id')].is_read = false;
    } else {
        myLibrary[target.getAttribute('data-id')].is_read = true;
    }
    displayLibrary();
}

let divCount = 0;
function displayLibrary() {
    libraryElement.innerHTML ="";
    
    for(let i=0;i<myLibrary.length;i++) {
        newDiv = document.createElement('div');
        newDiv.setAttribute('data-id',i);
        newDiv.setAttribute('class','library-element');
        
        newDivContent = document.createElement('div');
        newDivContent.innerHTML = `Title : ${myLibrary[i].title}, Author : ${myLibrary[i].author}, Pages : ${myLibrary[i].pages}, Is read : ${myLibrary[i].is_read}`;
        newDiv.appendChild(newDivContent);

        newDivButtonCluster = document.createElement('div');
        newDivButtonCluster.setAttribute('class','btn-cluster');
        newDiv.appendChild(newDivButtonCluster);

        newDivDel = document.createElement('button');
        newDivDel.textContent = "Delete";
        newDivDel.setAttribute('class','delete-btn');
        newDivButtonCluster.appendChild(newDivDel);
        newDivDel.addEventListener('click',delDiv);

        newDivRead = document.createElement('button');
        newDivRead.textContent = "Read";
        newDivRead.setAttribute('class','submit-button');
        newDivButtonCluster.appendChild(newDivRead);
        newDivRead.addEventListener('click',isreadToggle);

        libraryElement.appendChild(newDiv);
    }

    
}



