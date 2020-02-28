/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { AdministrationApiConfiguration as __Configuration } from '../administration-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Address } from '../models/address';
import { AddressAddress } from '../models/address-address';
@Injectable({
  providedIn: 'root',
})
class AddressService extends __BaseService {
  static readonly postAddressCollectionPath = '/address';
  static readonly getAddressItemPath = '/address/{id}';
  static readonly putAddressItemPath = '/address/{id}';
  static readonly deleteAddressItemPath = '/address/{id}';
  static readonly getAddressCollectionPath = '/addresses';
  static readonly apiContactsAddressGetSubresourcePath = '/contacts/{id}/address';
  static readonly apiFleetsPlantsContactsAddressGetSubresourcePath = '/fleet/{id}/plants/{plants}/contacts/{contacts}/address';
  static readonly apiPlantsContactsAddressGetSubresourcePath = '/plants/{id}/contacts/{contacts}/address';
  static readonly apiPortalsFleetsPlantsContactsAddressGetSubresourcePath = '/portals/{id}/fleets/{fleets}/plants/{plants}/contacts/{contacts}/address';
  static readonly verifyAddressAddressItemPath = '/verifyaddress';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param address The new Address resource
   * @return Address resource created
   */
  postAddressCollectionResponse(address?: AddressAddress): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = address;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/address`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Address>;
      })
    );
  }
  /**
   * @param address The new Address resource
   * @return Address resource created
   */
  postAddressCollection(address?: AddressAddress): __Observable<Address> {
    return this.postAddressCollectionResponse(address).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * @param id undefined
   * @return Address resource response
   */
  getAddressItemResponse(id: string): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/address/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Address>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Address resource response
   */
  getAddressItem(id: string): __Observable<Address> {
    return this.getAddressItemResponse(id).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * @param params The `AddressService.PutAddressItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `address`: The updated Address resource
   *
   * @return Address resource updated
   */
  putAddressItemResponse(params: AddressService.PutAddressItemParams): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.address;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/address/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Address>;
      })
    );
  }
  /**
   * @param params The `AddressService.PutAddressItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `address`: The updated Address resource
   *
   * @return Address resource updated
   */
  putAddressItem(params: AddressService.PutAddressItemParams): __Observable<Address> {
    return this.putAddressItemResponse(params).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * @param id undefined
   */
  deleteAddressItemResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/address/${id}`,
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
  deleteAddressItem(id: string): __Observable<null> {
    return this.deleteAddressItemResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param page The collection page number
   * @return Address collection response
   */
  getAddressCollectionResponse(page?: number): __Observable<__StrictHttpResponse<Array<Address>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (page != null) __params = __params.set('page', page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/addresses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Address>>;
      })
    );
  }
  /**
   * @param page The collection page number
   * @return Address collection response
   */
  getAddressCollection(page?: number): __Observable<Array<Address>> {
    return this.getAddressCollectionResponse(page).pipe(
      __map(_r => _r.body as Array<Address>)
    );
  }

  /**
   * @param id undefined
   * @return Address resource response
   */
  apiContactsAddressGetSubresourceResponse(id: string): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/contacts/${id}/address`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Address>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Address resource response
   */
  apiContactsAddressGetSubresource(id: string): __Observable<Address> {
    return this.apiContactsAddressGetSubresourceResponse(id).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * @param params The `AddressService.ApiFleetsPlantsContactsAddressGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `plants`:
   *
   * - `contacts`:
   *
   * @return Address resource response
   */
  apiFleetsPlantsContactsAddressGetSubresourceResponse(params: AddressService.ApiFleetsPlantsContactsAddressGetSubresourceParams): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/fleet/${params.id}/plants/${params.plants}/contacts/${params.contacts}/address`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Address>;
      })
    );
  }
  /**
   * @param params The `AddressService.ApiFleetsPlantsContactsAddressGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `plants`:
   *
   * - `contacts`:
   *
   * @return Address resource response
   */
  apiFleetsPlantsContactsAddressGetSubresource(params: AddressService.ApiFleetsPlantsContactsAddressGetSubresourceParams): __Observable<Address> {
    return this.apiFleetsPlantsContactsAddressGetSubresourceResponse(params).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * @param params The `AddressService.ApiPlantsContactsAddressGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `contacts`:
   *
   * @return Address resource response
   */
  apiPlantsContactsAddressGetSubresourceResponse(params: AddressService.ApiPlantsContactsAddressGetSubresourceParams): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/plants/${params.id}/contacts/${params.contacts}/address`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Address>;
      })
    );
  }
  /**
   * @param params The `AddressService.ApiPlantsContactsAddressGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `contacts`:
   *
   * @return Address resource response
   */
  apiPlantsContactsAddressGetSubresource(params: AddressService.ApiPlantsContactsAddressGetSubresourceParams): __Observable<Address> {
    return this.apiPlantsContactsAddressGetSubresourceResponse(params).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * @param params The `AddressService.ApiPortalsFleetsPlantsContactsAddressGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fleets`:
   *
   * - `plants`:
   *
   * - `contacts`:
   *
   * @return Address resource response
   */
  apiPortalsFleetsPlantsContactsAddressGetSubresourceResponse(params: AddressService.ApiPortalsFleetsPlantsContactsAddressGetSubresourceParams): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;




    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/portals/${params.id}/fleets/${params.fleets}/plants/${params.plants}/contacts/${params.contacts}/address`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Address>;
      })
    );
  }
  /**
   * @param params The `AddressService.ApiPortalsFleetsPlantsContactsAddressGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fleets`:
   *
   * - `plants`:
   *
   * - `contacts`:
   *
   * @return Address resource response
   */
  apiPortalsFleetsPlantsContactsAddressGetSubresource(params: AddressService.ApiPortalsFleetsPlantsContactsAddressGetSubresourceParams): __Observable<Address> {
    return this.apiPortalsFleetsPlantsContactsAddressGetSubresourceResponse(params).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * @param params The `AddressService.VerifyAddressAddressItemParams` containing the following parameters:
   *
   * - `street`:
   *
   * - `houseNumber`:
   *
   * - `postalCode`:
   *
   * - `city`:
   *
   * - `country`:
   *
   * @return verified response contains the geo coordinates
   */
  verifyAddressAddressItemResponse(params: AddressService.VerifyAddressAddressItemParams): __Observable<__StrictHttpResponse<{latitude?: string, longitude?: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.street != null) __params = __params.set('street', params.street.toString());
    if (params.houseNumber != null) __params = __params.set('houseNumber', params.houseNumber.toString());
    if (params.postalCode != null) __params = __params.set('postalCode', params.postalCode.toString());
    if (params.city != null) __params = __params.set('city', params.city.toString());
    if (params.country != null) __params = __params.set('country', params.country.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/verifyaddress`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{latitude?: string, longitude?: string}>;
      })
    );
  }
  /**
   * @param params The `AddressService.VerifyAddressAddressItemParams` containing the following parameters:
   *
   * - `street`:
   *
   * - `houseNumber`:
   *
   * - `postalCode`:
   *
   * - `city`:
   *
   * - `country`:
   *
   * @return verified response contains the geo coordinates
   */
  verifyAddressAddressItem(params: AddressService.VerifyAddressAddressItemParams): __Observable<{latitude?: string, longitude?: string}> {
    return this.verifyAddressAddressItemResponse(params).pipe(
      __map(_r => _r.body as {latitude?: string, longitude?: string})
    );
  }
}

module AddressService {

  /**
   * Parameters for putAddressItem
   */
  export interface PutAddressItemParams {
    id: string;

    /**
     * The updated Address resource
     */
    address?: AddressAddress;
  }

  /**
   * Parameters for apiFleetsPlantsContactsAddressGetSubresource
   */
  export interface ApiFleetsPlantsContactsAddressGetSubresourceParams {
    id: string;
    plants: string;
    contacts: string;
  }

  /**
   * Parameters for apiPlantsContactsAddressGetSubresource
   */
  export interface ApiPlantsContactsAddressGetSubresourceParams {
    id: string;
    contacts: string;
  }

  /**
   * Parameters for apiPortalsFleetsPlantsContactsAddressGetSubresource
   */
  export interface ApiPortalsFleetsPlantsContactsAddressGetSubresourceParams {
    id: string;
    fleets: string;
    plants: string;
    contacts: string;
  }

  /**
   * Parameters for verifyAddressAddressItem
   */
  export interface VerifyAddressAddressItemParams {
    street?: string;
    houseNumber?: string;
    postalCode?: string;
    city?: string;
    country?: string;
  }
}

export { AddressService }
