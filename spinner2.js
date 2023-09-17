const string = [
  "\r|",
  "\r/",
  "\r-",
  "\r\\",
  "\r|",
  "\r/",
  "\r-",
  "\r\\",
  "\r|",
  "\n",
];
let delay = 100;

for (const char of string) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 200;
}
