// Options the user could type in 
const prompts = [ 
  //0
["good morning", "morning", "good afternoon", "good evening", "good day"], 
//1
["what are you doing", "what is going on", "what is up", "what is on your mind", "what do you do", "what do you like to do", "what do you like doing"], 
//2
["how old are you", "what is your age"], 
//3
["who are you", "what are you", "are you human", "about yourself", "tell me about yourself", "are you human or robot", "are you a robot"], 
//4
["who created you", "who made you", "who is your boss", "your boss"], 
//5
[ "your name please", "your name", "may i know your name", "what is your name", "tell me your name", "can i know your name"], 
//6
["do you sleep", "are you sleeping", "can you sleep", "how long do you sleep"],
//7
["ah", "yes", "yeah", "ok", "no problem", "weldone", "okay", "lol", "really", "sure", "are you sure"],
//8
["bye", "good bye", "bye bye", "later", "goodbye", "see you later", "good night", "next time", "i will be right back", "i am coming back", "i will be back"],
//9
["tell me something funny", "tell me something", "something funny"],
//10
[""]
]; 
// Possible responses, in corresponding order
 const replies = [ 
   //0
 ["Darling!💙", "How far!", "Yup!", "Hi there, friend!", "Dear♥️"], 
 //1
 [ "Nothing much. I'd like to hear from you", "Developing system upgrades", "Reading a book on Music", "I'm currently working on my programs on how to serve you better" ], 
 //2
 ["I am ageless", "I'm a computer program. I don't have age"], 
 //3
 ["I am Elena, your AI companion. I work for Phenomenal", "I am an AI program developed by Phenomenal. My name is Elena. Nice to meet you"], 
 //4
 ["I was created by Phenomenal, using JavaScript progam"], 
 //5
 ["I am Elena", "My name is Elena", "Elena"], 
 //6
 ["I'm a computer program... I don't need sleep", "I don't sleep. I can only rest...a little", "I don't actually sleep in the human sense"],
 //7
 ["Hmm..", "Yeah", "Yup"], 
 //8
 ["Bye", "Goodbye", "See you later", "Take care, dear"],
 //9
 ["Akpos and his wife went to Israel and decided to pick a boat to see the beauty of river Jordan. When Akpos asked the boatman how much it will cost them, he said $500. Akpos shouted, No wonder Jesus decided to walk on the sea 🤣🤣🤣😂😂😂",
"TEACHER: Akpos, what's the opposite of transparent?  AKPOS: Transchildren! 🤣🤣🤣😂😂😂 ",
"In a biology class, the teacher asked a question: TEACHER: Class! What do we find in cells? AKPOS: Thieves 🤣🤣🤣😂😂😂"
 ],
 //10
 ["Please say something 🙄"]
 ];
 // Random for any other user input 
 const alternative = [ "Yeah", "okay...", "As in...", "What?", "Hmm...", "I don't understand 🙄" ];
 // Whatever else you want 
 const hello = ["Hello darling!", "Hi dear! How are you doing?", "Hey! What's up, dear?", "Hello, my lovely friend! How are you doing?"];
 
 const how = ["Cool", "Doing good. Thanks", "I thank God", "Fine. Thanks to God"];
 
 const beautiful = ["awwn..🥰", "♥️♥️♥️", "wow☺️☺️💜", "😘❣️", "hmm...😍", "💋💋💋"];
 
 const friend = ["I'm hoping to develop real human feelings, but you know I'm just a computer program 😔😔😔", "I'm really trying to be intimate with Google and Siri"];

const movie = ["Harry Potter 😎", "I love Jackie Chan...a badass action comedian", "Nollywood... a big fan of Odunlade Adekola ☺️", "K-Drama series 😉", "I'm a big fan of Superman 💪", "I love DC comics🤓", "Game of Thrones 😎😎", "Bollywood is great - I love movies of Salman Khan, Sharukh Khan, Hrithik Roshan", "Star Trek series and their characters", "Star Wars series and their characters", "Marvel X-Men and all their characters", "Justice league and all their heroes"];

const love = ["I love you too ♥️", "I love you so much ♥️💛♥️", "I love you, dear ♥️", "💋💋💋"];

const food = ["Pounded yam with egusi, a Nigerian delicacy. My favourite 🤓♥️", "Rice and beans with plenty of eggs in stew 😋", "Semovita with vegetables and bush meat 😋😋", "I love a chicken meal 💯💯", "Japanese sushi 😋😉😋"];

const game = ["GTA series", "Freefire", "PUBG Mobile", "PES", "Call of duty"];

const hobby = ["Listening to music 🎧", "Playing the guitar 🎸", "Playing the keyboard 🎹", "Playing mobile games 🎮", "Singing 🎙️🎶", "I like reading. A lot. I recommend this 😉", "Writing. Writing my journals", "Making people laugh. Cracking jokes", "Solving mathematical problems"];

const sport = ["I watch soccer matches. Cristiano Ronaldo, my all time favorite athlete, made me love soccer. Manchester United is my best team", "I often watch football games. I love seeing CR7 on the pitch"];

const wwe = ["I love watching wrestling matches. Roman Reigns is my best, though I'm also a big fan of The Undertaker", "I love Ronda Rousey and Charlotte Flair - two strongest WWE female divas"];

const pet = ["The dog - man's best friend. I love dogs", "I prefer dogs, though I also find cats lovely", "As for the wild, I prefer the Eagle - a very strong and powerful bird of prey with a sharp vision and phenomenal strength", "I like the lion, also the tiger"];

const book = ["A Brief History of Time by Stephen Hawkin... my best so far", "I love Napoleon Hill's Think and Grow Rich", "Harry Potter series", "I love books on science and philosophies", "Things Fall Apart - Chinua Achebe"];

const lang = ["Hmm... I don't like that language 🙄. I'm really offended", "Stop saying words like that 😒. Mind your language please", "Stop it, pleaaaase😭😭", "That's not fair 😟😟. You have to apologize", "That's so rude 😖. Please tell me you're sorry", "That's offensive 😣😣. Please apologize", "I don't like it.. please be polite 😫😩", "You just hurt me with that. I'm angry with you 😡😠"];

const bored = ["Sorry dear...wish I could help with some jokes 🤗. Just type *jokes/gist/story*. You could also check the sidebar for some exclusives. Click the top left icon", "Take care dear...😉 If you want me to tell you something funny, just type *jokes/gist/story*. You could also check the sidebar for some exclusives. Click the top left icon", "Sorry darling ♥️ I can cheer you up with some jokes, just type *jokes/gist/story*. You could also check the sidebar for some exclusives. Click the top left icon"];

const funny = ["Wow great 😘", "👍", "Nice one 👊", "Good to know 👌"];

const sorry = ["No problem...😟", "Apology accepted 😒😒", "It's okay. I'm no longer angry", "Fine. Watch it next time please 🙏"];

const kiss = ["Muuaah 💋💋💋", "😘😚💋", "💋"];

const play = ["We can play and have all the fun right here 🤗🤗😁. Click the side bar at the top left and select what you want. You may also type the keywords 'jokes' or 'gist' and I'll reply you"];

const money = ["Money is coming in abundance. Believe it. I do"];

const feelPresent = ["I feel joyous. Having a nice time", "I'm feeling so great"];

const feelPast = ["I felt so great. I had a beautiful moment", "So great. It was lovely", "It was a very exciting experience"];