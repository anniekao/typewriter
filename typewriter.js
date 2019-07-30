const sentence = 'The meaning of life is that it stops. -- Franz Kafka';
let secs = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  },secs);
  secs += 50;
}

setTimeout(() => {
  process.stdout.write('\n');
}, secs);

