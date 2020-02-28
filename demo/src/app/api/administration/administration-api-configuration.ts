/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for AdministrationApi services
 */
@Injectable({
  providedIn: 'root',
})
export class AdministrationApiConfiguration {
  rootUrl: string = '';
}

export interface AdministrationApiConfigurationInterface {
  rootUrl?: string;
}
