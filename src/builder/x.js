class xpathBuilder {
    constructor(){
        this.title = 'x';
    }
 all() {
    return this;
 };
 by() {
    return this;
 };
 child() {
    return this;
 };
 descendant() {
    return this;
 };

 x() {
    return new x(
        this.all, 
        this.by,
        this.child,
        this.descendant,
        this.descendant
        );
  }
};