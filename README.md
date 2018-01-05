### Notes
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
