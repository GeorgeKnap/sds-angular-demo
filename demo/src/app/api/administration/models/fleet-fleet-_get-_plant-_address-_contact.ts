/* tslint:disable */
import { PlantFleet_get_plant_address_contact } from './plant-fleet-_get-_plant-_address-_contact';
import { ContactFleet_get_plant_address_contact } from './contact-fleet-_get-_plant-_address-_contact';

/**
 * A Fleet
 */
export interface FleetFleet_get_plant_address_contact {

  /**
   * Unique identifier of the fleet
   */
  id?: string;
  name: string;

  /**
   * The size of all assigned plants in Wp
   */
  fleetSize?: string;

  /**
   * The Description of the fleet
   */
  description?: string;

  /**
   * Number of plants assigned to fleet
   */
  plantCount?: number;
  plants?: Array<PlantFleet_get_plant_address_contact>;
  portal?: string;
  contact?: ContactFleet_get_plant_address_contact;
  defaultFleet?: boolean;
}
