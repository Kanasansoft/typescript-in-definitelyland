// 注意！ここでやってるやり方よりもtype guardsを使うんだ…！！
// 型アサーションは悪い。常に悪い。なるべく使わないこと。

let obj: string | number | Date = null as any;

// string 扱いしてみる
(obj as string).charAt(0);

// number 扱いしてみる
(obj as number).toFixed(2);

// Date 扱いしてみる
(obj as Date).getTime();

// 値の集合に含まれない型にしてみるとしっかり怒られる
// error TS2352: Type 'string | number | Date' cannot be converted to type 'RegExp'.
//   Type 'Date' is not comparable to type 'RegExp'.
//     Property 'exec' is missing in type 'Date'.
// (obj as RegExp).test("test");

export { }
