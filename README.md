1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
   
* getElementById("id"): এটা শুধু একটাই element ফেরত দেয়, যেটার id আমি দিয়েছি। সবসময় একটাই element পাওয়া যায়।
* getElementsByClassName("class"): এটা একই class নামের যতগুলো element আছে সবগুলোকে একটা লিস্ট আকারে দেয়।
* querySelector("selector"): এটা CSS selector দিয়ে element খুঁজে। শুধু প্রথম যেটা মিলে সেটা ফেরত দেয়।
* querySelectorAll("selector"): এটাও CSS selector দিয়ে খোঁজে, সবগুলো matching element লিস্ট আকারে ফেরত দেয়।

2. How do you create and insert a new element into the DOM?

প্রথমে document.createElement("div") দিয়ে একটা element বানাই। চাইলে এর ভেতরে কিছু লিখি innerText দিয়ে। চাইলে এর সাথে class, id, বা attribute যোগ করি।

3. What is Event Bubbling and how does it work?

যখন আমি কোনো child element এ event (যেমন click) করি, তাহলে সেটার উপরে যত parent থাকে, সব জায়গায় যাবে।

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation হলো একটা টেকনিক যেখানে আমি child element এ event listener না দিয়ে parent element এ বসাই। তারপর event.target দেখে বুঝতে পারি কোন child এ click হয়েছে।

কেন দরকার?
অনেকগুলো element থাকলে আলাদা আলাদা event বসাতে হয় না। নতুন element DOM এ add হলেও সেটা parent এর মাধ্যমে handle করা যায়।

5. What is the difference between preventDefault() and stopPropagation()?

* preventDefault(): element এর default কাজ বন্ধ করে। যেমন: form submit করলে normally page reload হয়, কিন্তু preventDefault দিলে reload হবে না।
* stopPropagation(): event টা parent এর দিকে উপরে আর যাবে না (to stop bubble phase)।