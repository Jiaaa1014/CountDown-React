# Notes
### Template
![](https://github.com/Jiaaa1014/CountDown-React/blob/master/public/CountDown.gif)

### Codes
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

### `Date.parse(time)`，time 的格式不熟，容易出錯，參考[這](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part3/datetime.html)

#### Using slash
```
1. 2018/07/12 15:34
2. 2018/7/12 15:34:56
3. 07/12/2018 15:29
4. 7/12/2018
```

#### ISO 8601 (Using hyphen)

`YYYY-MM-DDTHH:mm:ss.sssZ`
`T`分割日期v.s時鐘，可以以空格代替，`Z`代表UTC
`1.`如果是台灣，則`2.`代表倒數時間為UTC標準，`3.`自己選
```
1. 2018-01-17T15:30
2. 2018-01-17T15:30Z
3. 2018-01-17T15:30+08:00
4. 2018-01-16T15:50+0800
5. 2018-01-17
```
#### RFC 2822 (天、月變成字串)

```
ddd, DD MMM YYYY HH:mm:ss ZZ
MMM DD, YYYY
DD MMM, YYYY
```
**隨便在哪加`,`不會影響**
```
1. 17 Jan 2018
2. Jan 17, 2018
3. Jan 16, 2018 15:50
4. Jan 16, 2018 15:50 +08:00
5. Jan 16, 2018 15:50 +0800
6. Jan 16, 2018 15:52:59 +0800
```

### 使用eslint
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
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": [
            2,
            "never"
        ],
        // 視情況 ()=> {兩行以上要curly}
        "arrow-body-style": [
            2,
            "as-needed"
        ],
        // 別逼我在物件最後一項加","
        "comma-dangle": [
            2,
            "never"
        ],
        "no-console": 0,
        // 別逼我用this
        "class-methods-use-this": "off",
        // 避免eslint在import module跟你吵
        "react/jsx-uses-vars": 2,
        "react/jsx-uses-react": 2,
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ]
    }
}
```
