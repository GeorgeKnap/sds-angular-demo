/* tslint:disable */
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable as __Observable } from 'rxjs';
import { filter as __filter, map as __map } from 'rxjs/operators';
import { AdministrationApiConfiguration as __Configuration } from '../administration-api-configuration';
import { BaseService as __BaseService } from '../base-service';
import { PlantPlant_get_address_contact_fleet } from '../models/plant-plant-_get-_address-_contact-_fleet';
import { PlantPlant_only_label_fleets } from '../models/plant-plant-_only-_label-_fleets';
import { PlantPlant_put_address_contact_fleet } from '../models/plant-plant-_put-_address-_contact-_fleet';
import { UpdatePlantFleetsDelta } from '../models/update-plant-fleets-delta';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';

@Injectable({
  providedIn: 'root',
})
class PlantService extends __BaseService {
  static readonly getPlantsByFleetPlantCollectionPath = '/fleet/{id}/plants';
  static readonly postPlantCollectionPath = '/plant';
  static readonly getPlantItemPath = '/plant/{id}';
  static readonly putPlantItemPath = '/plant/{id}';
  static readonly deletePlantItemPath = '/plant/{id}';
  static readonly getOnlylabelandfleetsPlantItemPath = '/plant/{id}/onlylabelandfleets';
  static readonly getPlantCollectionPath = '/plants';
  static readonly apiPortalsFleetsPlantsGetSubresourcePath = '/portals/{id}/fleets/{fleets}/plants';
  static readonly putPlantIdFleetsDeltaPath = '/plant/{id}/fleets-delta';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `PlantService.GetPlantsByFleetPlantCollectionParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `order[label]`:
   *
   * - `order[plantSize]`:
   *
   * - `order[firmwareVersion]`:
   *
   * - `order[deviceFullName]`:
   *
   * - `order[lastTransfer]`:
   *
   * - `order[address.postalCode]`:
   *
   * - `order[address.city]`:
   *
   * - `id[]`:
   *
   * - `firmwareVersion`:
   *
   * - `deviceFullName`:
   *
   * - `identifier`:
   *
   * - `order[identifier]`:
   *
   * - `searchOperator`: Use "AND" or "OR"
   *
   * - `plantSize[between]`:
   *
   * - `plantSize[gt]`:
   *
   * - `plantSize[gte]`:
   *
   * - `plantSize[lt]`:
   *
   * - `plantSize[lte]`:
   *
   * - `lastTransfer[before]`:
   *
   * - `lastTransfer[strictly_before]`:
   *
   * - `lastTransfer[after]`:
   *
   * - `lastTransfer[strictly_after]`:
   *
   * - `page`: The collection page number
   *
   * - `label`:
   *
   * @return Plant collection response
   */
  getPlantsByFleetPlantCollectionResponse(params: PlantService.GetPlantsByFleetPlantCollectionParams): __Observable<__StrictHttpResponse<Array<PlantPlant_get_address_contact_fleet>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.orderLabel != null) __params = __params.set('order[label]', params.orderLabel.toString());
    if (params.orderPlantSize != null) __params = __params.set('order[plantSize]', params.orderPlantSize.toString());
    if (params.orderFirmwareVersion != null) __params = __params.set('order[firmwareVersion]', params.orderFirmwareVersion.toString());
    if (params.orderDeviceFullName != null) __params = __params.set('order[deviceFullName]', params.orderDeviceFullName.toString());
    if (params.orderLastTransfer != null) __params = __params.set('order[lastTransfer]', params.orderLastTransfer.toString());
    if (params.orderAddressPostalCode != null) __params = __params.set('order[address.postalCode]', params.orderAddressPostalCode.toString());
    if (params.orderAddressCity != null) __params = __params.set('order[address.city]', params.orderAddressCity.toString());
    if (params.firmwareVersion != null) __params = __params.set('firmwareVersion', params.firmwareVersion.toString());
    if (params.deviceFullName != null) __params = __params.set('deviceFullName', params.deviceFullName.toString());
    if (params.identifier != null) __params = __params.set('identifier', params.identifier.toString());
    if (params.orderIdentifier != null) __params = __params.set('order[identifier]', params.orderIdentifier.toString());
    if (params.searchOperator != null) __params = __params.set('searchOperator', params.searchOperator.toString());
    if (params.plantSizeBetween != null) __params = __params.set('plantSize[between]', params.plantSizeBetween.toString());
    if (params.plantSizeGt != null) __params = __params.set('plantSize[gt]', params.plantSizeGt.toString());
    if (params.plantSizeGte != null) __params = __params.set('plantSize[gte]', params.plantSizeGte.toString());
    if (params.plantSizeLt != null) __params = __params.set('plantSize[lt]', params.plantSizeLt.toString());
    if (params.plantSizeLte != null) __params = __params.set('plantSize[lte]', params.plantSizeLte.toString());
    if (params.lastTransferBefore != null) __params = __params.set('lastTransfer[before]', params.lastTransferBefore.toString());
    if (params.lastTransferStrictlyBefore != null) __params = __params.set('lastTransfer[strictly_before]', params.lastTransferStrictlyBefore.toString());
    if (params.lastTransferAfter != null) __params = __params.set('lastTransfer[after]', params.lastTransferAfter.toString());
    if (params.lastTransferStrictlyAfter != null) __params = __params.set('lastTransfer[strictly_after]', params.lastTransferStrictlyAfter.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.label != null) __params = __params.set('label', params.label.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/fleet/${params.id}/plants`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PlantPlant_get_address_contact_fleet>>;
      })
    );
  }
  /**
   * @param params The `PlantService.GetPlantsByFleetPlantCollectionParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `order[label]`:
   *
   * - `order[plantSize]`:
   *
   * - `order[firmwareVersion]`:
   *
   * - `order[deviceFullName]`:
   *
   * - `order[lastTransfer]`:
   *
   * - `order[address.postalCode]`:
   *
   * - `order[address.city]`:
   *
   * - `id[]`:
   *
   * - `firmwareVersion`:
   *
   * - `deviceFullName`:
   *
   * - `identifier`:
   *
   * - `order[identifier]`:
   *
   * - `searchOperator`: Use "AND" or "OR"
   *
   * - `plantSize[between]`:
   *
   * - `plantSize[gt]`:
   *
   * - `plantSize[gte]`:
   *
   * - `plantSize[lt]`:
   *
   * - `plantSize[lte]`:
   *
   * - `lastTransfer[before]`:
   *
   * - `lastTransfer[strictly_before]`:
   *
   * - `lastTransfer[after]`:
   *
   * - `lastTransfer[strictly_after]`:
   *
   * - `page`: The collection page number
   *
   * - `label`:
   *
   * @return Plant collection response
   */
  getPlantsByFleetPlantCollection(params: PlantService.GetPlantsByFleetPlantCollectionParams): __Observable<Array<PlantPlant_get_address_contact_fleet>> {
    return this.getPlantsByFleetPlantCollectionResponse(params).pipe(
      __map(_r => _r.body as Array<PlantPlant_get_address_contact_fleet>)
    );
  }

  /**
   * @param plant The new Plant resource
   * @return Plant resource created
   */
  postPlantCollectionResponse(plant?: PlantPlant_put_address_contact_fleet): __Observable<__StrictHttpResponse<PlantPlant_get_address_contact_fleet>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = plant;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/plant`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PlantPlant_get_address_contact_fleet>;
      })
    );
  }
  /**
   * @param plant The new Plant resource
   * @return Plant resource created
   */
  postPlantCollection(plant?: PlantPlant_put_address_contact_fleet): __Observable<PlantPlant_get_address_contact_fleet> {
    return this.postPlantCollectionResponse(plant).pipe(
      __map(_r => _r.body as PlantPlant_get_address_contact_fleet)
    );
  }

  /**
   * @param id undefined
   * @return Plant resource response
   */
  getPlantItemResponse(id: string): __Observable<__StrictHttpResponse<PlantPlant_get_address_contact_fleet>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/plant/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PlantPlant_get_address_contact_fleet>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Plant resource response
   */
  getPlantItem(id: string): __Observable<PlantPlant_get_address_contact_fleet> {
    return this.getPlantItemResponse(id).pipe(
      __map(_r => _r.body as PlantPlant_get_address_contact_fleet)
    );
  }

  /**
   * @param params The `PlantService.PutPlantItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `plant`: The updated Plant resource
   *
   * @return Plant resource updated
   */
  putPlantItemResponse(params: PlantService.PutPlantItemParams): __Observable<__StrictHttpResponse<PlantPlant_get_address_contact_fleet>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.plant;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/plant/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PlantPlant_get_address_contact_fleet>;
      })
    );
  }
  /**
   * @param params The `PlantService.PutPlantItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `plant`: The updated Plant resource
   *
   * @return Plant resource updated
   */
  putPlantItem(params: PlantService.PutPlantItemParams): __Observable<PlantPlant_get_address_contact_fleet> {
    return this.putPlantItemResponse(params).pipe(
      __map(_r => _r.body as PlantPlant_get_address_contact_fleet)
    );
  }

  /**
   * @param id undefined
   */
  deletePlantItemResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/plant/${id}`,
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
  deletePlantItem(id: string): __Observable<null> {
    return this.deletePlantItemResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return Plant resource response
   */
  getOnlylabelandfleetsPlantItemResponse(id: string): __Observable<__StrictHttpResponse<PlantPlant_only_label_fleets>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/plant/${id}/onlylabelandfleets`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PlantPlant_only_label_fleets>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Plant resource response
   */
  getOnlylabelandfleetsPlantItem(id: string): __Observable<PlantPlant_only_label_fleets> {
    return this.getOnlylabelandfleetsPlantItemResponse(id).pipe(
      __map(_r => _r.body as PlantPlant_only_label_fleets)
    );
  }

  /**
   * @param params The `PlantService.GetPlantCollectionParams` containing the following parameters:
   *
   * - `label`:
   *
   * - `order[label]`:
   *
   * - `order[plantSize]`:
   *
   * - `order[firmwareVersion]`:
   *
   * - `order[deviceFullName]`:
   *
   * - `order[lastTransfer]`:
   *
   * - `order[address.postalCode]`:
   *
   * - `order[address.city]`:
   *
   * - `id[]`:
   *
   * - `firmwareVersion`:
   *
   * - `deviceFullName`:
   *
   * - `identifier`:
   *
   * - `order[identifier]`:
   *
   * - `searchOperator`: Use "AND" or "OR"
   *
   * - `plantSize[between]`:
   *
   * - `plantSize[gt]`:
   *
   * - `plantSize[gte]`:
   *
   * - `plantSize[lt]`:
   *
   * - `plantSize[lte]`:
   *
   * - `lastTransfer[before]`:
   *
   * - `lastTransfer[strictly_before]`:
   *
   * - `lastTransfer[after]`:
   *
   * - `lastTransfer[strictly_after]`:
   *
   * - `page`: The collection page number
   *
   * @return Plant collection response
   */
  getPlantCollectionResponse(params: PlantService.GetPlantCollectionParams): __Observable<__StrictHttpResponse<Array<PlantPlant_get_address_contact_fleet>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.label != null) __params = __params.set('label', params.label.toString());
    if (params.orderLabel != null) __params = __params.set('order[label]', params.orderLabel.toString());
    if (params.orderPlantSize != null) __params = __params.set('order[plantSize]', params.orderPlantSize.toString());
    if (params.orderFirmwareVersion != null) __params = __params.set('order[firmwareVersion]', params.orderFirmwareVersion.toString());
    if (params.orderDeviceFullName != null) __params = __params.set('order[deviceFullName]', params.orderDeviceFullName.toString());
    if (params.orderLastTransfer != null) __params = __params.set('order[lastTransfer]', params.orderLastTransfer.toString());
    if (params.orderAddressPostalCode != null) __params = __params.set('order[address.postalCode]', params.orderAddressPostalCode.toString());
    if (params.orderAddressCity != null) __params = __params.set('order[address.city]', params.orderAddressCity.toString());
    (params.id || []).forEach(val => {if (val != null) __params = __params.append('id[]', val.toString())});
    if (params.firmwareVersion != null) __params = __params.set('firmwareVersion', params.firmwareVersion.toString());
    if (params.deviceFullName != null) __params = __params.set('deviceFullName', params.deviceFullName.toString());
    if (params.identifier != null) __params = __params.set('identifier', params.identifier.toString());
    if (params.orderIdentifier != null) __params = __params.set('order[identifier]', params.orderIdentifier.toString());
    if (params.searchOperator != null) __params = __params.set('searchOperator', params.searchOperator.toString());
    if (params.plantSizeBetween != null) __params = __params.set('plantSize[between]', params.plantSizeBetween.toString());
    if (params.plantSizeGt != null) __params = __params.set('plantSize[gt]', params.plantSizeGt.toString());
    if (params.plantSizeGte != null) __params = __params.set('plantSize[gte]', params.plantSizeGte.toString());
    if (params.plantSizeLt != null) __params = __params.set('plantSize[lt]', params.plantSizeLt.toString());
    if (params.plantSizeLte != null) __params = __params.set('plantSize[lte]', params.plantSizeLte.toString());
    if (params.lastTransferBefore != null) __params = __params.set('lastTransfer[before]', params.lastTransferBefore.toString());
    if (params.lastTransferStrictlyBefore != null) __params = __params.set('lastTransfer[strictly_before]', params.lastTransferStrictlyBefore.toString());
    if (params.lastTransferAfter != null) __params = __params.set('lastTransfer[after]', params.lastTransferAfter.toString());
    if (params.lastTransferStrictlyAfter != null) __params = __params.set('lastTransfer[strictly_after]', params.lastTransferStrictlyAfter.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/plants`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PlantPlant_get_address_contact_fleet>>;
      })
    );
  }
  /**
   * @param params The `PlantService.GetPlantCollectionParams` containing the following parameters:
   *
   * - `label`:
   *
   * - `order[label]`:
   *
   * - `order[plantSize]`:
   *
   * - `order[firmwareVersion]`:
   *
   * - `order[deviceFullName]`:
   *
   * - `order[lastTransfer]`:
   *
   * - `order[address.postalCode]`:
   *
   * - `order[address.city]`:
   *
   * - `id[]`:
   *
   * - `firmwareVersion`:
   *
   * - `deviceFullName`:
   *
   * - `identifier`:
   *
   * - `order[identifier]`:
   *
   * - `searchOperator`: Use "AND" or "OR"
   *
   * - `plantSize[between]`:
   *
   * - `plantSize[gt]`:
   *
   * - `plantSize[gte]`:
   *
   * - `plantSize[lt]`:
   *
   * - `plantSize[lte]`:
   *
   * - `lastTransfer[before]`:
   *
   * - `lastTransfer[strictly_before]`:
   *
   * - `lastTransfer[after]`:
   *
   * - `lastTransfer[strictly_after]`:
   *
   * - `page`: The collection page number
   *
   * @return Plant collection response
   */
  getPlantCollection(params: PlantService.GetPlantCollectionParams): __Observable<Array<PlantPlant_get_address_contact_fleet>> {
    return this.getPlantCollectionResponse(params).pipe(
      __map(_r => _r.body as Array<PlantPlant_get_address_contact_fleet>)
    );
  }

  /**
   * @param params The `PlantService.ApiPortalsFleetsPlantsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fleets`:
   *
   * - `order[label]`:
   *
   * - `order[identifier]`:
   *
   * - `order[plantSize]`:
   *
   * - `order[firmwareVersion]`:
   *
   * - `order[deviceFullName]`:
   *
   * - `order[lastTransfer]`:
   *
   * - `order[address.postalCode]`:
   *
   * - `order[address.city]`:
   *
   * - `id[]`:
   *
   * - `firmwareVersion`:
   *
   * - `deviceFullName`:
   *
   * - `page`: The collection page number
   *
   * - `label`:
   *
   * - `searchOperator`: Use "AND" or "OR"
   *
   * - `plantSize[between]`:
   *
   * - `plantSize[gt]`:
   *
   * - `plantSize[gte]`:
   *
   * - `plantSize[lt]`:
   *
   * - `plantSize[lte]`:
   *
   * - `lastTransfer[before]`:
   *
   * - `lastTransfer[strictly_before]`:
   *
   * - `lastTransfer[after]`:
   *
   * - `lastTransfer[strictly_after]`:
   *
   * - `identifier`:
   *
   * @return Plant collection response
   */
  apiPortalsFleetsPlantsGetSubresourceResponse(params: PlantService.ApiPortalsFleetsPlantsGetSubresourceParams): __Observable<__StrictHttpResponse<Array<PlantPlant_get_address_contact_fleet>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.orderLabel != null) __params = __params.set('order[label]', params.orderLabel.toString());
    if (params.orderIdentifier != null) __params = __params.set('order[identifier]', params.orderIdentifier.toString());
    if (params.orderPlantSize != null) __params = __params.set('order[plantSize]', params.orderPlantSize.toString());
    if (params.orderFirmwareVersion != null) __params = __params.set('order[firmwareVersion]', params.orderFirmwareVersion.toString());
    if (params.orderDeviceFullName != null) __params = __params.set('order[deviceFullName]', params.orderDeviceFullName.toString());
    if (params.orderLastTransfer != null) __params = __params.set('order[lastTransfer]', params.orderLastTransfer.toString());
    if (params.orderAddressPostalCode != null) __params = __params.set('order[address.postalCode]', params.orderAddressPostalCode.toString());
    if (params.orderAddressCity != null) __params = __params.set('order[address.city]', params.orderAddressCity.toString());
    if (params.firmwareVersion != null) __params = __params.set('firmwareVersion', params.firmwareVersion.toString());
    if (params.deviceFullName != null) __params = __params.set('deviceFullName', params.deviceFullName.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.label != null) __params = __params.set('label', params.label.toString());
    if (params.searchOperator != null) __params = __params.set('searchOperator', params.searchOperator.toString());
    if (params.plantSizeBetween != null) __params = __params.set('plantSize[between]', params.plantSizeBetween.toString());
    if (params.plantSizeGt != null) __params = __params.set('plantSize[gt]', params.plantSizeGt.toString());
    if (params.plantSizeGte != null) __params = __params.set('plantSize[gte]', params.plantSizeGte.toString());
    if (params.plantSizeLt != null) __params = __params.set('plantSize[lt]', params.plantSizeLt.toString());
    if (params.plantSizeLte != null) __params = __params.set('plantSize[lte]', params.plantSizeLte.toString());
    if (params.lastTransferBefore != null) __params = __params.set('lastTransfer[before]', params.lastTransferBefore.toString());
    if (params.lastTransferStrictlyBefore != null) __params = __params.set('lastTransfer[strictly_before]', params.lastTransferStrictlyBefore.toString());
    if (params.lastTransferAfter != null) __params = __params.set('lastTransfer[after]', params.lastTransferAfter.toString());
    if (params.lastTransferStrictlyAfter != null) __params = __params.set('lastTransfer[strictly_after]', params.lastTransferStrictlyAfter.toString());
    if (params.identifier != null) __params = __params.set('identifier', params.identifier.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/portals/${params.id}/fleets/${params.fleets}/plants`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PlantPlant_get_address_contact_fleet>>;
      })
    );
  }
  /**
   * @param params The `PlantService.ApiPortalsFleetsPlantsGetSubresourceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fleets`:
   *
   * - `order[label]`:
   *
   * - `order[identifier]`:
   *
   * - `order[plantSize]`:
   *
   * - `order[firmwareVersion]`:
   *
   * - `order[deviceFullName]`:
   *
   * - `order[lastTransfer]`:
   *
   * - `order[address.postalCode]`:
   *
   * - `order[address.city]`:
   *
   * - `id[]`:
   *
   * - `firmwareVersion`:
   *
   * - `deviceFullName`:
   *
   * - `page`: The collection page number
   *
   * - `label`:
   *
   * - `searchOperator`: Use "AND" or "OR"
   *
   * - `plantSize[between]`:
   *
   * - `plantSize[gt]`:
   *
   * - `plantSize[gte]`:
   *
   * - `plantSize[lt]`:
   *
   * - `plantSize[lte]`:
   *
   * - `lastTransfer[before]`:
   *
   * - `lastTransfer[strictly_before]`:
   *
   * - `lastTransfer[after]`:
   *
   * - `lastTransfer[strictly_after]`:
   *
   * - `identifier`:
   *
   * @return Plant collection response
   */
  apiPortalsFleetsPlantsGetSubresource(params: PlantService.ApiPortalsFleetsPlantsGetSubresourceParams): __Observable<Array<PlantPlant_get_address_contact_fleet>> {
    return this.apiPortalsFleetsPlantsGetSubresourceResponse(params).pipe(
      __map(_r => _r.body as Array<PlantPlant_get_address_contact_fleet>)
    );
  }

  /**
   * @param params The `PlantService.PutPlantIdFleetsDeltaParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `plantFleetsDelta`:
   */
  putPlantIdFleetsDeltaResponse(params: PlantService.PutPlantIdFleetsDeltaParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.plantFleetsDelta;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/plant/${params.id}/fleets-delta`,
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
   * @param params The `PlantService.PutPlantIdFleetsDeltaParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `plantFleetsDelta`:
   */
  putPlantIdFleetsDelta(params: PlantService.PutPlantIdFleetsDeltaParams): __Observable<null> {
    return this.putPlantIdFleetsDeltaResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module PlantService {

  /**
   * Parameters for getPlantsByFleetPlantCollection
   */
  export interface GetPlantsByFleetPlantCollectionParams {
    id: string;
    orderLabel?: string;
    orderPlantSize?: string;
    orderFirmwareVersion?: string;
    orderDeviceFullName?: string;
    orderLastTransfer?: string;
    orderAddressPostalCode?: string;
    orderAddressCity?: string;
    firmwareVersion?: string;
    deviceFullName?: string;
    identifier?: string;
    orderIdentifier?: string;

    /**
     * Use "AND" or "OR"
     */
    searchOperator?: string;
    plantSizeBetween?: string;
    plantSizeGt?: string;
    plantSizeGte?: string;
    plantSizeLt?: string;
    plantSizeLte?: string;
    lastTransferBefore?: string;
    lastTransferStrictlyBefore?: string;
    lastTransferAfter?: string;
    lastTransferStrictlyAfter?: string;

    /**
     * The collection page number
     */
    page?: number;
    label?: string;
  }

  /**
   * Parameters for putPlantItem
   */
  export interface PutPlantItemParams {
    id: string;

    /**
     * The updated Plant resource
     */
    plant?: PlantPlant_put_address_contact_fleet;
  }

  /**
   * Parameters for getPlantCollection
   */
  export interface GetPlantCollectionParams {
    label?: string;
    orderLabel?: string;
    orderPlantSize?: string;
    orderFirmwareVersion?: string;
    orderDeviceFullName?: string;
    orderLastTransfer?: string;
    orderAddressPostalCode?: string;
    orderAddressCity?: string;
    id?: Array<string>;
    firmwareVersion?: string;
    deviceFullName?: string;
    identifier?: string;
    orderIdentifier?: string;

    /**
     * Use "AND" or "OR"
     */
    searchOperator?: string;
    plantSizeBetween?: string;
    plantSizeGt?: string;
    plantSizeGte?: string;
    plantSizeLt?: string;
    plantSizeLte?: string;
    lastTransferBefore?: string;
    lastTransferStrictlyBefore?: string;
    lastTransferAfter?: string;
    lastTransferStrictlyAfter?: string;

    /**
     * The collection page number
     */
    page?: number;
  }

  /**
   * Parameters for apiPortalsFleetsPlantsGetSubresource
   */
  export interface ApiPortalsFleetsPlantsGetSubresourceParams {
    id: string;
    fleets: string;
    orderLabel?: string;
    orderIdentifier?: string;
    orderPlantSize?: string;
    orderFirmwareVersion?: string;
    orderDeviceFullName?: string;
    orderLastTransfer?: string;
    orderAddressPostalCode?: string;
    orderAddressCity?: string;
    firmwareVersion?: string;
    deviceFullName?: string;

    /**
     * The collection page number
     */
    page?: number;
    label?: string;

    /**
     * Use "AND" or "OR"
     */
    searchOperator?: string;
    plantSizeBetween?: string;
    plantSizeGt?: string;
    plantSizeGte?: string;
    plantSizeLt?: string;
    plantSizeLte?: string;
    lastTransferBefore?: string;
    lastTransferStrictlyBefore?: string;
    lastTransferAfter?: string;
    lastTransferStrictlyAfter?: string;
    identifier?: string;
  }

  /**
   * Parameters for putPlantIdFleetsDelta
   */
  export interface PutPlantIdFleetsDeltaParams {
    id: string;
    plantFleetsDelta?: UpdatePlantFleetsDelta;
  }
}

export { PlantService };

