
const quotes = [
    {quote: "최선을 다했다는 말을 함부로 쓰지마라. 최선이란 말은 내 자신의 노력이 나를 감동시킬 수 있을때 비로소 쓸 수 있는 말이다.",
    author:"조정래"},
    {quote: "미친 짓이란, 매번 똑같은 행동을 반복하면서 다른 결과를 기대하는 것이다",
    author:"아인슈타인"},
    {quote: "뜨개질에 정답은 없다! 내가 틀려도 꾸준히 틀리면 그게 나만의 무늬가 되는 것" ,
    author:"뜨개질 명언"},
    {quote:"행복한 사람들은 아름답다. 그들은 거울처럼 행복을 다시 반사한다.",
    author:""},
    {quote:"한걸음, 한걸음 나아가다 보면, 조금씩 더 강해질 것이고, 조금씩 더 실력이 쌓일 것이고, 조금씩 더 자신감이 생길 것이고, 조금씩 더 성공하게 될 것이다.",
    author:"Mark Victor Hansen"},
    {quote:"강력한 이유는 강력한 행동을 낳는다",
    author:"윌리엄 셰익스피어"},
    {quote:"만약 당신이 당신의 최선을 다했다면, 당신은 실패에 대해서 걱정할 시간이 없었을 것이다.",
    author:"H. Jackson Brown Jr."},
    {quote:"자신은 할 수 없다고 생각하고 있는 동안, 사실은 그것을 하기 싫다고 다짐하고 있는 것이다. 그러므로 그것은 실행되지 않는 것이다.",
    author:"스피노자"},
    {quote:"승리란 패배를 아는 사람에게 더 달콤하게 느껴지는 것이다.",
    author:"Malcolm S. Forbes"},
    {quote:"하나의 꿈이 수천개의 현실보다 더 강력한 힘을 가지고 있다.",
    author:"J.R.R. Tolkien"},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

