/* tslint:disable */
import { AddressPlant_put_address_contact_fleet } from './address-plant-_put-_address-_contact-_fleet';

/**
 * A Contact
 */
export interface ContactPlant_put_address_contact_fleet {
  id?: string;
  lastName: string;
  firstName: string;
  company?: string;
  email: string;
  phoneNumber?: string;
  mobilePhoneNumber?: string;
  address?: AddressPlant_put_address_contact_fleet;
  comment?: string;
}
