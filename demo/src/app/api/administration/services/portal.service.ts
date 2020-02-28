/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { AdministrationApiConfiguration as __Configuration } from '../administration-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PortalPortal_get } from '../models/portal-portal-_get';
import { PortalBa29ce51395d99f6a874d88de3e68258Portal_set } from '../models/portal-ba-29ce-51395d-99f-6a-874d-88de-3e-68258portal-_set';
@Injectable({
  providedIn: 'root',
})
class PortalService extends __BaseService {
  static readonly postPortalCollectionPath = '/portal';
  static readonly getPortalItemPath = '/portal/{id}';
  static readonly putPortalItemPath = '/portal/{id}';
  static readonly deletePortalItemPath = '/portal/{id}';
  static readonly getPortalCollectionPath = '/portals';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param portal The new Portal resource
   * @return Portal resource created
   */
  postPortalCollectionResponse(portal?: PortalBa29ce51395d99f6a874d88de3e68258Portal_set): __Observable<__StrictHttpResponse<PortalPortal_get>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = portal;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/portal`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PortalPortal_get>;
      })
    );
  }
  /**
   * @param portal The new Portal resource
   * @return Portal resource created
   */
  postPortalCollection(portal?: PortalBa29ce51395d99f6a874d88de3e68258Portal_set): __Observable<PortalPortal_get> {
    return this.postPortalCollectionResponse(portal).pipe(
      __map(_r => _r.body as PortalPortal_get)
    );
  }

  /**
   * @param id undefined
   * @return Portal resource response
   */
  getPortalItemResponse(id: string): __Observable<__StrictHttpResponse<PortalPortal_get>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/portal/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PortalPortal_get>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Portal resource response
   */
  getPortalItem(id: string): __Observable<PortalPortal_get> {
    return this.getPortalItemResponse(id).pipe(
      __map(_r => _r.body as PortalPortal_get)
    );
  }

  /**
   * @param params The `PortalService.PutPortalItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `portal`: The updated Portal resource
   *
   * @return Portal resource updated
   */
  putPortalItemResponse(params: PortalService.PutPortalItemParams): __Observable<__StrictHttpResponse<PortalPortal_get>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.portal;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/portal/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PortalPortal_get>;
      })
    );
  }
  /**
   * @param params The `PortalService.PutPortalItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `portal`: The updated Portal resource
   *
   * @return Portal resource updated
   */
  putPortalItem(params: PortalService.PutPortalItemParams): __Observable<PortalPortal_get> {
    return this.putPortalItemResponse(params).pipe(
      __map(_r => _r.body as PortalPortal_get)
    );
  }

  /**
   * @param id undefined
   */
  deletePortalItemResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/portal/${id}`,
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
  deletePortalItem(id: string): __Observable<null> {
    return this.deletePortalItemResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `PortalService.GetPortalCollectionParams` containing the following parameters:
   *
   * - `order[name]`:
   *
   * - `order[sdsDebitorNumber]`:
   *
   * - `order[domain]`:
   *
   * - `page`: The collection page number
   *
   * @return Portal collection response
   */
  getPortalCollectionResponse(params: PortalService.GetPortalCollectionParams): __Observable<__StrictHttpResponse<Array<PortalPortal_get>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.orderName != null) __params = __params.set('order[name]', params.orderName.toString());
    if (params.orderSdsDebitorNumber != null) __params = __params.set('order[sdsDebitorNumber]', params.orderSdsDebitorNumber.toString());
    if (params.orderDomain != null) __params = __params.set('order[domain]', params.orderDomain.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/portals`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PortalPortal_get>>;
      })
    );
  }
  /**
   * @param params The `PortalService.GetPortalCollectionParams` containing the following parameters:
   *
   * - `order[name]`:
   *
   * - `order[sdsDebitorNumber]`:
   *
   * - `order[domain]`:
   *
   * - `page`: The collection page number
   *
   * @return Portal collection response
   */
  getPortalCollection(params: PortalService.GetPortalCollectionParams): __Observable<Array<PortalPortal_get>> {
    return this.getPortalCollectionResponse(params).pipe(
      __map(_r => _r.body as Array<PortalPortal_get>)
    );
  }
}

module PortalService {

  /**
   * Parameters for putPortalItem
   */
  export interface PutPortalItemParams {
    id: string;

    /**
     * The updated Portal resource
     */
    portal?: PortalBa29ce51395d99f6a874d88de3e68258Portal_set;
  }

  /**
   * Parameters for getPortalCollection
   */
  export interface GetPortalCollectionParams {
    orderName?: string;
    orderSdsDebitorNumber?: string;
    orderDomain?: string;

    /**
     * The collection page number
     */
    page?: number;
  }
}

export { PortalService }
