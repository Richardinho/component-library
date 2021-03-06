
let totalResults;
let currentOffset;
const root = null;
const router = new Navigo(root);

const listPage = ({ results, meta: { totalResults }}) => (p, query) => {
  const params = new URLSearchParams(query);

  const index = params.get('index') || 0;
  const offset = params.get('offset') || 0;

  listPageState.topAnchor = {
    index, offset,
  };

  const items = createItemsArray(results, totalResults, index);
};

let listPageState = {
  items: [],
  topAnchor: {},
  bottomAnchor: {},
};

initialise();

function initialise() {
  const initialData = window.data;
  delete window.data;

  router.on('/emperors', listPage(initialData), {
    leave: () => {
      window.removeEventListener('scroll', listPageScrollHandler);
    }
  }).resolve();

  router.on('/emperor/:id', detailPage, {});

  router.on('*', homePage, {});
}


function detailPage() {
  console.log('detail page');
}

function homePage() {
  console.log('home page');
}

function listPageScrollHandler() {
  console.log('scrolllll');
  //const topAnchor = calculateTopAnchor();
  //const bottomAnchor = calculateBottomAnchor();
  //const activeItems = calculateActiveItems(topAnchor, bottomAnchor);
  //removeInactiveItems();
  //createNodes();
  //calculateHeightOfActiveItems(activeItems);
  //calculateNewScrollPosition();
  //positionItems(activeItems);
  //setSentinel();
  //setScroll();
  //fetchData();
}

function calculateAnchor(initialAnchor, scroll) {
  if (scroll = 0) {
    return initialAnchor;
  }
}


function fetchData(offset) {
  const url = 'http://localhost:4000/api/emperors?' + 
    'dynasty=all&yearFrom=-30&yearTo=500&sortOrder=succession&offset=' + offset;
  return fetch(url).then(response => { return response.json();});
}

function renderItem(data) {
  const el = document.createElement('div');
  el.innerHTML = renderItemAsString(data);
  return el.firstElementChild;
}

function renderItemAsString(data) { return (function anonymous() {
var r=[];r.push("<li class=\"card\">  <img    class=\"card-image\"    src=\"https://white-label-elements.herokuapp.com/images/medium/");r.push( this.id );r.push(".jpg\">    <h1 class=\"card-header\">");r.push( this.name );r.push("</h1>    <p>");r.push( this.from );r.push("</p>    <p>");r.push( this.to );r.push("</p>    <p>");r.push( this.summary );r.push("</p>    <p>");r.push( this.dynasty );r.push("</p></li>");return r.join("");
}).apply(data); };


function resizeHandler() {
  console.log('on resize');
}


function calculateTopAnchor(initialScroll, scroll) {
  const anchor = calculateAnchor(initialScroll, scroll);
  return anchor;
}


function calculateBottomAnchor() {

}

function calculateActiveItems() {

}

function removeInactiveItems() {

}

function createNodes() {
}

function calculateHeightOfActiveItems() {
}


function positionItems() {

}

function setSentinel() {

}

function setScroll() {

}



