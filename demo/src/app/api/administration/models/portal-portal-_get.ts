/* tslint:disable */
export interface PortalPortal_get {

  /**
   * Unique identifier of the portal
   */
  id?: string;
  name: string;
  sdsDebitorNumber: string;
  subdomain: string;
  host?: string;
  domain?: string;
  fleets?: Array<string>;
}
