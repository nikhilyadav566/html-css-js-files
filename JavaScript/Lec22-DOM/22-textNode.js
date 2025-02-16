//   There are two ways in addtextNode

//1.
let newPara = document.createElement('p');
let textPara = document.createTextNode('I am the text');
newPara = appendChild(textPara);
content.appendChild(newPara);

// 2. simple (which is generally used)
let myPara = document.createElement('p');
myPara.textContent = 'I am the text';
content.appendChild(myPara);