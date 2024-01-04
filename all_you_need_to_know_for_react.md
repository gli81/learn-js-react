# All You Need to Know for React

[Youtube Link](https://www.youtube.com/watch?v=m55PTVUrlnA&t=271s)

## arrow function

### annoymous function

## Ternary Operators 三目运算符

## Objects

- destructure an object

```javascript
const person = {
    name: "Pedro",
    age: 20,
    is_married: false
};
const { name, age, is_married } = person;
```

- when the key name equals vairable name, do this
```javascript
const name = "Pedro";
const person = {
    name,
    age: 16
};
```

- rest operator (...)

```javascript
const person2 = {...person, name: "Jack"};
```

## Work with arrays: map(), filter()

## Async, Await, Fetch

@_@