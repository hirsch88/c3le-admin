(function () {
  'use strict';

  angular
    .module('c3.core.configs.Translate', [
      'c3.core.constants.Config'
    ])
    .config(TranslateConfig);

  function TranslateConfig($translateProvider, appConfig) {
    $translateProvider.useStaticFilesLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage(appConfig.LANGUAGE);
    $translateProvider.useSanitizeValueStrategy('sanitize');
  }


}());
