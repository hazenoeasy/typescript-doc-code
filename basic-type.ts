export {};
let isDOne: boolean = false;

let decLiteral: number = 6;

let name: string = 'boob';

let boolArray: boolean[] = [true, true, false];
let numArray: number[] = [1, 2, 3];

let nameArray: string[] = ['1', '2', '3'];

let tuple: [string, number[], number] = ['111', [1, 1, 3], 111];

enum Color {
	Red,
	Green,
	Blue,
}
let colorName: string = Color[1];
let c: Color = Color.Green;

function warnUser(): void {
	console.log('this is my warning message');
}
let unusable: void = undefined;
// let able: void = null;

function error(message: string): never {
	throw new Error(message);
}
function error2(message: string) {
	return error(message);
}
function infiniteLoop(): never {
	while (true) {}
}

declare function create(o: object | string): void;
create({ id: 1 });
create('1');

let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;

let strLength2: number = (<string>someValue).length;
