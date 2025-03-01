console.log('ABCD');   // 1st execute
document.addEventListener('click', function(){   // 2nd execute
    console.log('123')
});
console.log('Hello');                  // 3rd execute

//  =>  All entery Comes and Remove in CallStack.

//  =>  When evnet listener entry comes in CallStack at that time it gives controll to browser and remove entry from callstack .

//  =>  When clicked browser gives this function to event queue.

//  =>  Event Queue executed this function when call Stack is empty.

//  =>  If CallStack will not empty then Evnet Queue willn't execute .

//  Notes:-

//  1. Asynchronous code uses JS Event loop ex:-  eventListener, setTimeOut etc.

//  2. Any  Asynchronous code handle by browser.

//  3. Code comes browser to Event Queue.

//  4. When call stack empty Event Queue send function in call stack to execute.