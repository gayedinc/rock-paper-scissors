let userChoice = prompt("taş, kağıt makas?");

let computerChoice = ["taş", "kağıt", "makas"].at(Math.floor(Math.random() * 3));


if (userChoice === computerChoice) {
  console.log('Berabere');

} else if (userChoice === 'taş' && computerChoice === 'kağıt') {
  console.log('Bilgisayar kazandı, kağıt taşı sarar :(' + " " + 'Bilgisayarın seçimi: ' + computerChoice);

} else if (userChoice === 'taş' && computerChoice === 'makas') {
  console.log('Sen kazandın, taş makası kırar!' + " " + 'Bilgisayarın seçimi: ' + computerChoice);

} else if (userChoice === 'kağıt' && computerChoice === 'taş') {
  console.log('Sen kazandın, kağıt taşı sarar!' + " " + 'Bilgisayarın seçimi: ' + computerChoice);

} else if (userChoice === 'kağıt' && computerChoice === 'makas') {
  console.log('Bilgisayar kazandı, makas kağıdı keser :(' + " " + 'Bilgisayarın seçimi: ' + computerChoice);
}
else if (userChoice === 'makas' && computerChoice === 'taş') {
  console.log('Bilgisayar kazandı, taş makası kırar :(' + " " + 'Bilgisayarın seçimi: ' + computerChoice);
}
else if (userChoice === 'makas' && computerChoice === 'kağıt') {
  console.log('Sen kazandın, makas kağıdı keser!' + " " + 'Bilgisayarın seçimi: ' + computerChoice);
}
else {
  console.log('Lütfen taş, kağıt veya makas giriniz.');
}
