/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { AdministrationApiConfiguration as __Configuration } from '../administration-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ContactContact_address } from '../models/contact-contact-_address';
@Injectable({
  providedIn: 'root',
})
class ContactService extends __BaseService {
  static readonly postContactCollectionPath = '/contact';
  static readonly getContactItemPath = '/contact/{id}';
  static readonly putContactItemPath = '/contact/{id}';
  static readonly deleteContactItemPath = '/contact/{id}';
  static readonly getContactCollectionPath = '/contacts';
  static readonly apiFleetsPlantsContactsGetSubresourcePath = '/fleet/{id}/plants/{plants}/contacts';
  static readonly apiPlantsContactsGetSubresourcePath = '/plants/{id}/contacts';
  static readonly apiPortalsFleetsPlantsContactsGetSubresourcePath = '/portals/{id}/fleets/{fleets}/plants/{plants}/contacts';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param contact The new Contact resource
   * @return Contact resource created
   */
  postContactCollectionResponse(contact?: ContactContact_address): __Observable<__StrictHttpResponse<ContactContact_address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = contact;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/contact`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContactContact_address>;
      })
    );
  }
  /**
   * @param contact The new Contact resource
   * @return Contact resource created
   */
  postContactCollection(contact?: ContactContact_address): __Observable<ContactContact_address> {
    return this.postContactCollectionResponse(contact).pipe(
      __map(_r => _r.body as ContactContact_address)
    );
  }

  /**
   * @param id undefined
   * @return Contact resource response
   */
  getContactItemResponse(id: string): __Observable<__StrictHttpResponse<ContactContact_address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/contact/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContactContact_address>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Contact resource response
   */
  getContactItem(id: string): __Observable<ContactContact_address> {
    return this.getContactItemResponse(id).pipe(
      __map(_r => _r.body as ContactContact_address)
    );
  }

  /**
   * @param params The `ContactService.PutContactItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `contact`: The updated Contact resource
   *
   * @return Contact resource updated
   */
  putContactItemResponse(params: ContactService.PutContactItemParams): __Observable<__StrictHttpResponse<ContactContact_address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.contact;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/contact/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContactContact_address>;
      })
    );
  }
  /**
   * @param params The `ContactService.PutContactItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `contact`: The updated Contact resource
   *
   * @return Contact resource updated
   */
  putContactItem(params: ContactService.PutContactItemParams): __Observable<ContactContact_address> {
    return this.putContactItemResponse(params).pipe(
      __map(_r => _r.body as ContactContact_address)
    );
  }

  /**
   * @param id undefined
   */
  deleteContactItemResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/contact/${id}`,
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
  deleteContactItem(id: string): __Observable<null> {
    return this.deleteContactItemResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param page The collection page number
   * @return Contact collection response
   */
  getContactCollectionResponse(page?: number): __Observable<__StrictHttpResponse<Array<ContactContact_address>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (page != null) __params = __params.set('page', page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/contacts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ContactContact_address>>;
      })
    );
  }
  /**
   * @param page The collection page number
   * @return Contact collection response
   */
  getContactCollection(page?: number): __Observable<Array<ContactContact_address>> {
    return this.getContactCollectionResponse(page).pipe(
      __map(_r => _r.body as Array<ContactContact_address>)
    );
  }

  /**
   * @param params The `ContactService.ApiFleetsPlantsContactsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `plants`:
   *
   * - `page`: The collection page number
   *
   * @return Contact collection response
   */
  apiFleetsPlantsContactsGetSubresourceResponse(params: ContactService.ApiFleetsPlantsContactsGetSubresourceParams): __Observable<__StrictHttpResponse<Array<ContactContact_address>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/fleet/${params.id}/plants/${params.plants}/contacts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ContactContact_address>>;
      })
    );
  }
  /**
   * @param params The `ContactService.ApiFleetsPlantsContactsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `plants`:
   *
   * - `page`: The collection page number
   *
   * @return Contact collection response
   */
  apiFleetsPlantsContactsGetSubresource(params: ContactService.ApiFleetsPlantsContactsGetSubresourceParams): __Observable<Array<ContactContact_address>> {
    return this.apiFleetsPlantsContactsGetSubresourceResponse(params).pipe(
      __map(_r => _r.body as Array<ContactContact_address>)
    );
  }

  /**
   * @param params The `ContactService.ApiPlantsContactsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `page`: The collection page number
   *
   * @return Contact collection response
   */
  apiPlantsContactsGetSubresourceResponse(params: ContactService.ApiPlantsContactsGetSubresourceParams): __Observable<__StrictHttpResponse<Array<ContactContact_address>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/plants/${params.id}/contacts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ContactContact_address>>;
      })
    );
  }
  /**
   * @param params The `ContactService.ApiPlantsContactsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `page`: The collection page number
   *
   * @return Contact collection response
   */
  apiPlantsContactsGetSubresource(params: ContactService.ApiPlantsContactsGetSubresourceParams): __Observable<Array<ContactContact_address>> {
    return this.apiPlantsContactsGetSubresourceResponse(params).pipe(
      __map(_r => _r.body as Array<ContactContact_address>)
    );
  }

  /**
   * @param params The `ContactService.ApiPortalsFleetsPlantsContactsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fleets`:
   *
   * - `plants`:
   *
   * - `page`: The collection page number
   *
   * @return Contact collection response
   */
  apiPortalsFleetsPlantsContactsGetSubresourceResponse(params: ContactService.ApiPortalsFleetsPlantsContactsGetSubresourceParams): __Observable<__StrictHttpResponse<Array<ContactContact_address>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/portals/${params.id}/fleets/${params.fleets}/plants/${params.plants}/contacts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ContactContact_address>>;
      })
    );
  }
  /**
   * @param params The `ContactService.ApiPortalsFleetsPlantsContactsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fleets`:
   *
   * - `plants`:
   *
   * - `page`: The collection page number
   *
   * @return Contact collection response
   */
  apiPortalsFleetsPlantsContactsGetSubresource(params: ContactService.ApiPortalsFleetsPlantsContactsGetSubresourceParams): __Observable<Array<ContactContact_address>> {
    return this.apiPortalsFleetsPlantsContactsGetSubresourceResponse(params).pipe(
      __map(_r => _r.body as Array<ContactContact_address>)
    );
  }
}

module ContactService {

  /**
   * Parameters for putContactItem
   */
  export interface PutContactItemParams {
    id: string;

    /**
     * The updated Contact resource
     */
    contact?: ContactContact_address;
  }

  /**
   * Parameters for apiFleetsPlantsContactsGetSubresource
   */
  export interface ApiFleetsPlantsContactsGetSubresourceParams {
    id: string;
    plants: string;

    /**
     * The collection page number
     */
    page?: number;
  }

  /**
   * Parameters for apiPlantsContactsGetSubresource
   */
  export interface ApiPlantsContactsGetSubresourceParams {
    id: string;

    /**
     * The collection page number
     */
    page?: number;
  }

  /**
   * Parameters for apiPortalsFleetsPlantsContactsGetSubresource
   */
  export interface ApiPortalsFleetsPlantsContactsGetSubresourceParams {
    id: string;
    fleets: string;
    plants: string;

    /**
     * The collection page number
     */
    page?: number;
  }
}

export { ContactService }
