/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { FirebaseInstallations as FirebaseInstallationsCompat } from '@firebase/installations-types';
import { FirebaseApp, _FirebaseService } from '@firebase/app-compat';
import { Installations, IdChangeCallbackFn, IdChangeUnsubscribeFn } from '@firebase/installations';
export declare class InstallationsCompat implements FirebaseInstallationsCompat, _FirebaseService {
    app: FirebaseApp;
    readonly _delegate: Installations;
    constructor(app: FirebaseApp, _delegate: Installations);
    getId(): Promise<string>;
    getToken(forceRefresh?: boolean): Promise<string>;
    delete(): Promise<void>;
    onIdChange(callback: IdChangeCallbackFn): IdChangeUnsubscribeFn;
}
