interface Person {
  firstName: string;
  lastName: string;
}
function hello2(person: Person){
  return person.firstName +person.lastName;
}
console.log(hello2({firstName:'sfdasfd',lastName:'dsfddsf'}));