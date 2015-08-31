/// <reference path="../../../../typings/tsd.d.ts"/>

/**
 * Event bus. Use this class to register events and broadcast them from anywhere.
 */
module c3.core.util {
  'use strict';

  //export interface IEventDisposable {
  //  disposes: Function[];
  //  dispose(): void;
  //}

  export class EventController {
    private disposes: Function[] = [];

    constructor($scope, private eventHandler: EventHandler) {
      $scope.$on('$destroy', () => this.dispose());
    }

    protected fireEvent(eventKey: string, eventObject: any) {
      this.eventHandler.broadcast(eventKey, eventObject);
    }

    protected addListener(eventKey: string, eventCallback: any) {
      this.disposes.push(this.eventHandler.on(eventKey, eventCallback));
    }

    private dispose() {
      this.disposes.forEach(disposes => disposes());
    }
  }

  export interface IEventHandler {
    /**
     * Returns all registered event callbacks.
     */
    list(): { [event: string]: IEventCallback<any>[] };

    /**
     * Register a callback for the given events. Returns
     * a disposal function that unregisters the callback
     * when called.
     */
    on<T>(event: string, callback: IEventCallback<T>): () => boolean;

    /**
     * Invoke all callbacks registered for the given event with
     * the given data. Returns the number of callbacks invoked.
     */
    broadcast<T>(event: string, eventObject?: T): number;
  }

  export interface IEventCallback<T> {
    (eventObj?: T): void;
  }

  class EventHandler implements IEventHandler {
    private eventCallbacks: { [event: string]: IEventCallback<any>[] };

    constructor() {
      this.eventCallbacks = {};
    }

    list() {
      return this.eventCallbacks;
    }

    broadcast<T>(event: string, eventObject?: T) {
      var callbacks = this.eventCallbacks[event] || [];
      callbacks.forEach(cb => cb(eventObject));
      return callbacks.length;
    }

    on<T>(event: string, callback: IEventCallback<T>) {
      var callbacks = this.eventCallbacks[event] || (this.eventCallbacks[event] = []);
      callbacks.push(callback);

      // destroy function
      return () => {
        var idx = callbacks.indexOf(callback);
        if (idx >= 0) {
          callbacks.splice(idx, 1);
        }

        if (callbacks.length === 0) {
          delete this.eventCallbacks[event];
        }

        return idx >= 0;
      };
    }

  }

  angular
    .module(ID.EventHandler, [])
    .service(ID.EventHandler, EventHandler);
}
