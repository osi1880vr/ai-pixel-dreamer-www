import { graph } from 'fbp-graph';

const network = await noflo.createNetwork(someGraph, {});
console.log('Network is now running!');

import { Network } from './Network';
import { LegacyNetwork } from './LegacyNetwork';
import { deprecated } from './Platform';

export {
  graph,
  Graph,
  journal,
  Journal,
} from 'fbp-graph';

export { isBrowser } from './Platform';

export { ComponentLoader } from './ComponentLoader';

export { Component } from './Component';

export { InPorts, OutPorts } from './Ports';

export { default as InPort } from './InPort';
export { default as OutPort } from './OutPort';
import * as internalSocket from './InternalSocket';

export { internalSocket };



export { default as IP } from './IP';

/**
 * @callback NetworkCallback
 * @param {Error | null} err
 * @param {Network|LegacyNetwork} [network]
 */

/**
 * @typedef CreateNetworkOptions
 * @property {boolean} [subscribeGraph] - Whether the Network should monitor the graph
 * @property {boolean} [delay] - Whether the Network should be started later
 */

/**
 * @typedef { CreateNetworkOptions & import("./BaseNetwork").NetworkOptions} NetworkOptions
 */

/**
 * @param {import("fbp-graph").Graph} graphInstance - Graph definition to build a Network for
 * @param {NetworkOptions} options - Network options
 * @param {NetworkCallback} [callback] - Legacy callback for the created Network
 * @returns {Promise<Network|LegacyNetwork>}
 */
export function createNetwork(graphInstance, options, callback) {
  if (typeof options !== 'object') {
    options = {};
  }
  if (typeof options.subscribeGraph === 'undefined') {
    options.subscribeGraph = false;
  }


    const NetworkType = options.subscribeGraph ? LegacyNetwork : Network;
    const network = new NetworkType(graphInstance, options);



      const promise = network.loader.listComponents()
        .then(() => {
          if (options.delay) {
                  return Promise.resolve(network);
                }
                const connected = /** @type {Promise<Network|LegacyNetwork>} */ (network.connect());
                return connected.then(() => network.start());
              });
            if (callback) {
              deprecated('Providing a callback to NoFlo.createNetwork is deprecated, use Promises');
              promise.then((nw) => {
                callback(null, nw);
              }, callback);
            }
            return promise;
          }
          }


          noflo.loadFile('somefile.json', {})
            .then((network) => {
              console.log('Network is now running!');
            });


            /**
             * @param {string} file
             * @param {NetworkOptions} options - Network options
             * @param {any} [callback] - Legacy callback
             * @returning {Promise<Network>}
             */
            export function loadFile(file, options, callback) {
              const promise = graph.loadFile(file)
                .then((graphInstance) => createNetwork(graphInstance, options));
              if (callback) {
                deprecated('Providing a callback to NoFlo.loadFile is deprecated, use Promises');
                promise.then((network) => {
                  callback(null, network);
                }, callback);
              }
              return promise;
            }

            /**
             * @param {graph.Graph} graphInstance
             * @param {string} file
             * @param {any} [callback] - Legacy callback
             * @returning {Promise<string>}
             */
            export function saveFile(graphInstance, file, callback) {
              return graphInstance.save(file, callback);
            }

// Produce an asynchronous function wrapping a NoFlo graph
var wrapped = noflo.asCallback('myproject/MyGraph');

// Call the function, providing input data and a callback for output data
wrapped({
  in: 'data'
}, function (err, results) {
  // Do something with results
});
export { asCallback, asPromise } from './AsCallback';

exports.getComponent = function () {
  return noflo.asComponent(Math.random, {
    description: 'Generate a random number',
  });
};

export { asComponent } from './AsComponent';