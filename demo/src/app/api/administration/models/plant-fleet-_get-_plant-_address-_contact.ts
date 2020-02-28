/* tslint:disable */
import { AddressFleet_get_plant_address_contact } from './address-fleet-_get-_plant-_address-_contact';
import { ContactFleet_get_plant_address_contact } from './contact-fleet-_get-_plant-_address-_contact';

/**
 * A Plant
 */
export interface PlantFleet_get_plant_address_contact {
  id?: string;

  /**
   * The label for the plant
   */
  label: string;

  /**
   * The size of the plant in Wp
   */
  plantSize?: number;

  /**
   * identifier of a data source (e.g. SolarLog S/N)
   */
  identifier: string;
  address?: AddressFleet_get_plant_address_contact;
  contacts?: Array<ContactFleet_get_plant_address_contact>;
}
