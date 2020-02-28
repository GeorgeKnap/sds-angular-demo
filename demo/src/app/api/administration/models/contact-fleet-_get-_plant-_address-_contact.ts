/* tslint:disable */
import { AddressFleet_get_plant_address_contact } from './address-fleet-_get-_plant-_address-_contact';

/**
 * A Contact
 */
export interface ContactFleet_get_plant_address_contact {
  id?: string;
  lastName: string;
  firstName: string;
  company?: string;
  email: string;
  phoneNumber?: string;
  mobilePhoneNumber?: string;
  address?: AddressFleet_get_plant_address_contact;
  comment?: string;
}
