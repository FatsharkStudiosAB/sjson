/** Serializacion and deserializacion of Simplified JSON (SJSON). */
declare module 'simplified-json' {
  /**
   * Converts a SJSON into an object.
   * @param text A valid SJSON string.
   */
  export function parse(value: string): any;
  /**
   * Converts a JavaScript value to a SJSON string.
   * @param value A JavaScript value, usually an object or array, to be converted.
   */
  export function stringify(value: any): string;
}