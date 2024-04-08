// let name: string = "Jasmeen Kaur";
// let age: number | string; // union (|)
// let isStudent: boolean;
// let rank: string[];
// let role: [number, string, boolean]; //tuple contains a fixed amount of values & the types defined during declaration.
// role = [5, '4', false];

// let printName: (name: string) => never; // void returns undefined, but never doesn't return anything.


// -------------------- type and interface are known as alias.

// let person: Person = {
//   name: "Jass",
//   age: 22,
// };

// let people:Person[];

// let personName: unknown;

// type X = {
//     a: string;
//     b: number;
//   };
// interface Person extends X {
//   name: string;
//   age?: number;
// }

// interface Newer extends Person{
//   profession: string;
// }
// type X = Person & {
//   a: string;
//   b: number;
// };

// type Y = X & { //properties of X would also be included in Y...
//   c: string;
//   d: number;
// };

// let y: Y = {
//   a: '5',
//   b: 4,
//   c: 'efff',
//   d: 5,
// }

export default {};