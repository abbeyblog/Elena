const joke = [
"Practice makes perfect but then nobody is perfect so what’s the point of practicing? 🤣🤣🤣",
"A Professor was traveling by boat. On his way he asked the sailor: Do you know Biology, Ecology, Zoology, Geography, physiology? The sailor said no to all his questions. Professor said 'What the hell do you know on earth. You will die of illiteracy'. After a while the boat started sinking. The Sailor asked the Professor, 'do you know swiminology & escapology from sharkology?', The professor said no. Then the sailor said, Well, sharkology & crocodilogy will eat your assology, headology & you will dieology because of your mouthology. ",
"The first sign of madness is talking to yourself, the second sign is replying. ",
"They say that love is more important than money, have you ever tried paying your bills with a hug? 🤣",
"Teachers call it cheating, students call it teamwork 🤣🤣😂",
"Never steal. The government hates competition 🤣🤣😂",
"Happiness is waking up, looking at the clock and finding that you still have two hours left to sleep 😂😂",
"If there was an award for laziness I’d probably send somebody else to pick it up for me 🤣🤣",
"An onion can make people cry but there’s never been a vegetable that can make people laugh. 🤣😂😂",
"Who says nothing is impossible? I’ve been doing nothing for years 🤣😂😂 ",
"I only drink alchohol on days that end in y... 🤣🤣😂 ",
"If common sense is so common why are there so many people with out it? 🤣😂😂",
"Do not take life too seriously. You will never get out of it alive",
"When someone says “Can I ask you a question?” they didn’t really give you a choice",
"True laziness is being excited when plans get canceled",
"We are all here on earth to help others; what on earth the others are here for I don't know",
"There are only three things women need in life: food, water, and compliments. -Chris Rock",
"A man was arrested by the police after he stole his neighbour's clothes on the washing line.He claimed he was doing online shopping...",
"Valentine died for love, Romeo also died for love, Jack in Titanic died for love, Samson in the Bible died for love, Greek heroes Hercules and Achilles died for love. Even Jesus Christ died for love! Where are the women?",
"No matter how high the sky is, How deep the ocean is, How strong the wind is, How wide the river is, I just want to tell YOU They’re none of YOUR BUSINESS!",
"The real meaning of I'm finished is when at night you lock the door to kill a snake and then electricity goes off...",
"This is a story about four people named Everybody, Somebody, Anybody and Nobody. There was an important job to be done and Everybody was sure that Somebody would do it. Anybody could have done it, but Nobody did. Somebody got angry about this, because it was Everybody's job. Everybody thought Anybody could do it, but Nobody realized that Everybody wouldn't do it. It ended up that Everybody blamed Somebody when Nobody did what Anybody could have done!",
"WIFE: I should have married the devil. Even he would make a better husband than you. HUSBAND: But honey, marriage between relatives is illegal",
"A man calls into the police station and says, 'My wife is missing.' The officer asks, 'How long has she been gone?' 'A month.' 'Why did you wait so long to report it?' 'Well, until yesterday I thought it was just a dream, then I realized I didn't have any clean clothes to wear.",
"A pastor was praying for a demon-possessed man. He shouted, 'In the name of Jesus, what do you want from this Man?! Speak! Before I cast you out into the lake of fire!' The demon in the man said, 'I want him to win the National Lottery Draw worth 200million naira tonight'. The pastor subtly lowered the microphone and whispered, 'Get out of him and enter into me.' ",
"GIRL: Sweetie, I want you to treat me the same way South Africa treated the Late Nelson Mandela.  BOY: Very good Idea, lets start with 27 years in Prison",
"Good medical advice from the Jewish sages of old: --- 1. F***ing once a week is good for your health, but it's harmful if done every day. --- 2. F***ing relaxes your mind and body. --- 3. F***ing refreshes you. --- 4. After F***ing, don't eat too much; go for more liquids.  --- 5. Try f***ing in bed because it can save you valuable energy. --- 6. F***ing can even reduce your cholesterol levels.So remember, FASTING is good for your health and may God cleanse your dirty mind!",
"When words are not enough…. To express your feelings…. Dont think you’re in LOVE….You just need to join… ENGLISH SPEAKING COURSE", 
"A man was about dying. In his last request, he pleaded with his wife to marry Joe.  WIFE: Joe? Isn't he your worst enemy? The very one who wants you dead?  HUSBAND: Yes. Marry him!  WIFE: No, I wont!  HUSBAND: Please do!  WIFE: Why?  HUSBAND: Because all these years I have suffered, let him suffer too!"

];

function jokes() {
  document.getElementById('jokes').innerHTML = joke[Math.floor(Math.random() * joke.length)];
    }
function back() {
  window.location.replace("main.html");
}