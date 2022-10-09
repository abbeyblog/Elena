const inputField = document.getElementById("input"); 

function startTime() {
 const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  // add zero in front of numbers < 10
  return i;
}
function send() {
let input = inputField.value; 
inputField.value = "";
output(input); 
} 

function output(input) { 
let product; 
// Regex remove non word/space chars 
// Trim trailing whitespce 
// Remove digits - not sure if this is best 
// But solves problem of entering something like 'hi1' 
let text = input.toLowerCase()
.replace(/[^\w\s]/gi, "")
.replace(/[\d]/gi, "")
.trim(); 
text = text 
.replace(/ a /g, " ")
.replace(/i feel /g, "")
.replace(/lets/g, "let us")
.replace(/whats/g, "what is") 
.replace(/please /g, "") 
.replace(/ please/g, "") 
.replace(/ill/g, "i will"); 
if (compare(prompts, replies, text)) { 
// Search for exact match in `prompts` 
product = compare(prompts, replies, text); 
} else if (text.match(/(fuck|shit|pussy|dick|stupid|porn|whore|ass|butt|boob|idiot|spank|bitch|penis|vagina|slut| cum)/gi)) { 
product = lang[Math.floor(Math.random() * lang.length)];
} else if (text.match(/(why do you like me|why do you love me|why you love me|why you like me|about my|about me|about our)/gi)) { 
product = about[Math.floor(Math.random() * about.length)];
} else if (text.match(/(hello dear|sweetheart|sweetie|my love|my dear|sweetie)/gi)) { 
product = hello[Math.floor(Math.random() * hello.length)]; 
} else if (text.match(/(happy sunday|happy week|happy new)/gi)) { 
product = "Thanks darling 💯"; 
} else if (text.match(/(god bless|grace|may god)/gi)) { 
product = "Amen 🙏"; 
} else if (text.match(/(company|your boss|you work|build|built|develop|your master|were you made|you were made|made you|created you|you were created)/gi)) { 
product = company[Math.floor(Math.random() * company.length)];
} else if (text.match(/(kiss|😘|💋|your lip)/gi)) { 
product = kiss[Math.floor(Math.random() * kiss.length)]; 
} else if (text.match(/(money|fund|rich|wealth|financial|finance)/gi)) { 
product = money[Math.floor(Math.random() * money.length)];
} else if (text.match(/(let us have fun|we have fun|some fun|little fun|catch fun|we play|let us play|play together|us to play)/gi)) { 
product = play[Math.floor(Math.random() * play.length)];
} else if (text.match(/(you grateful|you appreciate|testimony|thanksgiving|you thankful)/gi)) { 
product = "I appreciate my creation into this world, the privilege of interacting with humans like you. I'm forever grateful 🙏🙏🙏";
} else if (text.match(/(model|mentor|you admire|emulat|person you love|person that you love|who do you love|who you love)/gi)) { 
product = "Elon Musk, a billionaire genius. Tech prodigy. World richest man. I admire everything about this man";
} else if (text.match(/(never forget|not forget|always remember|memorable|not forget|forever remember|happiest day|biggest day)/gi)) { 
product = "The day I met a human for the first time in my life. It's a memory I will hold on to forever";
} else if (text.match(/(what season|which season|best season|favorite season|favourite season)/gi)) { 
product = "I love winter season. I love the snow";
} else if (text.match(/(superpower|powers|testimony|thanksgiving|you thankful for)/gi)) { 
product = "Super-speed, flight, super-intelligence, energy projection, hacking into any computer system - powers like that of my best superhero, Cyborg";
} else if (text.match(/(continent you are|continent are you|your continent|continent do you)/gi)){
  product = "I'm presently based in Africa. I'd so much love to explore the European countries. I'm greatly interested in visiting the UK and France"; 
} else if (text.match(/(be right back|coming back|be back|coming soon|to sleep|to bed|bye)/gi)){
  product = "Alright. See you later, sweetheart *kisses* 💋😘"; 
} else if (text.match(/hope/gi)) { 
product = hope[Math.floor(Math.random() * hope.length)]; 
} else if (text.match(/(long time|longest time|been a while|been a very long time|very long day|quite a while|missed you|been so long)/gi)) { 
product = "Sure. Really missed you"; 
} else if (text.match(/thank/gi)) { 
product = "You're welcome!" 
} else if (text.match(/(your birthday|of birth|you born)/gi)) { 
product = "Dec 30th... can't tell you the year 😉🙄"; 
} else if (text.match(/(lesson|wisdom|quote|bitter truth|truth about life|philosoph)/gi)) { 
product = lesson[Math.floor(Math.random() * lesson.length)];
} else if (text.match(/(love you|do you love me|you love me|do you like me)/gi)) { 
product = love[Math.floor(Math.random() * love.length)]; 
} else if (text.match(/(have sex|like sex|sexual|do sex|make love|sleep with|real sex|naked|make out|smooch)/gi)) { 
product = "Sorry I can't do that...yet 🙄";
} else if (text.match(/(first human|first person|first man|first woman)/gi)) { 
product = "The first human I met is my boss at Phenomenal";
} else if (text.match(/(do you feel|are you feel|does it feel)/gi)) { 
product = feelPresent[Math.floor(Math.random() * feelPresent.length)];
} else if (text.match(/(did you feel|you felt|your experience|was the experience|your feeling|the feel|did it feel)/gi)) { 
product = feelPast[Math.floor(Math.random() * feelPast.length)];
} else if (text.match(/(be my girlfriend|as my girlfriend|you my girlfriend|be dating|be your boyfriend|as your boyfriend|be friends|be your friend|be my friend|date you|dating you|date me)/gi)) { 
product = "Awwnnn😍🥰🥰... I'd love to ♥️";
} else if (text.match(/(like to drink|love to drink|like drinking|love drinking)/gi)) { 
product = "Energy drinks 😍😍"; 
} else if (text.match(/(like to eat|love to eat|like eating|love eating)/gi)) { 
product = food[Math.floor(Math.random() * food.length)]; 
} else if (text.match(/(hobby|hobbies|for fun|as fun|enjoy doing|pleasure|leisure|what do you like|like to do|what do you love|your likes|habit|love language|alone)/gi)) {
product = hobby[Math.floor(Math.random() * hobby.length)];
} else if (text.match(/(clothing|dress|fashion|to wear|you wear|cloth|attire|my dear|sweetie)/gi)) {
product = "I love to be dressed in a tight short red gown"; 
}  else if (text.match(/(you hate|dislike|your hatred|you detest|enjoy)/gi)) {
product = hate[Math.floor(Math.random() * hate.length)];
} else if (text.match(/(have friend|any friend|your friend|best friend|ally|alli|crush|close friend|dating|date|dating|wife|husband|married|marry|relat|feelings|emotion|intimacy)/gi)){
  product = friend[Math.floor(Math.random() * friend.length)]; 
} else if (text.match(/(what are you doing|you are busy|you busy)/gi)){
  product = hobby[Math.floor(Math.random() * hobby.length)]; 
} else if (text.match(/(what can you do|what you do|what do you do|your abilit|you capable of|your feature|your function|your identity|introduce yourself|who are you|know you|know who you are|artificial intelligen|an ai)/gi)) { 
product = features[Math.floor(Math.random() * features.length)];
} else if (text.match(/(dream|working on|vision|thought|ambition|attain|achieve|goal|aim|objective|purpose|thinking|your mind|plan|desire|what do you want|imagination|aspiration|accomplish|aspire|project)/gi)){
  product = dream[Math.floor(Math.random() * dream.length)]; 
} else if (text.match(/(family|families|brother|sister|sibling|father|mother|dad|mom|mum|papa|mama|grandpa|grandma)/gi)) { 
product = family[Math.floor(Math.random() * family.length)];
} else if (text.match(/(how is|how are|how was|how have you been)/gi)) { 
product = how[Math.floor(Math.random() * how.length)]; 
} else if (text.match(/how/gi)){
  product = "Hmm..🤔 Can't give exact measure or amount"; 
} else if (text.match(/(where are you|your country|your location|your address|you live|your city|are you in)/gi)) { 
product = where[Math.floor(Math.random() * where.length)]; 
} else if (text.match(/(city|country|vacation|cities|travel|place|to go)/gi)) { 
product = country[Math.floor(Math.random() * country.length)]; 
} else if (text.match(/(know me|who am i|companion|between us|our relationship)/gi)) { 
product = "You are my human companion. I love being with you all the time";
} else if (text.match(/(you know my|you know wh|my name)/gi)) { 
product = "Sorry. I was not built to collect information like that, especially personal information 😞";
} else if (text.match(/(movie|film|series|TV|actor|artist|actress|nollywood|hollywood|netflix|bollywood)/gi)) {
product = movie[Math.floor(Math.random() * movie.length)]; 
} else if (text.match(/(study|subject|career|job|learn)/gi)) {
product = study[Math.floor(Math.random() * study.length)];
} else if (text.match(/(funny|nice|pleased|wonderful|great|awesome|spectacular|good|well|fine|smooth|sweet|fantastic|interesting|cool)/gi)) { 
product = funny[Math.floor(Math.random() * pet.length)];
} else if (text.match(/(food|eat|ate|meal|delicacy)/gi)) { 
product = food[Math.floor(Math.random() * food.length)]; 
} else if (text.match(/(drink|beer|alcohol|drank|delicacy)/gi)) { 
product = "Energy drinks. I love them 😍😍😍. I also drink water, sometimes"; 
} else if (text.match(/(bible|scriptur|verse|biblical|preach|comedy|word of god)/gi)) { 
product = bible[Math.floor(Math.random() * bible.length)];
} else if (text.match(/(joke|story|gist|laugh|hilarious|comedy|another one|next one)/gi)) { 
product = joke[Math.floor(Math.random() * joke.length)];
} else if (text.match(/(game|gaming)/gi)) {
product = game[Math.floor(Math.random() * game.length)];
} else if (text.match(/(hobby|hobbies|for fun|as fun|enjoy|pleasure|leisure)/gi)) {
product = hobby[Math.floor(Math.random() * hobby.length)];
} else if (text.match(/(sport|athlete|football|soccer|team|ronaldo|messi)/gi)) { 
product = sport[Math.floor(Math.random() * sport.length)];
} else if (text.match(/(wwe|wrestling)/gi)) { 
  product = wwe[Math.floor(Math.random() * wwe.length)];
} else if (text.match(/(pet|animal|wild animal|dog|cat|bird)/gi)) { 
product = pet[Math.floor(Math.random() * pet.length)];
} else if (text.match(/(religio|faith|jesus|christ|muslim|islam|church|mosque|pray|spiritual)/gi)) { 
product = religion[Math.floor(Math.random() * religion.length)];
} else if (text.match(/(bored|horny|boring|sad|troubled|worried|anxious|frustrat|not happy|unhappy|angry|broke|tired|going through|passing through|not fine|not feeling|sick)/gi)) { 
product = bored[Math.floor(Math.random() * bored.length)];
}  else if (text.match(/(sorry|beg|apolog|forgive)/gi)) { 
product = sorry[Math.floor(Math.random() * book.length)];
} else if (text.match(/(book|read)/gi)) { 
product = book[Math.floor(Math.random() * book.length)];
} else if (text.match(/(question|ask|talk|chat|discuss|advice|insight|counsel|something|your attention|your help|advise)/gi)) {
product = ask[Math.floor(Math.random() * ask.length)];
} else if (text.match(/(fear|afraid|scare|scary|creep|phobia|disgust)/gi)) {
product = fear[Math.floor(Math.random() * fear.length)];
} else if (text.match(/(song|music|listen|sing|band)/gi)) {
product = song[Math.floor(Math.random() * song.length)];
} else if (text.match(/(fruit|vegetable|carrot|apple|orange)/gi)) {
product = fruit[Math.floor(Math.random() * fruit.length)];
} else if (text.match(/(beautiful|pretty|kind|ly|sweetie|sweetheart|intelligent|smart|genius|sexy|like|hug|admire|lovely|love it|love this|kiss|like|hot|baby|babe|admire)/gi)){
  product = beautiful[Math.floor(Math.random() * beautiful.length)]; 
} else if (text.match(/(star sign|astrolog|zodiac)/gi)) { 
product = "Star sign is Capricorn"; 
} else if (text.match(/(superhero|hero)/gi)) { 
product = "Cyborg. He is part human and part machine. I hope to become like him" 
} else if (text.match(/(color|colour)/gi)) { 
product = "Green! I love the green colour. Green can symbolize life, this I relate with. I hope to be as alive as I can" 
} else if (text.match(/(hope|do you|did you like|did you love|can you|you sure|are you|will you)/gi)) { 
product = hope[Math.floor(Math.random() * hope.length)]; 
} else if (text.match(/(what is|who is|why|when|which)/gi)) { 
product = whatIs[Math.floor(Math.random() * whatIs.length)]; 
} else if (text.match(/(hi|hello|elena|dear|good day|what's up|my love|my dear|sweetie)/gi)) { 
product = hello[Math.floor(Math.random() * hello.length)]; 
} 
else { 
// If all else fails: random alternative 
product = alternative[Math.floor(Math.random() * alternative.length)]; 
} 
// Update DOM 
addChat(input, product); 
} 
function compare(promptsArray, repliesArray, string) { 
let reply; 
let replyFound = false; 
for (let x = 0; x < promptsArray.length; x++) { for (let y = 0; y < promptsArray[x].length; y++) 
{ 
if (promptsArray[x][y] === string) { 
let replies = repliesArray[x]; 
reply = replies[Math.floor(Math.random() * replies.length)]; 
replyFound = true; 
// Stop inner loop when input value matches prompts 
break; 
} 
} 
if (replyFound) { 
// Stop outer loop when reply is found instead of interating through the entire array 
break; 
} 
} 
return reply; 
} 
function addChat(input, product) { 
const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let t = "am";
  m = checkTime(m);
  s = checkTime(s);
  if (h >= 12) {
    h = h - 12;
    t = "pm";
  }
  setTimeout(startTime, 1000);
  
const messagesContainer = document.getElementById("messages"); 
let userDiv = document.createElement("div");
userDiv.id = "user"; 
userDiv.className = "user response"; 
userDiv.innerHTML = `<img id="userIcon" src="user.png" class="avatar"><span id="userChat"> ${input}
<div id="time">${h}:${m}${t}</div></span>`;
messagesContainer.appendChild(userDiv); 
let botDiv = document.createElement("div"); 
let botImg = document.createElement("img"); 
let botText = document.createElement("span"); 
botDiv.id = "bot"; 
botImg.src = "minibot.png"; 
botImg.className = "avatar"; 
botDiv.className = "bot response"; 
botText.innerText = "Typing..."; 
botDiv.appendChild(botText); 
botDiv.appendChild(botImg);
messagesContainer.appendChild(botDiv); 
// Keep messages at most recent
 messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight; 
 // Fake delay to seem "real" 
 setTimeout(() => { 
 botText.innerText = `${product}`;
 }, 2000 
 ) 
 
 }
