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