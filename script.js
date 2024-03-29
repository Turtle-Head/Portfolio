// Class for project grid
function Project (name, url, pic, git) {
  var self = this
  self.name = name
  self.url = ko.observable(url)
  self.pic = ko.observable(pic)
  self.git = ko.observable(git)
}

// ViewModel for the screen
function ProjectViewModel () {
  var self = this

  self.projects = ko.observableArray([
    new Project(
      'Coding...',
      'http://turtle-head.github.io/Coding-the-little-things/',
      'img/code.png',
      'http://turtle-head.github.io/Coding-the-little-things/'
    ),
    new Project(
      'Bugged',
      'http://turtle-head.github.io/Bugged/',
      'img/bugged-min.png',
      'https://github.com/Turtle-Head/Bugged'
    ),
    new Project(
      'Cat Clicker',
      'http://turtle-head.github.io/CatClicker/',
      'img/catClicker-min.png',
      'https://github.com/Turtle-Head/CatClicker'
    ),
    new Project(
      'Gelp',
      'http://turtle-head.github.io/Project5/',
      'img/gelp-min.png',
      'https://github.com/Turtle-Head/Project5'
    ),
    new Project(
      'Feed Reader',
      'http://turtle-head.github.io/FeedReader-P6/',
      'img/feedreader-min.png',
      'https://github.com/Turtle-Head/FeedReader-P6'
    ),
    new Project(
      'CleanUp',
      'https://turtle-head.github.io/CleanUp/index.html',
      'img/water-1761027.jpg',
      'https://github.com/Turtle-Head/CleanUp'
    ),
    new Project(
      'CalculatorV2',
      'https://github.com/Turtle-Head/CalculatorV2',
      'img/calcV2.png',
      'https://github.com/Turtle-Head/CalculatorV2'
    ),
    new Project(
      'Calculator-v6',
      'https://github.com/Turtle-Head/Calculator-v6',
      'img/CalcV6.png',
      'https://github.com/Turtle-Head/Calculator-v6'
    ),
    new Project(
      'AirBus',
      'https://github.com/Turtle-Head/AirBub',
      'img/AirBus.png',
      'https://github.com/Turtle-Head/AirBub'
    ),
    new Project(
      'BattleShip',
      'https://github.com/Turtle-Head/BattleShip',
      'img/BS3.png',
      'https://github.com/Turtle-Head/BattleShip'
    ),
    new Project(
      'Kingdom',
      'https://github.com/Turtle-Head/Dog/tree/main',
      'img/Kingdom.png',
      'https://github.com/Turtle-Head/Dog/tree/main'
    ),
    new Project(
       'Club',
       'https://github.com/Turtle-Head/Club',
       'img/Club.png',
       'https://github.com/Turtle-Head/Club'
	)
  ])
}

ko.applyBindings(new ProjectViewModel())
