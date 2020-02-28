/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { AdministrationApiConfiguration as __Configuration } from '../administration-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class EasyVerificationService extends __BaseService {
  static readonly postEasyverificationVerifyPath = '/easyverification/verify';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param easyverification undefined
   */
  postEasyverificationVerifyResponse(easyverification?: any): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = easyverification;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/easyverification/verify`,
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
   * @param easyverification undefined
   */
  postEasyverificationVerify(easyverification?: any): __Observable<null> {
    return this.postEasyverificationVerifyResponse(easyverification).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EasyVerificationService {
}

export { EasyVerificationService }
