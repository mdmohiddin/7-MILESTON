console.log('first');
// setInterval(() => {
      // console.log('tik tik tik tik')
// }, 2000)
// console.log('second');

// let seconds = 0;

// const timeId = setInterval(() => {
//       seconds++; /** এখানে ++ দেওয়ায় 1 থেকে গননা শুরু হবে */
//       console.log(seconds);
//       if (seconds > 15) {
//             clearInterval(timeId);
//       }
// }, 1000)
/* শর্ত ধরে দিলে অতটুকুতে গিয়ে setInterval বন্ধ হয়ে যাবে */
let seconds = 0;

const timeId = setInterval(() => {
      // seconds++;
      console.log(++seconds); /** ‍seconds এর পরে ++ দিলে 0 থেকে গননা শুরু হবে আর ++seconds ‍দিলে আগে বাড়াবে তারপরে */
      if (seconds > 15) {
            clearInterval(timeId);
      }
}, 1000)