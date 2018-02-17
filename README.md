# Notes
## Template
![](https://github.com/Jiaaa1014/CountDown-React/blob/master/public/CountDown.gif)

## Codes

* 時間轉換
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
* 補位0
```js
// Clock.jsx
  leading(num) {
    return num < 10 ? "0" + num : num;
}
```

## 各種標準的時間格式

* refs:[這](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part3/datetime.html)

### Using slash
```
1. 2018/07/12 15:34
2. 2018/7/12 15:34:56
3. 07/12/2018 15:29
4. 7/12/2018
```
---
### ISO 8601 (Using hyphen)

`YYYY-MM-DDTHH:mm:ss.sssZ`
`T`分割，可以以空格代替，`Z`代表UTC
`1.`如果是台灣，則`2.`代表倒數時間為UTC標準，`3.`自己選
```
1. 2018-01-17T15:30
2. 2018-01-17T15:30Z
3. 2018-01-17T15:30+08:00
4. 2018-01-16T15:50+0800
5. 2018-01-17
```
---
### RFC 2822 (天、月變成字串)

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

## Eslint
```js
"devDependencies": {
    "babel-eslint": "^8.2.1",
    "eslint": "^4.15.0",
    "eslint-config-airbnb-base": "^12.1.0",
    "eslint-plugin-import": "^2.8.0",
    "eslint-plugin-react": "^7.5.1"
  }
```

## Problem Solved
`<input>`加上onkeyPress事件，然後使用`preventDefault()`避免頁面重新載入

```js
// App.js
<FormControl
  className="Deadline-input"
  placeholder="new date"
  onChange={e => this.setState({ newDeadLine: e.target.value })}
  onKeyPress={(e) => {
    if (e.key === 'Enter') {
      if (!e.target.value) return
      e.preventDefault()
      this.changeDeadline()
    }
  }}
/>
```