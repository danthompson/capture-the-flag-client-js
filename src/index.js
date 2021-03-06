/**
 * Capture the Flag
 * A friendly game of Capture the Flag
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: hello@testdouble.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Error from './model/Error';
import Flag from './model/Flag';
import InlineResponse202 from './model/InlineResponse202';
import InlineResponse400 from './model/InlineResponse400';
import Player from './model/Player';
import GameApi from './api/GameApi';


/**
* Client library of GameAPI.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var GameClient = require('index'); // See note below*.
* var xxxSvc = new GameClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new GameClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new GameClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new GameClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The Flag model constructor.
     * @property {module:model/Flag}
     */
    Flag,

    /**
     * The InlineResponse202 model constructor.
     * @property {module:model/InlineResponse202}
     */
    InlineResponse202,

    /**
     * The InlineResponse400 model constructor.
     * @property {module:model/InlineResponse400}
     */
    InlineResponse400,

    /**
     * The Player model constructor.
     * @property {module:model/Player}
     */
    Player,

    /**
    * The GameApi service constructor.
    * @property {module:api/GameApi}
    */
    GameApi
};
