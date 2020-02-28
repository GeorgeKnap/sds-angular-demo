/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AdministrationApiConfiguration, AdministrationApiConfigurationInterface } from './administration-api-configuration';

import { AddressService } from './services/address.service';
import { ContactService } from './services/contact.service';
import { FleetService } from './services/fleet.service';
import { PlantService } from './services/plant.service';
import { LocationService } from './services/location.service';
import { PortalService } from './services/portal.service';
import { UserService } from './services/user.service';
import { EasyVerificationService } from './services/easy-verification.service';

/**
 * Provider for all AdministrationApi services, plus AdministrationApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    AdministrationApiConfiguration,
    AddressService,
    ContactService,
    FleetService,
    PlantService,
    LocationService,
    PortalService,
    UserService,
    EasyVerificationService
  ],
})
export class AdministrationApiModule {
  static forRoot(customParams: AdministrationApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: AdministrationApiModule,
      providers: [
        {
          provide: AdministrationApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
