# evalogic

A library to evaluate simple logical expression using only these three
logical operators: _& (and)_, _| (or)_, and _! (not)_.

### Usage
##### Install
```bash
npm install --save evalogic
```

##### Import the `evaluate` function
```javascript
import { evaluate } from 'evalogic';
```

## Evaluating Expression

##### Single value
```javascript
evaluate('0'); // false
evaluate('1'); // true
```

##### OR expression
```javascript
evaluate('0|0'); // false
evaluate('1|0'); // true
evaluate('1|1'); // true
evaluate('1|1|0'); // true
```

##### AND expression
```javascript
evaluate('0&0'); // false
evaluate('1&0'); // false
evaluate('1&1'); // true
evaluate('1&1&0'); // false
```

##### NOT expression
```javascript
evaluate('!0'); // true
evaluate('!1'); // false
```

##### Expression with parenthesis
```javascript
evaluate('(0)'); // false
evaluate('(!0)'); // true
evaluate('(0)&(1)'); // false
evaluate('(0|1)&(!1)'); // false
evaluate('((1&1)&(1&0))&(1|0)'); // false
```

##### Invalid expression
```javascript
evaluate('(0|0'); // throws Error: Invalid logical expression
evaluate(')0|0('); // throws Error: Invalid logical expression
evaluate('&0&0'); // throws Error: Invalid logical expression
evaluate('0&&0'); // throws Error: Invalid logical expression
evaluate('(0)(1)'); // throws Error: Invalid logical expression
```

### Development
##### Tests
```
npm test
```
### License
MIT
