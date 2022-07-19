# MOMENTUM
## nomad coder / vanilla JS / MOMENTUM Project 

:pencil: 자바스크립트와 더욱 긴밀해져야지..내 짱친 만들어야지 .. ㅎㅎ 싶어서 시작한 클론코딩이다. 
최근 리액트 공부를 시작했기 때문에야말로 더더욱 자바스크립트의 소중함을 느낀다. 다음 과정을 막힘없이 배우기 위해서라도 계속해서 곱씹고 체화시켜야 할 것 

:pencil: 니꼬쌤은 __어떻게 프로젝트를 빌드해나가는지 사고의 흐름을 관찰하는 것__ 또한 주안점으로 두고 있다.  
-> 문제를 쪼개서 해결하는 과정이 어떤 건지 알 것 같다.  
-> 그리고 리팩토링 과정도!  
최근 무지성으로 addEventListener만 치고 있다던가 하는 자신을 발견했기 때문에 더더욱 이런 긴밀한 사고과정을 접하는 것이 도움이 된다. 🥺 


### :bookmark: Chp.4.0.LOGIN
- 로컬 스토리지에 정보 저장하고 출력하기  
- classList.add / classList.remove  
- submit 동작 시 브라우저의 기본동작 (새로고침) 유의 -> preventDefault() 로 제어  
- console.dir 을 통해 방금 일어난 event에 대한 정보 조회하고 원하는 값 얻기  
  
Username 유효성을 검사하고 받아서 Greeting 페이지를 출력한다. ( hidden class를 제거 / 추가)  
유저 정보는 로컬 스토리지에 저장해 새로고침 후에도 유저 기억하도록 한다.   
Username이 없을 시엔 form을 보여준다.

### :bookmark: Chp.5.0 Clock 
- interval: 매 번 발생해야 하는 모든 일  
- setTimeout(function, function 실행 간격 지정(단위:ms))  
- padStart() padEnd() : string 글자 수 맞출 때 끼워넣기  
  
Date() 생성자로 날짜 정보를 가져오는 함수를 interval로 1초(1000ms)마다 실행

### :bookmark: Chp.6.0 Quotes / Background
- Randomness를 어떻게 구현하는지
- js에서 html 태그 동적으로 생성하기 

열 가지 명언이 담긴 배열의 요소에서 랜덤으로 가져오기 위해 Math module 이용  
Math.random() : 기본적으로 0~1 사이의 정수인 난수를 반환한다.  
Math.floor() 를 통해서 소수점 제거, 배열 인덱스를 추출하기. 

*api를 통해 임의 배경화면과 명언을 불러오는 방식을 추가해보고 싶다.

### :bookmark: Chp.7.0 TodoList 
- 동적으로 리스트 요소 추가 
- 로컬 스토리지에 저장을 통해 내용 유지 
- 리스트 삭제할 때 배열의 고유한 정보 가져오기 위해 Date.now()로 id 부여
- filter 배열 메서드를 이용해 삭제 구현 
filter는 원 배열을 손상시키지 않음 > filter가 적용된 후의 배열을 다시 저장해서 덮어씌움 
id를 부여하면서 객체 형태가 되는데 이를 로컬스토리지에 저장하기 위해 JSON.stringify() 문자열로 만들어 저장  
문자열로 저장한 객체를 가져올 땐 JSON.parse()  
새로고침 후에 정보가 남아있어야 하므로 로컬스토리지에 리스트 정보가 있을 경우 우선으로 불러온다.   


:bug: forEach문에서 실수가 있었다.  
parsedToDos.forEach(paintToDo); 에서 배열 각각에 대해 적용할 함수를 paintToDo()로 기입한 것이 원인,   paintToDo()는 함수가 리턴하는 '값'을 넘겨주는 꼴이므로 에러엔딩.. 제법 눈에도 안 밟혀서 오래 쳐다봤다. forEach에는 정신 차리고 함수값 말고 함수를 넘겨주자! 

