// alert('Hi');

// Class:Book
class Book{

    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}
// Class:UI
class UI{
    static displaybooks(){
       const storedbooks=[
            {title:"Wings of Fire",
            author:"Abdul Kalam",
            isbn:"001"
        },
        {title:"Her Last Wish",
            author:"Ajay K Pandey",
            isbn:"002"
        }
        ];
        const books = storedbooks;
        books.forEach((book) => {
            UI.addbooktoList(book);
        });
    }

    static addbooktoList(book){
        var list = document.getElementById("book-list");

        var row = document.createElement('tr');
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }
    static removebook(el){
        if(el.classList.contains('delete')){
       el.parentElement.parentElement.remove();
        }
    }

    static clear(){
        document.getElementById("title").value='';
        document.getElementById("author").value='';
        document.getElementById("isbn").value='';
    }
}

// handle data & store data




// display books
document.addEventListener('DOMContentLoaded',UI.displaybooks);

// add book
document.querySelector("#book-form").addEventListener('submit',(e)=>{
    e.preventDefault();
    const title =document.getElementById("title").value;
    const author =document.getElementById("author").value;
    const isbn =document.getElementById("isbn").value;
    const book= new Book(title,author,isbn);
  UI.addbooktoList(book);
  UI.clear();
})

// remove book
document.querySelector("#book-list").addEventListener('click',(e)=>{
    UI.removebook(e.target);
})