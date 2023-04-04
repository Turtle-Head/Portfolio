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
    new Project('Coding-the-little-things','img/code.png','https://turtle-head.github.io/Coding-the-little-things/'),
    new Project('Bugged', 'http://turtle-head.github.io/Bugged/', 'img/Bugged.png', 'https://github.com/Turtle-Head/Bugged'),
    new Project('Cat Clicker', 'http://turtle-head.github.io/CatClicker/', 'img/CatClicker.png', 'https://github.com/Turtle-Head/CatClicker'),
    new Project('Feed Reader: Testing', 'http://turtle-head.github.io/FeedReader-P6/', 'img/feedreader.png', 'https://github.com/Turtle-Head/FeedReader-P6'),
    new Project('CleanUp','img/water-1761027.jpg', 'https://turtle-head.github.io/CleanUp/index.html'),
    new Project('CalculatorV2','img/calcV2.png','https://github.com/Turtle-Head/CalculatorV2'),
    new Project('Calculator-v6','img/CalcV6.png','https://github.com/Turtle-Head/Calculator-v6'),
    new Project('AirBus','img/AirBus.png','https://github.com/Turtle-Head/AirBub')
  ]);
}

ko.applyBindings(new ProjectViewModel());
