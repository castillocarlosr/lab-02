'use strict';

//Constructor
function Horn(hornObject){
  this.title = hornObject.title;
  this.image_url = hornObject.image_url;
  this.discription = hornObject.discription;
  this.keyword = hornObject.keywords;
  this.horns = hornObject.horns;

  allHorn.push(this);
}

const allHorn = [];

Horn.prototype.render = function () {
  $('main').append('<div class="clone"></div>');
  let $hornContainer = $('div[class="clone"]')
  console.log($hornContainer);


  let $clonedHorn = $('#photo-template').html();

  $hornContainer.html($clonedHorn);

  $hornContainer.find('h2').text(this.title);
  $hornContainer.find('img').attr('src', this.image_url);
  $hornContainer.find('p').text(this.discription);
  $hornContainer.find('p').text(this.keyword);
  $hornContainer.find('p').text(this.horns);


  $hornContainer.attr('class', '');
};

let readJSON = function(){
  $.getJSON('./page-1.json', data => {
    data.forEach(balloon => {

      new Horn(balloon);

    })
  }).then(renderAllHorn)
}



function renderAllHorn () {
  allHorn .forEach(horn => {
    horn.render();
  })
}

readJSON();

