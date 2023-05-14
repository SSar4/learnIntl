import {
  LongDateFormatter,
  ShortDateFormatter,
} from "./concretClass/date/formatDate";

const today = new Date();
const shortDateFormatter = new ShortDateFormatter();
console.log("Formato curto:", shortDateFormatter.format(today));

const longDateFormatter = new LongDateFormatter();
console.log("Formato longo:", longDateFormatter.format("2023-04-14"));
