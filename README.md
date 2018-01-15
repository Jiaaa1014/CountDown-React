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


##### 使用eslint
```js
"devDependencies": {
    "babel-eslint": "^8.2.1",
    "eslint": "^4.15.0",
    "eslint-config-airbnb-base": "^12.1.0",
    "eslint-plugin-import": "^2.8.0",
    "eslint-plugin-react": "^7.5.1"
  }
```
`import`不須加入plugin但`react`要

```js
{
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "airbnb-base",
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": [2, "never"],
        // 視情況 ()=> {兩行以上要curly}
        "arrow-body-style": ["error", "as-needed"],
        "comma-dangle": ["error", "never"],
        // 我需要console.log
        "no-console": 0,
        // 避免逼你用this？
        "class-methods-use-this": "off",
        // 避免eslint在import module跟你吵
        "react/jsx-uses-vars": "error",
        "react/jsx-uses-react": "error"
    }
}
```
