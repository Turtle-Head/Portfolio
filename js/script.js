// Class for project grid
function Project(name, url, pic, git) {
  var self = this;
  self.name = name;
  self.url = ko.observable(url);
  self.pic = ko.observable(pic);
  self.git = ko.observable(git);
}

// ViewModel for the screen
function ProjectViewModel() {
  var self = this;

  self.projects = ko.observableArray([
    new Project('Portfolio', 'http://turtle-head.github.io/Portfolio', 'https://i.gyazo.com/732b56a2391f1a15b60fae44312cb3f6.png', 'https://github.com/Turtle-Head/Portfolio'),
    new Project('Bugged', 'http://turtle-head.github.io/Bugged/', 'img/Bugged.png', 'https://github.com/Turtle-Head/Bugged'),
    new Project('Unknown Crusade Killboard', 'http://turtle-head.github.io/Killboard/', 'http://i.gyazo.com/f0b803fdc0df3565dc04b6d593490738.png', 'https://github.com/Turtle-Head/Killboard'),
    new Project('Cat Clicker', 'http://turtle-head.github.io/CatClicker/', 'http://i.gyazo.com/2698f87f89f83b0e581445550ba96768.png', 'https://github.com/Turtle-Head/CatClicker'),
    new Project('Skel\'s Art Studio', 'http://skelsart.ca', 'https://i.gyazo.com/c93190753bb354d30549db3a9e923079.jpg', 'https://github.com/Turtle-Head/artshow-demo'),
    new Project('Gelp: Neighborhood Map Project', 'http://turtle-head.github.io/Project5/', 'https://i.gyazo.com/3fb01235958cd5ce7983e1f4e4f7a91b.jpg', 'https://github.com/Turtle-Head/Project5')
  ]);
}

ko.applyBindings(new ProjectViewModel());
