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

- <code style="color:lime;font-size:24px">align-self</code> give the child component can decide how to be placed at **cross** direction(perpendicular to the father).

- <code style='color:yellow'>flex-direction</code> defines how items being placed.
    - tips: direction is you list row by row,or col by col
    - `row`
    - `column`
    - `row-reverse`
    - `column-reverse`

- `order:1` all flex items have an attribute `order` and being `0` as default.The one who's order is smaller will be put left. 


- <code style="color:yellow;">flex-wrap</code> if things are limited at a row,than can use this property to change the way they line up.
    - `nowrap`
    - `wrap` its a little bit different from i thought,because here `wrap` means you pack the content up to another place.
    - `wrap-reverse`

- <code style="color:yellow;font-size:20px;">flex-flow</code> is combination of <code style="color:yellow;">flex-wrap</code> and <code style='color:yellow'>flex-direction</code>, you can just add the attribute of these, ex. `flex-flow: row wrap;`