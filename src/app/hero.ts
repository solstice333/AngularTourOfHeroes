export class Hero {
  // non-shorthand (public by default)
  // public id: number 
  // public name: string

  // params with access specifiers become properties 
  // constructor(public id: number, public name: string) { 
  //   this.id = id; // assignment here is optional
  //   this.name = name;
  // }
  
  constructor(public id: number, public name: string) {}
}