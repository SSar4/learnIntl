import { BaseDateFormatter } from "./baseDateFormatter";

// Classe para formatar a data no formato curto (exemplo: "15/05/2023")
export class ShortDateFormatter extends BaseDateFormatter {
  constructor() {
    super({ day: "numeric", month: "numeric", year: "numeric" });
  }
}

// Classe para formatar a data no formato longo (exemplo: "15 de maio de 2023")
export class LongDateFormatter extends BaseDateFormatter {
  constructor() {
    super({ day: "numeric", month: "long", year: "numeric" });
  }
}
