// create your loops here.

/* Create a for loop which runs ten times
prints the numbers from 0 to 9 in the browser console. */
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log('\n');
/* Create a for loop which runs a total of 10 times,
increments its initialized variable by 2 for each iteration,
console logs the value of the loop's variable. */
for (var i = 0; i < 20; i += 2) {
  console.log(i);
}
console.log('\n');

/* Create a for loop which runs one hundred times in reverse
prints the string 'Time till explosion: ' with the loop's variable value
concatenated onto the end of it. */
for (var i = 100; i >= 0; i--) {
  console.log('Time till explosion: ' + i + '!');
}
