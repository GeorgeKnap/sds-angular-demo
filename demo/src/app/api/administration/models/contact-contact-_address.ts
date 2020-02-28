/* tslint:disable */
import { AddressContact_address } from './address-contact-_address';

/**
 * A Contact
 */
export interface ContactContact_address {
  id?: string;
  lastName: string;
  firstName: string;
  company?: string;
  email: string;
  phoneNumber?: string;
  mobilePhoneNumber?: string;
  address?: AddressContact_address;
  comment?: string;
}
