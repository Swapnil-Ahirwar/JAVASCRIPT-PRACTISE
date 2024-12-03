let task3Element = document.getElementById('task-3');

function someText() {
  alert('This is warning!');
}

function alertStr(str) {
  alert(str);
}

task3Element?.addEventListener('click', someText);

function concatStr(str1, str2, str3) {
 const combineStr = `${str1} ${str2} ${str3}`;
 return combineStr;
}



const combineText = concatStr('hello!', 'I am', 'Swapnil.');
alert(combineText);
alertStr('this is a new aler warning!!!');
