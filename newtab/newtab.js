const quotes = [
    "Push yourself because no one else is going to do it for you. by Puneeth K",
    "Great things never come from comfort zones. by Puneeth K",
    "Success does not just find you, you have to go out and get it. by Puneeth K",
    "Dream it. Wish it. Do it. by Puneeth K",
    "Do not stop when you are tired. Stop when you are done. by Puneeth K",
    "Wake up with determination, go to bed with satisfaction. by Puneeth K",
    "Do something today that your future self will thank you for. by Puneeth K",
    "Little things make big days. by Puneeth K",
    "It is going to be hard, but hard does not mean impossible. by Puneeth K",
    "Do not wait for opportunity. Create it. by Puneeth K",
    "Sometimes we are tested not to show our weaknesses, but to discover our strengths. by Puneeth K",
    "The harder you work for something, the greater you will feel when you achieve it. by Puneeth K",
    "Dream bigger. Do bigger. by Puneeth K",
    "Do not limit your challenges. Challenge your limits. by Puneeth K",
    "It is not about how bad you want it. It is about how hard you are willing to work for it. by Puneeth K",
    "The key to success is to focus on goals, not obstacles. by Puneeth K",
    "You did not come this far to only come this far. by Puneeth K",
    "Discipline is doing what needs to be done, even if you do not want to do it. by Puneeth K",
    "Push harder than yesterday if you want a different tomorrow. by Puneeth K",
    "Make your life a masterpiece. Imagine no limitations on what you can be, have, or do. by Puneeth K"
];


document.addEventListener('DOMContentLoaded', function() {
    const quoteElement = document.getElementById('quote');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
});
