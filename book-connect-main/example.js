/**
 * Represents a list of books.
 * @type {Array<Object>}
 */
const matches = books;

/**
 * The current page number.
 * @type {number}
 */
const page = 1;

/**
 * Checks if the 'books' variable is an array and not empty.
 * @throws {Error} Throws an error if 'books' is not an array or is empty.
 */
if (!books || !Array.isArray(books)) throw new Error('Source required');

/**
 * Checks if the 'range' variable is an array with at least two numbers.
 * @throws {Error} Throws an error if 'range' is not an array or has fewer than two elements.
 */
if (!range || range.length < 2) throw new Error('Range must be an array with two numbers');

/**
 * Represents colors in light mode.
 * @type {Object}
 */
const lightMode = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
};

/**
 * Represents colors in dark mode.
 * @type {Object}
 */
const darkMode = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
};

/**
 * A document fragment to hold book previews.
 * @type {DocumentFragment}
 */
const previewFragment = document.createDocumentFragment();

/**
 * Extracted books to display as previews.
 * @type {Array<Object>}
 */
const previewExtracted = books.slice(0, 36);

/**
 * Loop through the extracted books and create previews.
 */
for (const { author, image, title, id } of previewExtracted) {
    /**
     * Create a book preview element.
     * @type {HTMLElement}
     */
    const preview = createPreview({
        author,
        id,
        image,
        title,
    });

    previewFragment.appendChild(preview);
}

data-list-items.appendChild(previewFragment);

/**
 * A document fragment to hold genre options.
 * @type {DocumentFragment}
 */
const genres = document.createDocumentFragment();

/**
 * An option element for "All Genres".
 * @type {HTMLOptionElement}
 */
let element = document.createElement('option');
element.value = 'any';
element.innerText = 'All Genres';
genres.appendChild(element);

/**
 * Loop through genres and create option elements.
 */
for (const [id, name] of Object.entries(genres)) {
    element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    genres.appendChild(element);
}

data-search-genres.appendChild(genres);

/**
 * A document fragment to hold author options.
 * @type {DocumentFragment}
 */
const authors = document.createDocumentFragment();

/**
 * An option element for "All Authors".
 * @type {HTMLOptionElement}
 */
element = document.createElement('option');
element.value = 'any';
element.innerText = 'All Authors';
authors.appendChild(element);

/**
 * Loop through authors and create option elements.
 */
for (const [id, name] of Object.entries(authors)) {
    element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    authors.appendChild(element);
}

data-search-authors.appendChild(authors);

/**
 * Determine the theme based on user preferences.
 * @type {string}
 */
const theme = data-settings-theme.value === window.matchMedia('(prefers-color-scheme: dark)').matches ? 'nightMode' : 'lightMode';

/**
 * Determine the value 'v' based on the theme.
 * @type {string}
 */
const v = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';

document.documentElement.style.setProperty('--color-dark', theme === 'nightMode' ? darkMode.dark : lightMode.dark);
document.documentElement.style.setProperty('--color-light', theme === 'nightMode' ? darkMode.light : lightMode.light);

/**
 * Button element to show more books.
 * @type {HTMLButtonElement}
 */
const data-list-button = document.querySelector('[data-list-button]');

/**
 * Update the button text and disable it if there are no more books to show.
 */
data-list-button.textContent = `Show more (${matches.length - page * BOOKS_PER_PAGE > 0 ? matches.length - page * BOOKS_PER_PAGE : 0})`;

/**
 * Add a click event listener to the "Show more" button.
 */
data-list-button.addEventListener('click', () => {
    document.querySelector('[data-list-items]').appendChild(createPreviewsFragment(matches, page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE));
    actions.list.updateRemaining();
    page = page + 1;
});

/**
 * Handle click event for the header search.
 */
data-header-search.addEventListener('click', () => {
    data-search-overlay.open = true;
    data-search-title.focus();
});

/**
 * Handle click event for the search form.
 * @param {Event} event - The click event.
 */
data-search-form.addEventListener('click', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = [];

    /**
     * Loop through booksList and apply filters.
     */
    for (const book of booksList) {
        const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase());
        const authorMatch = filters.author === 'any' || book.author === filters.author;
        let genreMatch = filters.genre === 'any';

        for (const genre of book.genres) {
            if (genre === filters.genre) {
                genreMatch = true;
                break;
            }
        }

        if (titleMatch && authorMatch && genreMatch) {
            result.push(book);
        }
    }

    /**
     * Toggle the message class based on the result length.
     */
    data-list-message.classList.toggle('list__message_show', result.length < 1);
    data-list-items.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const extracted = source.slice(range[0], range[1]);

    /**
     * Loop through extracted books and create preview elements.
     */
    for (const { author, image, title, id } of extracted) {
        const element = document.createElement('button');
        element.classList = 'preview';
        element.setAttribute('data-preview', id);

        element.innerHTML = /* html */ `
            <img class="preview__image" src="${image}" />
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `;

        fragment.appendChild(element);
    }

    data-list-items.appendChild(fragment);
    const initial = matches.length - page * BOOKS_PER_PAGE;
    const remaining = hasRemaining ? initial : 0;
    data-list-button.disabled = initial <= 0;
    data-list-button.innerHTML = `<span>Show more</span><span class="list__remaining"> (${remaining})</span>`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    data-search-overlay.open = false;
});