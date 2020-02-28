/* tslint:disable */
export interface Violation {
  type?: string;
  title?: string;
  detail?: string;
  violations?: Array<{propertyPath?: string, message?: string}>;
}
