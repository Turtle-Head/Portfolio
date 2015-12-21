// Class for project grid
function Project(name, url, pic) {
  var self = this;
  self.name = name;
  self.url = ko.observable(url);
  self.pic = ko.observable(pic);
}

// ViewModel for the screen
function ProjectViewModel() {
  var self = this;

  self.projects = ko.observableArray([
    new Project('Portfolio', 'http://turtle-head.github.io/Portfolio', 'img/SSPortfolioTop.jpg'),
    new Project('Resume', 'http://turtle-head.github.io/Resume', 'img/SSResumeTop.png'),
    new Project('Bugged', 'http://turtle-head.github.io/Bugged/', 'img/Bugged.png'),
    new Project('Unknown Crusade Killboard', 'http://turtle-head.github.io/Killboard/', 'http://i.gyazo.com/f0b803fdc0df3565dc04b6d593490738.png'),
    new Project('Cat Clicker', 'http://turtle-head.github.io/CatClicker/', 'http://i.gyazo.com/2698f87f89f83b0e581445550ba96768.png')
  ]);
}

ko.applyBindings(new ProjectViewModel());
