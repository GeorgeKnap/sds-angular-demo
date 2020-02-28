/* tslint:disable */
import { AddressFleet_set_address_contact } from './address-fleet-_set-_address-_contact';

/**
 * A Contact
 */
export interface ContactFleet_set_address_contact {
  id?: string;
  lastName: string;
  firstName: string;
  company?: string;
  email: string;
  phoneNumber?: string;
  mobilePhoneNumber?: string;
  address?: AddressFleet_set_address_contact;
  comment?: string;
}
