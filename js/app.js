var initialcats = [
  {
    clickcount: 0,
    name: 'scoopy',
    imgsrc: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
    imgattribution: 'some guy',
    nicknames: ['smitty', 'bert', 'LJ']
  },
  {
    clickcount: 0,
    name: 'boopy',
    imgsrc: 'http://www.city-data.com/forum/attachments/cats/21337d1213200621-cat-pics-100_0560.jpg',
    imgattribution: 'some guy',
    nicknames: ['richard']
  },
  {
    clickcount: 0,
    name: 'poopy',
    imgsrc: 'https://www.colourbox.de/preview/3523735-cat-animal.jpg',
    imgattribution: 'some guy',
    nicknames: ['Jimothy']
  }
];

var cat = function(data) {

  this.clickcount = ko.observable(data.clickcount);
  this.name = ko.observable(data.name);
  this.imgsrc = ko.observable(data.imgsrc);
  this.attribution = ko.observable(data.imgattribution);
  this.nicknames = ko.observable(data.nicknames);

  this.level = ko.computed(function() {
    var click = this.clickcount();
    if(click == 0) {
      return level = 'infant';
    } else if(click > 0 && click < 10){
      return level = 'baby';
    } else if(click >= 10 && click < 20){
      return level = 'toddler';
    } else if(click >= 20 && click < 100){
      return level = 'adulthood';
    } else {
      return level = 'click master';
    }
  }, this);
}

var ViewModel = function() {
  var self = this;

  this.catlist = ko.observableArray([]);

  initialcats.forEach(function(catitem){
    self.catlist.push( new cat(catitem) );
  });

  this.currentcat = ko.observable(this.catlist()[0]);

  this.incrementcounter = function() {
    this.clickcount(this.clickcount() + 1);
  };

  this.cngcurrent = function(e) {
    self.currentcat(e);
  };

};

ko.applyBindings(new ViewModel());
