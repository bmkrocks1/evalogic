export function evaluate(expression) {
  const valueStack = [];
  const operatorStack = [];

  function performOperation() {
    let a;
    let b;
    const operator = operatorStack.pop();

    if (operator === '|' || operator === '&') {
      a = valueStack.pop();
      b = valueStack.pop();

      if (a === undefined || b === undefined) {
        throw new Error('Invalid logic expression');
      }
    } else if (operator === '!') {
      a = valueStack.pop();

      if (a === undefined) {
        throw new Error('Invalid logic expression');
      }
    } else if (operator === '(') {
      throw new Error('Invalid logic expression');
    }

    if (operator === '|') {
      valueStack.push(a || b);
    } else if (operator === '&') {
      valueStack.push(a && b);
    } else if (operator === '!') {
      valueStack.push(!a);
    }
  }

  for (const char of expression) {
    if (char === '0') {
      valueStack.push(false);
    } else if (char === '1') {
      valueStack.push(true);
    } else if (char === '!') {
      operatorStack.push(char);
    } else if (char === '|' || char === '&') {
      while (
        operatorStack.length > 0 &&
        operatorStack[operatorStack.length - 1] === '&'
      ) {
        performOperation();
      }

      operatorStack.push(char);
    } else if (char === '(') {
      operatorStack.push(char);
    } else if (char === ')') {
      if (operatorStack.length === 0) {
        throw new Error('Invalid logic expression');
      }

      while (
        operatorStack.length > 0 &&
        operatorStack[operatorStack.length - 1] !== '('
      ) {
        performOperation();
      }

      operatorStack.pop();
    }
  }

  while (operatorStack.length > 0) {
    performOperation();
  }

  if (valueStack.length === 1) {
    return valueStack[0];
  }

  throw new Error('Invalid logic expression');
}
