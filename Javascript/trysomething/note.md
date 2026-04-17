# Reference

-[JAVASCRIPT.INFO](https://zh.javascript.info/)

> 一直以來 Javascript 不斷進步，新的特性被加入，舊的也繼續保留，這樣的狀況幫助程式碼可以互相兼容，但創造者所作的不好決定以及錯誤都會不斷被保留下來。


# Declaration

```javascript
let var = 0; // 利用 let 來宣告 (最正式)


// 例外: const 可以直接宣告
const var_can_not_change = 13;
```

# Type

- Number (int,float)
    - 有`Infinity`這東西，you can use 1/0 to get the var.
    - `Nan` can infect others,so once you use in a calculation,you will get `Nan` in last.(except `0 ** Nan will be 1`)
- BigInt
- String
- Boolean (`true` or `false`)
- undefined (haven't been assigned) 
- <code style='color:yellow;font-size:16px;'>object</code> 、 <code style='color:yellow;font-size:16px;'>symbol</code>
- null

# 空值合併運算符 `??`

> 當一個變數的值既非`null`也非`undefined`，那可稱這變數為`defined` (已定義)。

- `a ?? b` 的结果是：

    - if `a` is defined,than it will return `a`
    - if `a` is `undefined` or `null`,than it will return `b`
> `||` return the first `true` value,however `??` return the first `defined` value. ( so `||` will skip the value like `0` because it represent `false` boolean value in the javascript,but `??` can catch it for it is a number. )

# 後綴

- `i++` the value will be added after doing something.(immediately) 

- `++i` the value will immediately added.

# `switch`

- 記住要加`break`，否則javascript會不斷往下執行(不做case check了)直到結束或是遇到`break`。

# 函數

- A method:
```javascript
function showMessege(from,text= anotherFunction()){
    // if the 'text' variable is undefined,than the second argument will use the value returned by the anotherFunction.
}
```

- 備忘錄: `confirm` 會回傳 `true` or `false` depends on which button you click(yes or no).
- 

# 函數表達式

```javascript
function sayHi() {   // (1) 做一個函式
  alert( "Hello" );
}

let func = sayHi;    // (2) 將 func 也導向這個函數的'箱子' ，記得不能加括號，不然會把該函式運行後的value assign 給 func

func(); // Hello     // (3) 用這個導引運行
sayHi(); // Hello    // 可以運行
```

# 箭頭函數

```javascript

let function = (a,b) => a+b;

let function = a => a+5;
// 只有一個參數，甚至可以省略括號
```