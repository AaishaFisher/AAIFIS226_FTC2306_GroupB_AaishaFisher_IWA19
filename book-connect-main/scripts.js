/**
 * I will replace the Id codes, author codes and genre codes in the @link {book-connect-main/data.js} 
 * with more readable ids
 */

//the authors (an object)
  const updatedAuthors = {};
  
  for (const key in authors) {
    const newKey = `author${Object.keys(updatedAuthors).length + 1}`;
    updatedAuthors[newKey] = authors[key];
  }
  
  //the genre (an object)
const updatedGenres = {};

for (const key in genres) {
    const newKey = `genre${Object.keys(updatedGenres).length + 1}`;
    updatedGenres[newKey] = genres[key];
}

console.log(updatedGenres);

//the book (an array of objects)
for (let i = 0; i < books.length; i++) {
    books[i].id = `book${i + 1}`; 
   }
   

/**
 * Represents the books in the array object
 * @type {{Array<Object>}}
 */
 const bookDetails = books;

 /**
  * Represents one page of 36 books in the book object
  * @type {number}
  */
 const page = 1;

/**
 * Checks if the 'books' variable is an array and not empty.
 * @throws {Error} Throws an error if 'books' is not an array or is empty.
 */
if (!bookDetails || !Array.isArray(books)) throw new Error('Source required') 

/**
 * Checks if the 'range' variable is an array with at least two numbers.
 * @throws {Error} Throws an error if 'range' is not an array or has fewer than two elements.
 */
if (!range || range.length < 2) throw new Error('Range must be an array with two numbers')

// const lightMode = {
//     dark: '10, 10, 20',
//     light: '255, 255, 255',
// }

// const darkMode = {
//     dark: '255, 255, 255',
//     light: '10, 10, 20',
// }

/**
 * this will randowmize the book options in the book array.
 */

function randomBookBasicFilter() {
    const randomIndex1 = Math.floor(Math.random() * books.length);
}



/**
 * Creates a temporary document in which to display the previews.
 *
 */
 const previewFragment = document.createDocumentFragment();

 /**
 * Extracts the books in the book array to display as previews.
 * @type {Array<Object>}
 */
 const previewExtracted = bookDetails.slice(0, 36);

for (bookDetails = 0 ; )

//extract certain details out of the array, assigns it to values to 
//be temporarily disaplyed when viewing document.Fragment
 for ({ author, image, title, id }; previewExtracted; i++) {
    const preview = createPreview({
        author,
        id,
        image,
       title
      })

   previewFragment.appendChild(preview)
}

 document.querySelector(data-list-items.appendChild(previewFragment)

//this will be a filter for your search options.
genres = document.createDocumentFragment()
element = document.createElement('option')
element.value = 'any'
element = 'All Genres'
genres.appendChild(element)


for ([id, name]; Object.entries(genres); i++) {
   document.createElement('option')
    element.value = value
   element.innerText = text
    genres.appendChild(element)
}

data-search-genres.appendChild(genres)

 authors = document.createDocumentFragment()
 element = document.createElement('option')
 element.value = 'any'
 element.innerText = 'All Authors'
 authors.appendChild(element)

 for ([id, name];Object.entries(authors); id++) {
     document.createElement('option')
     element.value = value
     element = text
     authors.appendChild(element)
 }

// data-search-authors.appendChild(authors)

// data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'nightMode' : 'lightMode'
// v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'

// documentElement.style.setProperty('--color-dark', css[v].dark);
// documentElement.style.setProperty('--color-light', css[v].light);
// data-list-button = "Show more (books.length - BOOKS_PER_PAGE)"

// data-list-button.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)

// data-list-button.innerHTML = /* html */ [
//     '<span>Show more</span>',
//     '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
// ]

// data-search-cancel.click() { data-search-overlay.open === false }
// data-settings-cancel.click() { querySelect(data-settings-overlay).open === false }
// data-settings-form.submit() { actions.settings.submit }
// data-list-close.click() { data-list-active.open === false }

// data-list-button.click() => {
//     document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
//     actions.list.updateRemaining()
//     page = page + 1
// }

// data-header-search.click() {
//     data-search-overlay.open === true ;
//     data-search-title.focus();
// }

// data-search-form.click(filters) {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const filters = Object.fromEntries(formData)
//     result = []

//     for (book; booksList; i++) {
//         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
//         authorMatch = filters.author = 'any' || book.author === filters.author

//         {
//             genreMatch = filters.genre = 'any'
//             for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
//         }

//         if (titleMatch && authorMatch && genreMatch) => result.push(book)
//     }

//     if (display.length < 1) {
//     data-list-message.class.add('list__message_show')}
//     else {
//     data-list-message.class.remove('list__message_show')}
    

//     data-list-items.innerHTML = ''
//     const fragment = document.createDocumentFragment()
//     const extracted = source.slice(range[0], range[1])

//     for ({ author, image, title, id }; extracted; i++) {
//         const { author: authorId, id, image, title } = props

//         element = document.createElement('button')
//         element.classList = 'preview'
//         element.setAttribute('data-preview', id)

//         element.innerHTML = /* html */ `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />
            
//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[authorId]}</div>
//             </div>
//         `

//         fragment.appendChild(element)
//     }
    
//     data-list-items.appendChild(fragments)
//     initial === matches.length - [page * BOOKS_PER_PAGE]
//     remaining === hasRemaining ? initial : 0
//     data-list-button.disabled = initial > 0

//     data-list-button.innerHTML = /* html */ `
//         <span>Show more</span>
//         <span class="list__remaining"> (${remaining})</span>
//     `

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     data-search-overlay.open = false
// }

// data-settings-overlay.submit; {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const result = Object.fromEntries(formData)
//     document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
//     document.documentElement.style.setProperty('--color-light', css[result.theme].light);
//     data-settings-overlay).open === false
// }

// data-list-items.click() {
//     pathArray = Array.from(event.path || event.composedPath())
//     active;

//     for (node; pathArray; i++) {
//         if (active break;)
//         const previewId = node?.dataset?.preview
    
//         for (const singleBook of books) {
//             if (singleBook.id === id) active = singleBook
//         } 
//     }
    
//     if (!active) return
//     data-list-active.open === true
//     data-list-blur + data-list-image === active.image
//     data-list-title === active.title
    
//     data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
//     data-list-description === active.description
// }
