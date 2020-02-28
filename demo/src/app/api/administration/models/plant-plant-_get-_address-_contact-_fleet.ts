/* tslint:disable */
import { FleetPlant_get_address_contact_fleet } from './fleet-plant-_get-_address-_contact-_fleet';
import { AddressPlant_get_address_contact_fleet } from './address-plant-_get-_address-_contact-_fleet';
import { ContactPlant_get_address_contact_fleet } from './contact-plant-_get-_address-_contact-_fleet';

/**
 * A Plant
 */
export interface PlantPlant_get_address_contact_fleet {
  vendor: string;
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
   * The status of the plant
   */
  plantStatus: 'activated' | 'deactivated' | 'cancelled';

  /**
   * The date when the plant was setup or even persisted
   */
  createdAt?: string;

  /**
   * Allowed values "PM", "WIFI", "GPRS", "BT"
   */
  functionalities?: Array<string>;
  firmware?: string;
  firmwareDate?: string;
  firmwareVersion?: string;
  deviceFullName?: string;
  ffufId?: number;

  /**
   * identifier of a data source (e.g. SolarLog S/N)
   */
  identifier: string;

  /**
   * The date of the last data transfer from the data source
   */
  lastTransfer?: string;
  configStatus?: number;

  /**
   * Number of fleet assigned to plant
   */
  fleetCount?: number;
  latitude?: number;
  longitude?: number;
  fleets?: Array<FleetPlant_get_address_contact_fleet>;
  address?: AddressPlant_get_address_contact_fleet;
  contacts?: Array<ContactPlant_get_address_contact_fleet>;

  /**
   * //TODO Change this field to auto fill when authentication is available, must not be given when creating the plant
   */
  plantCreator: string;
  crcVersion?: number;
}
