const ConsoleWork = require('./ConsoleWork');
const Message = require('./Message');
const RandomWork = require('./RandomWork');

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
  }

  startGame() {
    ConsoleWork.print(`${this.#numbers / 1000}${Message.PURCHASE_MESSAGE}`);
    const lottoList = this.makeLottoList(this.#numbers / 1000);
    this.printLotttoList(lottoList);
  }

  makeLottoList(numberOfLotto) {
    const result = [];
    for (let i = 0; i < numberOfLotto; i++) {
      const lotto = this.makeOneLotto();
      result.push(lotto);
    }
    return result;
  }

  makeOneLotto() {
    const result = [];
    while (result.length < 6) {
      const number = RandomWork.makeRandom(1, 45);
      if (!result.includes(number)) {
        result.push(number);
      }
    }
    result.sort((a, b) => a - b);
    return result;
  }

  printLotttoList(lottoList) {
    for (let i = 0; i < lottoList.length; i++) {
      ConsoleWork.print(lottoList[i]);
    }
  }
}

module.exports = Lotto;
