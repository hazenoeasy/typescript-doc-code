export {};
function printLabel(labelled: { label: string }): void {
	console.log(labelled.label);
}
let obj = { name: 'zyh', label: 'sss' };
printLabel(obj);
interface Labelled {
	label: string;
}
function printLabel2(labelled: Labelled) {
	console.log(labelled.label);
}
let myobj = { name: 'sdfas', label: 'sdfas' };
//不需要传入的对象必须实现接口   只要对象符合接口就行
// 类型检查器不会检查属性顺序
printLabel2(myobj);

interface Square {
	// color?: string = 'black';
	// an interface cannot have init value
}

// read only

interface Point {
	readonly x: number;
	readonly y: number;
}

let ro: ReadonlyArray<string> = ['zzz', 'xxx'];
// 变量  const 属性 readonly

// function type
interface SearchFunc {
	(source: string, subString: string): boolean;
}

let mySearchFunc: SearchFunc;
mySearchFunc = function (source: string, subString: string) {
	return source === subString;
};
mySearchFunc = function (s: string, y: string) {
	return s === y;
};
// 接口名和函数名不需要匹配 他会按顺序检查
