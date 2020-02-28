/* tslint:disable */
import { FleetPlant_put_address_contact_fleet } from './fleet-plant-_put-_address-_contact-_fleet';
import { AddressPlant_put_address_contact_fleet } from './address-plant-_put-_address-_contact-_fleet';
import { ContactPlant_put_address_contact_fleet } from './contact-plant-_put-_address-_contact-_fleet';

/**
 * A Plant
 */
export interface PlantPlant_put_address_contact_fleet {
  latitude?: number;

  /**
   * The label for the plant
   */
  label: string;

  /**
   * Allowed values "PM", "WIFI", "GPRS", "BT"
   */
  functionalities?: Array<string>;
  vendor: string;

  /**
   * identifier of a data source (e.g. SolarLog S/N)
   */
  identifier: string;

  /**
   * The date of the last data transfer from the data source
   */
  lastTransfer?: string;

  /**
   * The status of the plant
   */
  plantStatus: 'activated' | 'deactivated' | 'cancelled';
  longitude?: number;
  fleets?: Array<FleetPlant_put_address_contact_fleet>;
  address?: AddressPlant_put_address_contact_fleet;
  contacts?: Array<ContactPlant_put_address_contact_fleet>;

  /**
   * //TODO Change this field to auto fill when authentication is available, must not be given when creating the plant
   */
  plantCreator: string;
  easyCode: string;
}
