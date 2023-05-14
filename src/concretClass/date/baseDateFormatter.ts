import { DateFormatter } from "../../../src/interfaces/iDateFormatter";

// Implementação base da classe abstrata para formatação de datas
export abstract class BaseDateFormatter implements DateFormatter {
  protected options: Intl.DateTimeFormatOptions;

  constructor(options: Intl.DateTimeFormatOptions) {
    this.options = options;
  }
  /**
   * @param {string | number | Date} date - A data a ser formatada (pode ser uma string, número ou objeto Date).
   * @returns {string} A data formatada como uma string.
   * @throws {Error} Se a data fornecida for inválida.
   * @throws {string} Uma mensagem de erro personalizada indicando a data inválida.
   */
  format(date: string | number | Date): string {
    const dateObj = new Date(date);

    // Verificar se o objeto Date é inválido após a conversão
    if (isNaN(dateObj.getTime())) {
      throw new Error("Data inválida");
    }
    return new Intl.DateTimeFormat(undefined, this.options).format(dateObj);
  }
}
