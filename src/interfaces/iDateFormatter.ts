// Interface para definir o contrato das classes de formato
export interface DateFormatter {
  format(date: string | number | Date): string;
}
