import BankCardForm from "./BankCardForm";

test("Checks, that new form creates: ", () => {
  const bankCardForm = new BankCardForm();
  expect(bankCardForm).toBeDefined();
});

test("Shows that form  has checkCardValidation: ", () => {
  const bankCardForm = new BankCardForm();
  expect(bankCardForm.checkCardValidation).toBeDefined();
});

describe("checkCardValidation method", () => {
  test("Shows that form checkCardValidation working with VISA valid cards: ", () => {
    const bankCardForm = new BankCardForm();
    const validVisaCardNumbersArray = [
      "4242424242424242",
      "4111111111111111",
      "4716059713971128",
      "4539469134658342",
      "4012888888881881",
      "4000000000000002",
    ];

    expect(bankCardForm.checkCardValidation).toBeDefined();

    for (let bankCardNumber of validVisaCardNumbersArray) {
      expect(bankCardForm.checkCardValidation(bankCardNumber)).toBeTruthy();
    }
  });

  test("Shows that form checkCardValidation working with MasterCard valid cards: ", () => {
    const bankCardForm = new BankCardForm();
    const validMasterCardNumbersArray = [
      "5554842174171979",
      "5500000000000004",
      "5238236929549825",
      "5339080833183281",
      "5555555555554444",
      "5105105105105100",
    ];

    expect(bankCardForm.checkCardValidation).toBeDefined();

    for (let bankCardNumber of validMasterCardNumbersArray) {
      expect(bankCardForm.checkCardValidation(bankCardNumber)).toBeTruthy();
    }
  });

  test("Shows that form checkCardValidation not working with invalid cards: ", () => {
    const bankCardForm = new BankCardForm();
    const invalidCardsNumbersArray = [
      "4242424242424243",
      "4222222222222222",
      "5100000000000512",
      "4111111111111112",
      "4716059713971126",
      "4539469134658343",
      "4012888888881885",
      "4000000000000000",
      "5554842174171982",
      "5500000000000000",
      "5238236929549828",
      "5339080833183289",
      "5555555555554442",
      "5105105105105103",
    ];

    expect(bankCardForm.checkCardValidation).toBeDefined();

    for (let bankCardNumber of invalidCardsNumbersArray) {
      expect(bankCardForm.checkCardValidation(bankCardNumber)).toBeFalsy();
    }
  });
});
