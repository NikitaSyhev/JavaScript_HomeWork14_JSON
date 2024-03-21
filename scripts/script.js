import book1 from '../JSON/data1.json' assert {type: 'json'}
import book2 from '../JSON/data2.json' assert{type: 'json'}
import book3 from '../JSON/data3.json' assert{type: 'json'}

const bookInfo = document.querySelector('.book-info');
//создали массив
let booksList = [book1, book2, book3];
//создали объект
let library = {
    libraryList: booksList,
    searchName: function(bookTitle) {
        for(let i = 0; i < booksList.length; ++i) {
            if(booksList[i].bookName == bookTitle) return booksList[i];
            else continue;
        }       
    },
    bookInfoPrint: function(bookTitle) {
        for(let i = 0; i < booksList.length; ++i) {
            if(booksList[i].bookName == bookTitle) {
                bookInfo.innerHTML = `Имя книги: ${booksList[i].bookName}, 
                год: ${booksList[i].year},                    
                краткое описание: ${booksList[i].description}`;
            };
        }
    },
    sortBooksByReleaseDate: function() {
        return booksList.sort((a, b) => new Date(a.year) - new Date(b.year));
    }   
}
// //реализация первого метода
console.log('Работа функции номер 1: передаем название Black Swan');
console.log(library.searchName("Black Swan"));
// реализация второго метода
console.log('Работа функции номер 2 отображается в блоке: Book Info');
library.bookInfoPrint("TED Talks");
// реализация третьего метода
console.log('Отсортировали книги по году и вывели в консоль.')
console.log(library.sortBooksByReleaseDate());
