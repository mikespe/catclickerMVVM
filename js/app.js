var ViewModel = function() {
  this.clickcount = ko.observable(0);
  this.name = ko.observable('kitty');
  this.imgsrc = ko.observable('https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx');
  this.attribution = ko.observable('artist');

  this.incrementcounter = function() {
    this.clickcount(this.clickcount() + 1);
  };

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

  self.people = ko.observableArray([
    { name: 'Bert' },
    { name: 'Charles' },
    { name: 'Denise' },
    { name: 'Richy' },
    { name: 'Joe Junioy' },
  ]);
}

ko.applyBindings(new ViewModel());
