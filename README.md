# Book Info App with React Hook & Context 
This Book Info App seems very easy at first glance. But some very important and key features of REACT are implemented in this application. All the books information will be saved into user browser's local-storage. There is no database / backend in this application.

## React Framework
This app is a single page application, powered by React. React is a really powerful and solid framework. I had so much fun while working with it. If you did not try it yet, but heard of it somewhere, you can give it a try. I can assure you, you will have fun too :D 

## React Hooks
React hooks are new addition of react, that has been included since Version 16.8. It allows developer to use state outside a class component, and gives alternative of various lifecycle methods, and many. This is a very new feature of React. And this application start-to-end is built on React hooks.

## New Context API
Context API is another awesome feature, that is integrated into React core from version 16.3. For handling different states of a single application, Context API is  very useful.

## UI Theme Integration
This application has two theme mode. Light and Dark. With react context API, Implementing UI theme, is very straight forward, and ogranized

## Validation Library
I wrote a very basic but powerful validation package for this project. Beginners will find this validation package, really helpful, and will have a better understanding of how validation works in javascript, and how you can include your own package into React. But keep in mind, the validation package is really basic.

Suppose you want to validate a text field. Maximum length will be 100, minimum:2, and also the field is a required field.All you have to do - 

```javascript
const validateStr = validate('Field Name',fieldVal,'required|min:2|max:100|string')
/**
 * @param1 field Name (any name will do)
 * @param2 field value
 * @param2 rules
 * @return object {result:true} or {result:false, message:'error message'}
 */
```

## Live Demo 
You can check the working example here, [here](https://junaedsiam.github.io/book-info-app/)


Thats all folks! See you later, on some other project. Until then, have fun!