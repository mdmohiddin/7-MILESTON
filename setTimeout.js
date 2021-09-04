function doSomething() {
      console.log('I am coding JavaScript');
}
console.log('First: ami sobar age');
console.log('Second: I am the second person');
// doSomething();
setTimeout(doSomething, 6000); /*setTimeout মানে যে সময় parameter এ set করে দিবে ঠিক তত সময় পরে output আসবে। এখানে মিলিসেকেন্ড হিসেবে টাইম নেয়, ১ সেকেন্ড=১০০০মি.লি. সেকেন্ড*/

setTimeout(function () {
      console.log('I am using VS Code');
}, 5000); /* এই অংশ বুঝিনাই */

setTimeout(() => {
      console.log('Exploring MDN articles');
}, 4000);

console.log('Third: ami 3 number baccha');
console.log('Fourth: ami ek hali purno korsi');