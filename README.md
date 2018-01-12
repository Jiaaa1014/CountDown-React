### Notes
##### Template
![](https://github.com/Jiaaa1014/CountDown-React/blob/master/public/CountDown.gif)

##### codes
* Form
  `Form, FormControl, InputGroup` difference?

*

```js
// Clock.jsx
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60),
      minutes = Math.floor((time / 1000 / 60) % 60),
      hours = Math.floor((time / 1000 / 60 / 60) % 24),
      days = Math.floor(time / 1000 / 60 / 60 / 24);

    this.setState({ days, hours, minutes, seconds });
}
```

```js
// Clock.jsx
  leading(num) {
    return num < 10 ? "0" + num : num;
}
```

##### `Date.parse(time)`，time 的格式過於制式化，容易出錯
許可：
1. 2 26, 2018
2. 2018 02 26
3. 26 Feb 2018
4. 12 Dec, 2018
5. 2018/02/26
