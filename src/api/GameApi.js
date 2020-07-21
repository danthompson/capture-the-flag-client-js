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


import ApiClient from "../ApiClient";
import InlineResponse202 from '../model/InlineResponse202';
import InlineResponse400 from '../model/InlineResponse400';

/**
* Game service.
* @module api/GameApi
* @version 1.0.0
*/
export default class GameApi {

    /**
    * Constructs a new GameApi. 
    * @alias module:api/GameApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Player
     * Get player information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse202} and HTTP response
     */
    getPlayerWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse202;
      return this.apiClient.callApi(
        '/player', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Player
     * Get player information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse202}
     */
    getPlayer() {
      return this.getPlayerWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create Move
     * Create a player move
     * @param {module:model/String} direction The direction to move
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse202} and HTTP response
     */
    postMovesWithHttpInfo(direction) {
      let postBody = null;
      // verify the required parameter 'direction' is set
      if (direction === undefined || direction === null) {
        throw new Error("Missing the required parameter 'direction' when calling postMoves");
      }

      let pathParams = {
      };
      let queryParams = {
        'direction': direction
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse202;
      return this.apiClient.callApi(
        '/moves', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Move
     * Create a player move
     * @param {module:model/String} direction The direction to move
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse202}
     */
    postMoves(direction) {
      return this.postMovesWithHttpInfo(direction)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}