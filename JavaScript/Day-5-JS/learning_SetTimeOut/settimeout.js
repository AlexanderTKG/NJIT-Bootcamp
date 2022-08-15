function every5Sec(count) {}

setTimeout(every5Sec, 3000);

for (count = 0; count < 60; count++) {
  setTimeout(every5Sec, 10000);
  console.log(every5Sec);
}
