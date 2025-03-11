// Sample book data - Harry Potter series
// Book Collection Data
const books = [
    // Harry Potter Series (7 books)
    {
        id: 1,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 1997,
        isbn: "978-0747532699",
        description: "Eleven-year-old Harry Potter discovers he's a wizard and begins an adventure at Hogwarts School of Witchcraft and Wizardry, learning about his magical heritage and facing dangerous secrets.",
        coverImage: "images/stone.jpg",
        inStock: true,
        pages: 223,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349100267915837552/Harry_Potter_and_the_Sorcerers_Stone_by_J._K_Rowling_Book_1.pdf?ex=67d1df08&is=67d08d88&hm=779f3bc4dbc8eb70423ce64082340250c79426877c333933e24e6f4b7ff4eec4&"
    },
    {
        id: 2,
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 1998,
        isbn: "978-0747538486",
        description: "In his second year at Hogwarts, Harry investigates a mysterious message about the Chamber of Secrets being opened, endangering students with a hidden monster inside the school.",
        coverImage: "images/chamber.jpg",
        inStock: true,
        pages: 251,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Chamber_of_Secrets#:~:text=The%20plot%20follows%20Harry's,come%20from%20all%2Dmagical%20families.",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1348807762389499954/Harry_Potter_and_the_Chamber_of_Secrets_by_Rowling_J._K_Book_2.pdf?ex=67d0ce9e&is=67cf7d1e&hm=d4099ea4aa327f2d62aec339d243dbad82fccda7735b63706e95f53913a13752&"
    },
    {
        id: 3,
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 1999,
        isbn: "978-0747546290",
        description: "Harry's third year at Hogwarts is threatened by escaped murderer Sirius Black. As sinister prison guards patrol the school, Harry uncovers shocking truths about his past.",
        coverImage: "images/prison.jpg",
        inStock: true,
        pages: 317,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Prisoner_of_Azkaban",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349100268603707392/Harry_Potter_and_the_Prisoner_of_Azkaban_by_Rowling_J._K_Book_3.pdf?ex=67d1df09&is=67d08d89&hm=a5efae53971d01b3e3b1b2c97108e4c2783a637fa92b62fab0254c1e85f6bded&"
    },
    {
        id: 4,
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 2000,
        isbn: "978-0747550990",
        description: "Harry mysteriously enters the dangerous Triwizard Tournament meant for older students. Facing dragons and dark wizards, he discovers a plot threatening his life and the wizarding world.",
        coverImage: "images/goblet.jpg",
        inStock: true,
        pages: 636,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Goblet_of_Fire",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349100267072655423/Harry_Potter_and_the_Goblet_of_Fire_J.K._Rowling_Book_4.pdf?ex=67d1df08&is=67d08d88&hm=e547944f025278cf752d262e842d6fd6e3253788b1e6aca6ca038058c56da921&"
    },
    {
        id: 5,
        title: "Harry Potter and the Order of the Phoenix",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 2003,
        isbn: "978-0747551003",
        description: "As Voldemort returns, Harry joins a secret order fighting dark forces. With the Ministry denying danger and Hogwarts under siege, Harry must learn to protect his mind.",
        coverImage: "images/pheonix.jpg",
        inStock: true,
        pages: 766,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349100268217958421/Harry_Potter_and_the_Order_of_the_Phoenix_J._K._Rowling_Book_5.pdf?ex=67d1df09&is=67d08d89&hm=d71050182ae7d68002d229fdb03f137663556a871cf2d8f0a381fad2d849fbf2&"
    },
    {
        id: 6,
        title: "Harry Potter and the Half-Blood Prince",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 2005,
        isbn: "978-0747581086",
        description: "Harry works with Dumbledore to uncover Voldemort's secrets while suspecting Malfoy of sinister activities. A mysterious potions book and revelations about the past prepare Harry for his destiny.",
        coverImage: "images/prince.jpg",
        inStock: true,
        pages: 607,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Half-Blood_Prince",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349100268960088254/Harry_Potter_and_the_Half-Blood_Prince_J.K._Rowling_Book_6.pdf?ex=67d1df09&is=67d08d89&hm=6f27ff6a06ee3fe35d4196b12f2fdb598d080b8457548e10c57a71cdf4956b5e&"
    },
    {
        id: 7,
        title: "Harry Potter and the Deathly Hallows",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 2007,
        isbn: "978-0747591054",
        description: "In the final battle against Voldemort, Harry must find and destroy the remaining Horcruxes. The quest for three legendary objects—the Deathly Hallows—becomes crucial to defeating his enemy.",
        coverImage: "images/deathly.jpg",
        inStock: true,
        pages: 607,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349100267483828305/Harry_Potter_and_the_Deathly_Hallows_Rowling_J._K._Book_7.pdf?ex=67d1df08&is=67d08d88&hm=10a16a39053b46c60fe75fa661cf532e212925d527f58faadd8be35f116c7d87&"
    },
    
    // Educational Books (3 books)
    {
        id: 8,
        title: "The Art of Teaching Children",
        author: "Phillip Done",
        genre: "Education, Teaching Methods, Child Development",
        publishYear: 2023,
        isbn: "978-1982165666",
        description: "Award-winning teacher Phillip Done shares insights from his thirty-year career, revealing the wonder and challenges of teaching children through practical wisdom and innovative strategies.",
        coverImage: "images/art.jpg",
        inStock: true,
        pages: 352,
        publisher: "Avid Reader Press",
        language: "English",
        dimensions: "6 x 9 inches",
        detailsUrl: "harry-potter-philosophers-stone-details.html",
        downloadUrl: "downloads/harry-potter-1.pdf"
    },
    {
        id: 9,
        title: "Make It Stick: The Science of Successful Learning",
        author: "Peter C. Brown",
        genre: "Education, Psychology, Learning",
        publishYear: 2014,
        isbn: "978-0674729018",
        description: "Research-based techniques for effective learning that challenge common study habits. Offers practical strategies for students, teachers, and lifelong learners to improve retention and application of knowledge.",
        coverImage: "images/stick.jpg",
        inStock: true,
        pages: 336,
        publisher: "Harvard University Press",
        language: "English",
        dimensions: "5.5 x 8.2 inches",
        detailsUrl: "harry-potter-philosophers-stone-details.html",
        downloadUrl: "downloads/harry-potter-1.pdf"
    },
    {
        id: 10,
        title: "Mindset: The New Psychology of Success",
        author: "Carol S. Dweck",
        genre: "Education, Psychology, Self-Help",
        publishYear: 2006,
        isbn: "978-0345472328",
        description: "Stanford psychologist Carol Dweck reveals how our mindset about abilities dramatically influences success. Explains how the growth mindset—believing abilities can develop—transforms achievement and motivation across various domains.",
        coverImage: "images/Mindset.jfif",
        inStock: true,
        pages: 288,
        publisher: "Random House",
        language: "English",
        dimensions: "5.2 x 8 inches",
        detailsUrl: "harry-potter-philosophers-stone-details.html",
        downloadUrl: "downloads/harry-potter-1.pdf"
    },
    
    // Teenage Drama Books (3 books)
    {
        id: 11,
        title: "The Fault in Our Stars",
        author: "John Green",
        genre: "Young Adult, Romance, Drama",
        publishYear: 2012,
        isbn: "978-0525478812",
        description: "Terminal cancer patient Hazel's life changes when she meets Augustus at a support group. Their love story unfolds as they face the tragic realities of being alive and in love.",
        coverImage: "images/fault.jpg",
        inStock: true,
        pages: 313,
        publisher: "Dutton Books",
        language: "English",
        dimensions: "5.5 x 8.2 inches",
        detailsUrl: "harry-potter-philosophers-stone-details.html",
        downloadUrl: "downloads/harry-potter-1.pdf"
    },
    {
        id: 12,
        title: "Thirteen Reasons Why",
        author: "Jay Asher",
        genre: "Young Adult, Contemporary, Drama",
        publishYear: 2007,
        isbn: "978-1595141712",
        description: "Clay receives cassette tapes recorded by Hannah Baker, who committed suicide. The tapes explain thirteen reasons for her decision, with Clay being one of them..",
        coverImage: "images/thirteen.webp",
        inStock: true,
        pages: 288,
        publisher: "Razorbill",
        language: "English",
        dimensions: "5.5 x 8.2 inches",
        detailsUrl: "harry-potter-philosophers-stone-details.html",
        downloadUrl: "downloads/harry-potter-1.pdf"
    },
    {
        id: 13,
        title: "Looking for Alaska",
        author: "John Green",
        genre: "Young Adult, Coming of Age, Drama",
        publishYear: 2005,
        isbn: "978-0142402511",
        description: "Miles Pudge Halter seeks excitement at boarding school, where he meets the fascinating, self-destructive Alaska Young. Their friendship leads to adventure, love, and profound questions about life.",
        coverImage: "images/alaska.jfif",
        inStock: true,
        pages: 221,
        publisher: "Dutton Books",
        language: "English",
        dimensions: "5.5 x 8.2 inches",
        detailsUrl: "harry-potter-philosophers-stone-details.html",
        downloadUrl: "downloads/harry-potter-1.pdf"
    },
    
    // Comedy Books (4 books)
    {
        id: 14,
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction, Comedy, Adventure",
        publishYear: 1979,
        isbn: "978-0345391803",
        description: "Just before Earth's destruction for a galactic freeway, Arthur Dent is rescued by alien friend Ford Prefect. Their cosmic journey introduces bizarre characters and absurd interstellar adventures.",
        coverImage: "images/hitchhiker.jfif",
        inStock: true,
        pages: 224,
        publisher: "Del Rey",
        language: "English",
        dimensions: "5.5 x 8.2 inches",
        detailsUrl: "harry-potter-philosophers-stone-details.html",
        downloadUrl: "downloads/harry-potter-1.pdf"
    },
    {
        id: 15,
        title: "Good Omens",
        author: "Terry Pratchett & Neil Gaiman",
        genre: "Fantasy, Comedy, Supernatural",
        publishYear: 1990,
        isbn: "978-0060853983",
        description: "Angel Aziraphale and demon Crowley team up to prevent the apocalypse they've grown fond of Earth. As prophecies unfold and Armageddon approaches, they search for the misplaced Antichrist..",
        coverImage: "images/omens.jpg",
        inStock: true,
        pages: 412,
        publisher: "William Morrow",
        language: "English",
        dimensions: "5.3 x 8 inches",
        detailsUrl: "harry-potter-philosophers-stone-details.html",
        downloadUrl: "downloads/harry-potter-1.pdf"
    },
    {
        id: 16,
        title: "Bossypants",
        author: "Tina Fey",
        genre: "Biography, Humor, Memoir",
        publishYear: 2011,
        isbn: "978-0316056861",
        description: "Tina Fey's hilarious memoir chronicles her journey from awkward girl to acclaimed comedian. She shares stories about career, motherhood, and breaking barriers in the male-dominated comedy world.",
        coverImage: "images/bossypants.jpg",
        inStock: true,
        pages: 275,
        publisher: "Little, Brown and Company",
        language: "English",
        dimensions: "5.5 x 8.2 inches",
        detailsUrl: "harry-potter-philosophers-stone-details.html",
        downloadUrl: "downloads/harry-potter-1.pdf"
    },
    {
        id: 17,
        title: "Me Talk Pretty One Day",
        author: "David Sedaris",
        genre: "Memoir, Humor, Essays",
        publishYear: 2000,
        isbn: "978-0316776967",
        description: "David Sedaris' humorous essays detail his experiences moving to Paris and struggling to learn French, alongside other awkward life moments told with his signature self-deprecating wit.",
        coverImage: "images/me.jpg",
        inStock: true,
        pages: 272,
        publisher: "Back Bay Books",
        language: "English",
        dimensions: "5.5 x 8.2 inches",
        detailsUrl: "harry-potter-philosophers-stone-details.html",
        downloadUrl: "downloads/harry-potter-1.pdf"
    },
    
    // Mystery Books (3 books)
    {
        id: 18,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "Mystery, Thriller, Psychological",
        publishYear: 2019,
        isbn: "978-1250301697",
        description: "After shooting her husband five times, famous artist Alicia Berenson never speaks again. Psychotherapist Theo Faber becomes obsessed with uncovering the truth behind her silence and the crime.",
        coverImage: "images/silent.jpg",
        inStock: true,
        pages: 336,
        publisher: "Celadon Books",
        language: "English",
        dimensions: "6.4 x 9.5 inches",
        detailsUrl: "harry-potter-philosophers-stone-details.html",
        downloadUrl: "downloads/harry-potter-1.pdf"
    },
    {
        id: 19,
        title: "Gone Girl",
        author: "Gillian Flynn",
        genre: "Mystery, Thriller, Suspense",
        publishYear: 2012,
        isbn: "978-0307588371",
        description: "When beautiful Amy Dunne disappears on her fifth wedding anniversary, husband Nick becomes the prime suspect. Alternating perspectives reveal shocking secrets and psychological manipulation in their marriage.",
        coverImage: "images/gone.jpg",
        inStock: true,
        pages: 432,
        publisher: "Crown Publishing Group",
        language: "English",
        dimensions: "6.1 x 9.3 inches",
        detailsUrl: "harry-potter-philosophers-stone-details.html",
        downloadUrl: "downloads/harry-potter-1.pdf"
    },
    {
        id: 20,
        title: "The Woman in the Window",
        author: "A.J. Finn",
        genre: "Mystery, Thriller, Suspense",
        publishYear: 2018,
        isbn: "978-0062678416",
        description: "Agoraphobic Anna Fox spies on neighbors from her New York home while drinking wine and watching old movies. When she witnesses a disturbing act at the Russells' house, her fragile world unravels.",
        coverImage: "images/woman.jpg",
        inStock: true,
        pages: 448,
        publisher: "William Morrow",
        language: "English",
        dimensions: "6 x 9 inches",
        detailsUrl: "harry-potter-philosophers-stone-details.html",
        downloadUrl: "downloads/harry-potter-1.pdf"
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the site
    loadFeaturedBooks();
    setupSearchFunctionality();
    setupTabFunctionality();
    checkForBookDetailView();
});

