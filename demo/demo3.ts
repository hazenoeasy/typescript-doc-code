export {};
class Student {
  fullname:string;
  constructor(public firstName:string, public middleName:string, public lastName: string){
    this.fullname=firstName+middleName+lastName;
  }
}
interface Person {
  firstName: string;
  lastName:string;
}
function greeter(person:Person):string{
  return 'Hello' +person.firstName + person.lastName;
}
let zyh =new Student('Z','Y','H');
console.log(greeter(zyh));