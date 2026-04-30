"use strict";

// 抓取：抓到輸入框、按鈕、清單這三個元素。
// 監聽：等使用者「點擊」按鈕。
// 建立：把輸入的文字變成一個 <li> 標籤。
// 置入：把這個 <li> 塞進剛才準備好的 <ul> 盤子裡。


// catch
let input = document.getElementById("todoInput");
let addBtn = document.getElementById("add_things_button");
let list = document.getElementById("TODO_list");

// listen
addBtn.addEventListener('click',function(){
    // get the content of the input
    const task = input.value;

    if(task == ""){
        alert("你沒填東西");
        return;
    }

    // let content list in the area (follow the line)
    // create a block (the child list of <ul> is <li>)
    const li = document.createElement('li');
    // assign content using .textContext
    li.textContent = task;

    // standard syntex
    list.append(li);


    // !! u need to empty the input block for users.
    input.value = "";

})

// Thinking UX/UI, users also want to press 'enter' to present that he/she has done.
// how to deal with it?
