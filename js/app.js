'use strict';

const allHorns = [];

//Constructor
function Horn(hornObject){
  this.title = hornObject.title;
  this.image_url = hornObject.image_url;
  this.description = hornObject.description;
  this.keyword = hornObject.keyword;
  this.horns = hornObject.horns;

  allHorns.push(this);
}

Horn.prototype.render = function() {
  $('main').append('<div class = "clone" ></div>');
  let $hornContainer = $('div.clone');
  // console.log($hornContainer);
  let $clonedHorn = $('#photo-template').html();

  $hornContainer.html($clonedHorn);

  $hornContainer.find('h2').text(this.title);
  $hornContainer.find('img').attr('src', this.image_url);
  $hornContainer.find('p').text(this.description);
  $hornContainer.attr('class', this.keyword);
  // $hornContainer.attr('class', '');
};

let readJson = ()=>{
  $.getJSON('./data/page-1.json', data => {
    data.forEach(element => {
      new Horn(element);
    })
  }) .then(renderAllHorns);

}

const renderAllHorns = () => {
  allHorns.forEach(element => {
    element.render();
  })
  addKeyword(allHorns);

}

readJson();

function addKeyword(arr){
  const keywords = [];

  arr.forEach(element =>{
    keywords.push(element.keyword);
    $('select').append('<option value ='+element.keyword+ '>'+element.keyword+'</option>');
  })
}

$('.select').on('change', showFilter);

function showFilter (event){
  event.preventDefault();
  $('div').hide();
  var selectedValue = $('option:selected').val();

  allHorns.forEach(element => {
    if(selectedValue === element.keyword){
      $(`div.${selectedValue}`).show();
    }
  })
}
