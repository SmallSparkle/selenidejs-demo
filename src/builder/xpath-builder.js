export class x {

   result = '';

   all() {
      this.result += `//*`
      return this;
   };

   by(str) {
      this.result += `[${str}]`
      return this;
   };

   child(str) {
      this.result += `/${str}`
      return this;
   };
   
   descendant() {
      this.result += `//*`
      return this;
   };

   x() {
      return this.result;
   }
};

// exports.x = () => {
//    new xpathBuilder();
// }
