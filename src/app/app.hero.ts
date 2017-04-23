export class Hero {
  // non-shorthand (public by default)
  // public id: number 
  // public name: string
  
  constructor(public id: number, public name: string) { // shorthand
    this.id = id;
    this.name = name;
  }
}