/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.core.util {
  'use strict';

  export class ViewController {
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

}
