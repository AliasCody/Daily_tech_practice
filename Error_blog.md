# Reference
- [Flexbox froggy](https://flexboxfroggy.com/)

# Box-model

- `display:flex` should be the attribute of the father container,not the object's attribute.

- `box-sizing: border-box` change how an element's total width and height are calculated.The width will equals to `content width + padding + border`

- use `<link rel="stylesheet" href="{your_css_filename}">` to link html file with css file.

# Flex-box

<p style="font-size: 30px;">All begin with <code>display:flex</code></p>


- <code style='color:yellow'>justify-content</code> align items **horizontally** and has the following value:
    - tips: consider about the blank as an object
    - `flex-start`
    - `flex-end`
    - `center`
    - `space-between`
    - `space-around`

- <code style='color:yellow'>align-items</code> align items **vertically** and has the following value:
    - `flex-start`
    - `flex-end`
    - `center`
    - `baseline`
    - `stretch`: items are stretched to fit the container.

- <code style='color:yellow'>flex-direction</code> defines how items being placed.
    - tips: direction is you list row by row,or col by col
    - `row`
    - `column`
    - `row-reverse`
    - `column-reverse`

- `order:1` all flex items have an attribute `order` and being `0` as default.The one who's order is smaller will be put left. 

- `flex-direction` decide the direction of how your componets line up(from left to right or from top to bottom).
    - if components are filled out of a row so every components have been squeezed,you can use `flex-wrap` to control the behavior (you wanna them being squeezed or 
    automatically move to anothor row)