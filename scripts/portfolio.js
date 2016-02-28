$('#about').hide();
$('#skills').hide();
$('#contact').hide();
$('#projects-section').hide();

$('#my-about').on('click', function() {
  $('#skills').hide();
  $('#contact').hide();
  $('#projects-section').hide();
  $('#about').fadeIn();
});

$('#my-skills').on('click', function() {
  $('#about').hide();
  $('#contact').hide();
  $('#projects-section').hide();
  $('#skills').fadeIn();
});

$('#my-contact').on('click', function() {
  $('#about').hide();
  $('#skills').hide();
  $('#projects-section').hide();
  $('#contact').fadeIn();
});

$('#gitProjects').on('click', function() {
  $('#about').hide();
  $('#skills').hide();
  $('#contact').hide();
  $('#projects-section').fadeIn();
});

var projects = [];

function Project (opts) {
  this.name = opts.name;
  this.body = opts.body;
}

Project.prototype.toHtml = function () {
  var $newProject = $('.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h3').text(this.name);
  $newProject.find('.project-content').text(this.body);
  return $newProject;
}

projectsData.forEach(function(ele) {
  projects.push(new Project(ele));
});
projects.forEach(function(a) {
  $('#projects-section').append(a.toHtml());
});
