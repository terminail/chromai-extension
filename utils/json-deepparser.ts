/**
 * Recursively parses JSON strings that are nested within objects.
 * 
 * This function handles deeply nested JSON structures where string values
 * themselves contain valid JSON that should be parsed into objects.
 * 
 * @param obj - The object or string to parse
 * @returns The parsed object with all nested JSON strings converted to objects
 */
export function deepParseJSON(obj: any): any {
  if (typeof obj === 'string') {
    try {
      return deepParseJSON(JSON.parse(obj));
    } catch (e) {
      return obj;
    }
  } else if (Array.isArray(obj)) {
    return obj.map(deepParseJSON);
  } else if (typeof obj === 'object' && obj !== null) {
    const result: any = {};
    for (const key in obj) {
      result[key] = deepParseJSON(obj[key]);
    }
    return result;
  }
  return obj;
}