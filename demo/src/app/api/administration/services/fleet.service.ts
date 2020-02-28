/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { AdministrationApiConfiguration as __Configuration } from '../administration-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FleetFleet_get_plant_address_contact } from '../models/fleet-fleet-_get-_plant-_address-_contact';
import { FleetEf671666fdcab6fc69d29f55085d044cFleet_set } from '../models/fleet-ef-671666fdcab-6fc-69d-29f-55085d-044c-fleet-_set';
import { FleetFleet_set_address_contact } from '../models/fleet-fleet-_set-_address-_contact';
import { UpdateFleetPlantsDelta } from '../models/update-fleet-plants-delta';
@Injectable({
  providedIn: 'root',
})
class FleetService extends __BaseService {
  static readonly postFleetCollectionPath = '/fleet';
  static readonly getFleetItemPath = '/fleet/{id}';
  static readonly putFleetItemPath = '/fleet/{id}';
  static readonly deleteFleetItemPath = '/fleet/{id}';
  static readonly getFleetCollectionPath = '/fleets';
  static readonly apiPortalsFleetsGetSubresourcePath = '/portals/{id}/fleets';
  static readonly putFleetIdPlantsDeltaPath = '/fleet/{id}/plants-delta';
  static readonly postFleetVerifyPath = '/fleet/verify';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param fleet The new Fleet resource
   * @return Fleet resource created
   */
  postFleetCollectionResponse(fleet?: FleetEf671666fdcab6fc69d29f55085d044cFleet_set): __Observable<__StrictHttpResponse<FleetFleet_get_plant_address_contact>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = fleet;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/fleet`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FleetFleet_get_plant_address_contact>;
      })
    );
  }
  /**
   * @param fleet The new Fleet resource
   * @return Fleet resource created
   */
  postFleetCollection(fleet?: FleetEf671666fdcab6fc69d29f55085d044cFleet_set): __Observable<FleetFleet_get_plant_address_contact> {
    return this.postFleetCollectionResponse(fleet).pipe(
      __map(_r => _r.body as FleetFleet_get_plant_address_contact)
    );
  }

  /**
   * @param id undefined
   * @return Fleet resource response
   */
  getFleetItemResponse(id: string): __Observable<__StrictHttpResponse<FleetFleet_get_plant_address_contact>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/fleet/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FleetFleet_get_plant_address_contact>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Fleet resource response
   */
  getFleetItem(id: string): __Observable<FleetFleet_get_plant_address_contact> {
    return this.getFleetItemResponse(id).pipe(
      __map(_r => _r.body as FleetFleet_get_plant_address_contact)
    );
  }

  /**
   * @param params The `FleetService.PutFleetItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fleet`: The updated Fleet resource
   *
   * @return Fleet resource updated
   */
  putFleetItemResponse(params: FleetService.PutFleetItemParams): __Observable<__StrictHttpResponse<FleetFleet_get_plant_address_contact>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.fleet;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/fleet/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FleetFleet_get_plant_address_contact>;
      })
    );
  }
  /**
   * @param params The `FleetService.PutFleetItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fleet`: The updated Fleet resource
   *
   * @return Fleet resource updated
   */
  putFleetItem(params: FleetService.PutFleetItemParams): __Observable<FleetFleet_get_plant_address_contact> {
    return this.putFleetItemResponse(params).pipe(
      __map(_r => _r.body as FleetFleet_get_plant_address_contact)
    );
  }

  /**
   * @param id undefined
   */
  deleteFleetItemResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/fleet/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  deleteFleetItem(id: string): __Observable<null> {
    return this.deleteFleetItemResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `FleetService.GetFleetCollectionParams` containing the following parameters:
   *
   * - `name`:
   *
   * - `description`:
   *
   * - `searchOperator`: Use "AND" or "OR"
   *
   * - `page`: The collection page number
   *
   * @return Fleet collection response
   */
  getFleetCollectionResponse(params: FleetService.GetFleetCollectionParams): __Observable<__StrictHttpResponse<Array<FleetFleet_get_plant_address_contact>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.description != null) __params = __params.set('description', params.description.toString());
    if (params.searchOperator != null) __params = __params.set('searchOperator', params.searchOperator.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/fleets`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FleetFleet_get_plant_address_contact>>;
      })
    );
  }
  /**
   * @param params The `FleetService.GetFleetCollectionParams` containing the following parameters:
   *
   * - `name`:
   *
   * - `description`:
   *
   * - `searchOperator`: Use "AND" or "OR"
   *
   * - `page`: The collection page number
   *
   * @return Fleet collection response
   */
  getFleetCollection(params: FleetService.GetFleetCollectionParams): __Observable<Array<FleetFleet_get_plant_address_contact>> {
    return this.getFleetCollectionResponse(params).pipe(
      __map(_r => _r.body as Array<FleetFleet_get_plant_address_contact>)
    );
  }

  /**
   * @param params The `FleetService.ApiPortalsFleetsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `name`:
   *
   * - `description`:
   *
   * - `searchOperator`: Use "AND" or "OR"
   *
   * - `page`: The collection page number
   *
   * @return Fleet collection response
   */
  apiPortalsFleetsGetSubresourceResponse(params: FleetService.ApiPortalsFleetsGetSubresourceParams): __Observable<__StrictHttpResponse<Array<FleetFleet_get_plant_address_contact>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.description != null) __params = __params.set('description', params.description.toString());
    if (params.searchOperator != null) __params = __params.set('searchOperator', params.searchOperator.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/portals/${params.id}/fleets`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FleetFleet_get_plant_address_contact>>;
      })
    );
  }
  /**
   * @param params The `FleetService.ApiPortalsFleetsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `name`:
   *
   * - `description`:
   *
   * - `searchOperator`: Use "AND" or "OR"
   *
   * - `page`: The collection page number
   *
   * @return Fleet collection response
   */
  apiPortalsFleetsGetSubresource(params: FleetService.ApiPortalsFleetsGetSubresourceParams): __Observable<Array<FleetFleet_get_plant_address_contact>> {
    return this.apiPortalsFleetsGetSubresourceResponse(params).pipe(
      __map(_r => _r.body as Array<FleetFleet_get_plant_address_contact>)
    );
  }

  /**
   * @param params The `FleetService.PutFleetIdPlantsDeltaParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fleetPlantsDelta`:
   */
  putFleetIdPlantsDeltaResponse(params: FleetService.PutFleetIdPlantsDeltaParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.fleetPlantsDelta;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/fleet/${params.id}/plants-delta`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `FleetService.PutFleetIdPlantsDeltaParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fleetPlantsDelta`:
   */
  putFleetIdPlantsDelta(params: FleetService.PutFleetIdPlantsDeltaParams): __Observable<null> {
    return this.putFleetIdPlantsDeltaResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param name undefined
   */
  postFleetVerifyResponse(name?: any): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = name;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/fleet/verify`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param name undefined
   */
  postFleetVerify(name?: any): __Observable<null> {
    return this.postFleetVerifyResponse(name).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module FleetService {

  /**
   * Parameters for putFleetItem
   */
  export interface PutFleetItemParams {
    id: string;

    /**
     * The updated Fleet resource
     */
    fleet?: FleetFleet_set_address_contact;
  }

  /**
   * Parameters for getFleetCollection
   */
  export interface GetFleetCollectionParams {
    name?: string;
    description?: string;

    /**
     * Use "AND" or "OR"
     */
    searchOperator?: string;

    /**
     * The collection page number
     */
    page?: number;
  }

  /**
   * Parameters for apiPortalsFleetsGetSubresource
   */
  export interface ApiPortalsFleetsGetSubresourceParams {
    id: string;
    name?: string;
    description?: string;

    /**
     * Use "AND" or "OR"
     */
    searchOperator?: string;

    /**
     * The collection page number
     */
    page?: number;
  }

  /**
   * Parameters for putFleetIdPlantsDelta
   */
  export interface PutFleetIdPlantsDeltaParams {
    id: string;
    fleetPlantsDelta?: UpdateFleetPlantsDelta;
  }
}

export { FleetService }
