/* tslint:disable */
import { ContactPlant_get_address_contact_fleet } from './contact-plant-_get-_address-_contact-_fleet';

/**
 * A Fleet
 */
export interface FleetPlant_get_address_contact_fleet {

  /**
   * Unique identifier of the fleet
   */
  id?: string;
  name: string;

  /**
   * The Description of the fleet
   */
  description?: string;

  /**
   * Number of plants assigned to fleet
   */
  plantCount?: number;
  contact?: ContactPlant_get_address_contact_fleet;
  defaultFleet?: boolean;
}
