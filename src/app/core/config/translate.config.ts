/// <reference path="../../../../typings/tsd.d.ts" />
module c3.core.config {
  'use strict';

  /**
   * Translate Config
   *
   * @desc angular-translate is an AngularJS module that makes your life much easier when it comes to i18n and l10n
   * including lazy loading and pluralization.
   *
   * @constructor
   */
  var TranslateConfig = ($translateProvider) => {
    $translateProvider.useStaticFilesLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('de');
    $translateProvider.useSanitizeValueStrategy(null);


  };
  TranslateConfig.$inject = ['$translateProvider'];


  angular
    .module(config.ID.Translate, [
      'pascalprecht.translate'
    ])
    .config(TranslateConfig);

}

