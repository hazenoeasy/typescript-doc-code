//解构
let input = [1, 2];
let [first, second] = input;
let [...rest] = [1, 2, 3, 4];

let o = {
	a: '1',
	b: '2',
	c: 12,
};
let { a, c } = o;

let { a: newa, c: newc }: { a: string; c: number } = o;
console.log('newa:', newa);
console.log('newc:', newc);

function keepWholeObject(wholeObject: { a: string; b?: number }): void {
	let { a, b = 1001 }: { a: string; b?: number } = wholeObject;
}

function f({ a, b = 0 }: { a: string; b?: number } = { a: 'x' }): void {
	console.log(a, b);
} // b=0 代表b是可选值  而且有初始化值
// a是必填 但是有默认值

f();
f({ a: 'y' });
f({ a: 'z', b: 12 });
function f1({ a = 'x', b = 0 }): void {
	console.log(a, b);
}
f1({});
// f1();
f1({ a: 'y' });
f1({ a: 'z', b: 32 });
console.log('--------------');
function f2({ a = 'x', b = 0 } = {}): void {
	console.log(a, b);
}
f2();
f2({});
f2({ a: 'l' });

//展开
