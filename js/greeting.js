const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); 
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const greetingWrap = document.querySelector(".greeting-wrap")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) { //username의 유효성 검사하기 
    event.preventDefault(); //브라우저 기본 동작(새로고침) 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //로컬 스토리지에 유저이름 저장해 새로고짐 후에도 유저 기억하기
    paintGreetings(); //호출하자마자 저장된 유저 찾음 
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY); 
    greeting.innerText = `Hello, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greetingWrap.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(); //인자를 받을 필요가 없음 local storage에 유저정보가 존재하므로 

}

