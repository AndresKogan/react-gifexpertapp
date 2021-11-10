const samples = [
  // OK
  '3(1+1)',
  '(a(c+b))',
  '(a(c+b)+d)',
  '(a(c+b)+(d))',
  '(a(c+b)+(d a s dsd))',
  '(a(dasdsd))',
  '(a)(dasdsd())',
  // KO
  '32134(',
  '32134)',
  '321(34)',
  '3)2134(',
  '3)213(4)(',
  '3())213(',
];

const isCorrect = (sample) => {
  return sample.length > 6;
}

console.table(
  samples.map(sample => ({
    sample,
    OK: isCorrect(sample),
  }))
);