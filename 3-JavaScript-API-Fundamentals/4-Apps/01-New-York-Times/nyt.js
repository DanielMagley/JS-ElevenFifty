const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
// const key = 'd2de570026f54030b0812b407b886c94';
let url;

// Search Form
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//Results Nav
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//Results Section
const section = document.querySelector('section');

//Display
nav.style.display = 'none';
let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;

//Event Listeners
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

//FULL Assembled URL
function fetchResults(e) {
    e.preventDefault();
    console.log(e);

    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    
if(startDate.value !== '') {
    // console.log(startDate.value)
    url += '&begin_date=' + startDate.value;
};

if(endDate.value !== '') {
    url += '&end_date=' + endDate.value;
};


fetch(url)
    .then(function(result) {
        return result.json();
    }).then(function(json) {
        displayResults(json);
    })
}
function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    console.log("DisplayResults", json);
    let articles = json.response.docs;

        if(articles.length === 10) {
             nav.style.display = 'block';
        } else if (articles.length < 10) {
            nextBtn.style.visibility = 'hidden';
        } else {
            return;
         }
       
     

    if(articles.length === 0) {
        // console.log("No results");
    } else {
        for (let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');


            let current = articles[i];
            // console.log("Current:", current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            para.textContent = 'Keywords: ';

            for(let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }

            if(current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            clearfix.setAttribute('class', 'clearfix');
        

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
            // console.log(i);
        }
    }
   
    
};

function nextPage(e) {
    pageNumber++;
    fetchResults(e);
    // console.log("Page Number:", pageNumber);
};

function previousPage() {
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
};

