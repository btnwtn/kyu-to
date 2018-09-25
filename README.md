# キュと

| Cute logging

## How to use

```js
import createLogger from 'kyu-to'

window.log = {
    app: createLogger('#3747af', '#fff'),
}

log.app('Hello', { foo: 'bar' })
```