// Load featured books on the homepage
function loadFeaturedBooks() {
    const featuredBooksContainer = document.querySelector('.featured-books .book-grid');
    if (!featuredBooksContainer) return;
    
    // Show all Harry Potter books in the featured section
    books.forEach(book => {
        featuredBooksContainer.appendChild(createBookCard(book));
    });
}


// Create a book card element with the new structure and download button
function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    
    // Use custom URLs if they exist, otherwise use the default format
    const detailsUrl = book.detailsUrl || `book-details.html?id=${book.id}`;
    const downloadUrl = book.downloadUrl || `downloads/${book.id}.pdf`;
    
    bookCard.innerHTML = `
        <div class="book-cover">
            <img src="${book.coverImage}" alt="${book.title}">
            <div class="book-description">
                <p>${book.description}</p>
            </div>
        </div>
        <div class="book-info">
            <h3>${book.title}</h3>
            <p class="author">${book.author}</p>
            <p class="genre">Genre: ${book.genre}</p>
            <div class="book-actions">
                <a href="${detailsUrl}" class="view-details" target="_blank">View Details</a>
                <a href="${downloadUrl}" class="download-book" target="_blank"><i class="fas fa-download"></i> Download</a>
            </div>
        </div>
    `;
    
    return bookCard;
}
// Setup search functionality
function setupSearchFunctionality() {
    const searchForm = document.getElementById('search-form');
    if (!searchForm) return;
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const categoryFilter = document.getElementById('category-filter').value;
        
        // Perform search
        const searchResults = books.filter(book => {
            // Match search text
            const matchesSearch = searchInput === '' || 
                                  book.title.toLowerCase().includes(searchInput) || 
                                  book.author.toLowerCase().includes(searchInput) ||
                                  book.isbn.includes(searchInput);
            
            // Match category if selected
            const matchesCategory = categoryFilter === '' || 
                                   book.genre.toLowerCase().includes(categoryFilter.toLowerCase());
            
            return matchesSearch && matchesCategory;
        });
        
        // Display search results
        displaySearchResults(searchResults);
    });
}

