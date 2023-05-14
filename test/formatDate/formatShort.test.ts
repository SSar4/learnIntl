import { expect } from "chai";
import { describe, it, beforeEach } from "mocha";
import { ShortDateFormatter } from "../../src/concretClass/date/formatDate";
import { DateFormatter } from "../../src/interfaces/iDateFormatter";
describe("ShortDateFormatter", () => {
  let formatter: DateFormatter;

  beforeEach(function () {
    formatter = new ShortDateFormatter();
  });

  it("should format date in short format", () => {
    const formattedDate = formatter.format(new Date(2023, 4, 15));
    expect(formattedDate).to.equal("15/05/2023");
  });

  it("should format date in short format when input getTime", () => {
    const formattedDate = formatter.format(1680490800000);
    expect(formattedDate).to.equal("03/04/2023");
  });

  it("should throw new error if invalid date", () => {
    const invalidDate = new Date("2023-55-99"); // Data inválida
    expect(() => formatter.format(invalidDate)).to.throw(
      Error,
      "Data inválida"
    );
  });

  it("should throw new error if invalid date", () => {
    const invalidDate = new Date("2023-55-99"); // Data inválida
    expect(() => formatter.format(invalidDate)).to.throw(
      Error,
      "Data inválida"
    );
  });
});
