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
    new Project('Coding the little things', 'http://turtle-head.github.io/Coding-the-little-things/', 'img/code.png', 'http://turtle-head.github.io/Coding-the-little-things/'),
    new Project('Bugged', 'http://turtle-head.github.io/Bugged/', 'img/Bugged.png', 'https://github.com/Turtle-Head/Bugged'),
    new Project('Unknown Crusade Killboard', 'http://turtle-head.github.io/Killboard/', 'img/UKCR.png', 'https://github.com/Turtle-Head/Killboard'),
    new Project('Cat Clicker', 'http://turtle-head.github.io/CatClicker/', 'img/CatClicker.png', 'https://github.com/Turtle-Head/CatClicker'),
    new Project('Skel\'s Art Studio', 'http://skelsart.ca', 'img/skelsart.jpg', 'https://github.com/Turtle-Head/skelsart'),
    new Project('Gelp: Neighborhood Map Project', 'http://turtle-head.github.io/Project5/', 'img/gelp.jpg', 'https://github.com/Turtle-Head/Project5'),
    new Project('Feed Reader: Testing', 'http://turtle-head.github.io/FeedReader-P6/', 'img/feedreader.png', 'https://github.com/Turtle-Head/FeedReader-P6'),
    new Project('Bugged', 'http://turtle-head.github.io/Bugged/', 'img/bugged-min.png', 'https://github.com/Turtle-Head/Bugged'),
    new Project('Killboard', 'http://turtle-head.github.io/Killboard/', 'img/ukcr-min.png', 'https://github.com/Turtle-Head/Killboard'),
    new Project('Cat Clicker', 'http://turtle-head.github.io/CatClicker/', 'img/catClicker-min.png', 'https://github.com/Turtle-Head/CatClicker'),
    new Project('skelsart.ca', 'http://skelsart.ca', 'img/skel-min.png', 'https://github.com/Turtle-Head/skelsart'),
    new Project('Gelp', 'http://turtle-head.github.io/Project5/', 'img/gelp-min.png', 'https://github.com/Turtle-Head/Project5'),
    new Project('Feed Reader', 'http://turtle-head.github.io/FeedReader-P6/', 'img/feedreader-min.png', 'https://github.com/Turtle-Head/FeedReader-P6')
  ]);
}

ko.applyBindings(new ProjectViewModel());
