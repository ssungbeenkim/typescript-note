/* 
타입에도 컨디션을 줄 수 있다. 
 */

// Ternary Operator처럼
type Check<T> = T extends string ? boolean : number;
type Type = Check<string>; // boolean // Type is boolean type

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';

type T0 = TypeName<string>; // T0 = 'string'
('string');
type T1 = TypeName<'a'>;
('string');
type T2 = TypeName<() => void>;
('function');
