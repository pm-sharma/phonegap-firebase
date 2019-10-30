// DOM elements
const titleList = document.querySelector('.guides');

// setup guides
const setupTitles = (data) => {

  if (data.length) {
  let html = '';
  data.forEach(doc => {
    const title = doc.data();
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> ${title.title} </div>
        <div class="collapsible-body white"> ${title.content} </div>
      </li>
    `;
    html += li;
  });
  titleList.innerHTML = html}

else{
  titleList.innerHTML = '<h5 class="center-align">Login to view all title</h5>';

}

};



document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });