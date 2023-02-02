const counter = document.querySelector("#counter");
console.log(counter)

const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const pause = document.querySelector("#pause");
const heart = document.querySelector("#heart");

const commentForm = document.querySelector('#comment-form')
const commentList = document.querySelector('#list')
const submitButton = document.querySelector("#submit")

let likes = {};



pause.addEventListener('click', () => {
    if (pause.textContent != 'resume') {
        minus.setAttribute('disabled', 'disabled');
        plus.setAttribute('disabled', 'disabled');
        heart.setAttribute('disabled', 'disabled');
        submitButton.setAttribute('disabled', 'disabled');
        pause.textContent = 'resume'
    }
    else {
        minus.removeAttribute('disabled', 'disabled');
        plus.removeAttribute('disabled', 'disabled');
        heart.removeAttribute('disabled', 'disabled');
        submitButton.removeAttribute('disabled', 'disabled');
        pause.textContent = 'pause'    
    }

})


minus.addEventListener('click', () => {
    const num = counter.textContent;
    let newNum = minusOne(num);
    return counter.textContent = newNum;
})



function minusOne() {
    let num = parseInt(document.querySelector('#counter').textContent);
    num = num-1;
    return num;
}

plus.addEventListener('click', () => {
    const num = counter.textContent;
    let newNum = plusOne(num);
    return counter.textContent = newNum;
})



function plusOne() {
    let num = parseInt(document.querySelector('#counter').textContent);
    num = num + 1;
    console.log(num);
    return num;
}

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let comment = e.target['comment-input'].value;
    const li = document.createElement('li');
    li.textContent = comment;
    document.querySelector('#list').append(li);
    commentForm.reset();
})


heart.addEventListener('click', () => {
    let key = parseInt(document.querySelector('#counter').textContent);
    let li = document.createElement('li');
    document.querySelector('.likes').append(li);
    likesHell(key, likes);

    let value = likes[key];
    console.log(value);

    if (value === 1){
        li.textContent = `${key} has been clicked ${value} time`
    }
    else {
        li.textContent = `${key} has been clicked ${value} times`
    }  
})


function likesHell(key, likes) {  
    if (key in likes) {
        let num = likes[key];
        newNum = num +1;
        likes[key] = newNum;
        return likes;
     }
    else {
        likes[key] = 1;
        return likes; 
    }
}