// Display search results
function displaySearchResults(results) {
    const featuredSection = document.querySelector('.featured-books');
    if (!featuredSection) return;
    
    // Change section title
    const sectionTitle = featuredSection.querySelector('h2');
    sectionTitle.textContent = `Search Results (${results.length} books found)`;
    
    // Replace content
    const bookGrid = featuredSection.querySelector('.book-grid');
    bookGrid.innerHTML = '';
    
    if (results.length === 0) {
        const noResults = document.createElement('p');
        noResults.textContent = 'No books match your search criteria. Please try again.';
        bookGrid.appendChild(noResults);
    } else {
        results.forEach(book => {
            bookGrid.appendChild(createBookCard(book));
        });
    }
    
    // Scroll to results
    featuredSection.scrollIntoView({ behavior: 'smooth' });
}

// Setup tab functionality for book details
function setupTabFunctionality() {
    const tabButtons = document.querySelectorAll('.tab-button');
    if (tabButtons.length === 0) return;
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and content
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// Check if we're on a book detail page and load the appropriate book
function checkForBookDetailView() {
    const detailsContainer = document.querySelector('.book-details-container');
    if (!detailsContainer || detailsContainer.style.display === 'none') return;
    
    // Get book ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = parseInt(urlParams.get('id'));
    
    if (bookId) {
        const book = books.find(b => b.id === bookId);
        if (book) {
            displayBookDetails(book);
        }
    }
}

// Display book details on the book details page
function displayBookDetails(book) {
    const detailsContainer = document.querySelector('.book-details-container');
    if (!detailsContainer) return;
    
    // Display the container
    detailsContainer.style.display = 'block';
    
    // Set book title
    document.querySelector('.book-title').textContent = book.title;
    
    // Set book author
    document.querySelector('.book-author').innerHTML = `By <a href="author.html?name=${encodeURIComponent(book.author)}">${book.author}</a>`;
    
    // Set book cover
    document.querySelector('.book-cover-large img').src = book.coverImage;
    document.querySelector('.book-cover-large img').alt = book.title;
    
    // Set metadata
    document.querySelector('.book-genre').textContent = book.genre;
    document.querySelector('.book-publish-date').textContent = `Published: ${book.publishYear}`;
    document.querySelector('.book-isbn').textContent = `ISBN: ${book.isbn}`;
    
    // Set availability
    const availabilityElement = document.querySelector('.book-availability .status');
    if (book.inStock) {
        availabilityElement.textContent = 'In Stock';
        availabilityElement.className = 'status available';
    } else {
        availabilityElement.textContent = 'Out of Stock';
        availabilityElement.className = 'status unavailable';
    }
    
    // Set description
    document.querySelector('.book-description p').textContent = book.description;
    
    // Set additional details
    const detailsList = document.querySelector('#details-tab ul');
    detailsList.innerHTML = `
        <li><strong>Number of Pages:</strong> ${book.pages}</li>
        <li><strong>Publisher:</strong> ${book.publisher}</li>
        <li><strong>Language:</strong> ${book.language}</li>
        <li><strong>Dimensions:</strong> ${book.dimensions}</li>
    `;
    
    // Load similar books (in this case, other Harry Potter books)
    loadSimilarBooks(book);
}

// Load similar books in the book details page
function loadSimilarBooks(book) {
    const similarBooksContainer = document.querySelector('.similar-books-grid');
    if (!similarBooksContainer) return;
    
    // Find other Harry Potter books, excluding the current book
    const similarBooks = books.filter(b => b.id !== book.id);
    
    // Display up to 3 similar books
    similarBooksContainer.innerHTML = '';
    similarBooks.slice(0, 3).forEach(similarBook => {
        similarBooksContainer.appendChild(createBookCard(similarBook));
    });
}


// Scroll event listener for header and sections animation
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollTop = document.querySelector('.scroll-top');
    const sections = document.querySelectorAll('section');
    
    // Change header style on scroll
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        scrollTop.classList.add('visible');
    } else {
        header.classList.remove('scrolled');
        scrollTop.classList.remove('visible');
    }
    
    // Animate sections on scroll
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Scroll to top button
const scrollTopButton = document.querySelector('.scroll-top');
if (scrollTopButton) {
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}