import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TranslateLoader } from '@ngx-translate/core';
export declare class TranslatePoHttpLoader implements TranslateLoader {
    protected _http: Http;
    protected _prefix: string;
    protected _suffix: string;
    domain: string;
    constructor(_http: Http, _prefix?: string, _suffix?: string);
    getTranslation(lang: string): Observable<any>;
    parse(contents: string): any;
}
