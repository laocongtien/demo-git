function Dog(name){
    this.name  = name;
    this.stomas = [];
}

Dog.prototype.eat = function (cat){
    this.stomas.push(cat);
};
module.exports = Dog;