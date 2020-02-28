import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FleetFleet_get_plant_address_contact } from 'src/app/api/administration/models';
import { FleetService } from '../../api/administration/services/fleet.service';

@Component({
  selector: 'app-fleets-list',
  templateUrl: './fleets-list.component.html',
  styleUrls: ['./fleets-list.component.css']
})
export class FleetsListComponent implements OnInit {

  fleets: Array<FleetFleet_get_plant_address_contact> = [];

  fleets$: Observable<Array<FleetFleet_get_plant_address_contact>>;

  constructor(
    private readonly apiService: FleetService,
    private readonly cd: ChangeDetectorRef
  ) {
    this.apiService.rootUrl = 'https://dev2.sds.world/api/administration';
   }

  ngOnInit(): void {
    this.fleets$ = this.apiService.getFleetCollection({ page: 1 });

    this.apiService.getFleetCollection({ page: 1 }).subscribe(fleets => {
      this.fleets = fleets;
      this.cd.markForCheck();
    });
  }

}
