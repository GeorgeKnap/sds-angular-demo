/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { AdministrationApiConfiguration as __Configuration } from '../administration-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Location } from '../models/location';
@Injectable({
  providedIn: 'root',
})
class LocationService extends __BaseService {
  static readonly getFleetLocationCollectionPath = '/fleet/{id}/plants/locations';
  static readonly getLocationItemPath = '/locations/{id}';
  static readonly putLocationItemPath = '/locations/{id}';
  static readonly deleteLocationItemPath = '/locations/{id}';
  static readonly getPortalLocationCollectionPath = '/portal/plants/locations';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `LocationService.GetFleetLocationCollectionParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `page`: The collection page number
   *
   * @return Location collection response
   */
  getFleetLocationCollectionResponse(params: LocationService.GetFleetLocationCollectionParams): __Observable<__StrictHttpResponse<Array<Location>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/fleet/${params.id}/plants/locations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Location>>;
      })
    );
  }
  /**
   * @param params The `LocationService.GetFleetLocationCollectionParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `page`: The collection page number
   *
   * @return Location collection response
   */
  getFleetLocationCollection(params: LocationService.GetFleetLocationCollectionParams): __Observable<Array<Location>> {
    return this.getFleetLocationCollectionResponse(params).pipe(
      __map(_r => _r.body as Array<Location>)
    );
  }

  /**
   * @param id undefined
   * @return Location resource response
   */
  getLocationItemResponse(id: string): __Observable<__StrictHttpResponse<Location>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/locations/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Location>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Location resource response
   */
  getLocationItem(id: string): __Observable<Location> {
    return this.getLocationItemResponse(id).pipe(
      __map(_r => _r.body as Location)
    );
  }

  /**
   * @param params The `LocationService.PutLocationItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `location`: The updated Location resource
   *
   * @return Location resource updated
   */
  putLocationItemResponse(params: LocationService.PutLocationItemParams): __Observable<__StrictHttpResponse<Location>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.location;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/locations/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Location>;
      })
    );
  }
  /**
   * @param params The `LocationService.PutLocationItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `location`: The updated Location resource
   *
   * @return Location resource updated
   */
  putLocationItem(params: LocationService.PutLocationItemParams): __Observable<Location> {
    return this.putLocationItemResponse(params).pipe(
      __map(_r => _r.body as Location)
    );
  }

  /**
   * @param id undefined
   */
  deleteLocationItemResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/locations/${id}`,
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
  deleteLocationItem(id: string): __Observable<null> {
    return this.deleteLocationItemResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `LocationService.GetPortalLocationCollectionParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `page`: The collection page number
   *
   * @return Location collection response
   */
  getPortalLocationCollectionResponse(params: LocationService.GetPortalLocationCollectionParams): __Observable<__StrictHttpResponse<Array<Location>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/portal/plants/locations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Location>>;
      })
    );
  }
  /**
   * @param params The `LocationService.GetPortalLocationCollectionParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `page`: The collection page number
   *
   * @return Location collection response
   */
  getPortalLocationCollection(params: LocationService.GetPortalLocationCollectionParams): __Observable<Array<Location>> {
    return this.getPortalLocationCollectionResponse(params).pipe(
      __map(_r => _r.body as Array<Location>)
    );
  }
}

module LocationService {

  /**
   * Parameters for getFleetLocationCollection
   */
  export interface GetFleetLocationCollectionParams {
    id: string;

    /**
     * The collection page number
     */
    page?: number;
  }

  /**
   * Parameters for putLocationItem
   */
  export interface PutLocationItemParams {
    id: string;

    /**
     * The updated Location resource
     */
    location?: Location;
  }

  /**
   * Parameters for getPortalLocationCollection
   */
  export interface GetPortalLocationCollectionParams {
    id: string;

    /**
     * The collection page number
     */
    page?: number;
  }
}

export { LocationService }
