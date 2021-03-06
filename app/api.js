(function() {

'use strict';

/**
 * @ngdoc overview
 * @name 4me.ui.spvr.mapping.api
 * @description
 * A single service called mapping.api which provides api urls for the whole organ
 */


angular.module('4me.ui.spvr.mapping.api', [])
.constant('mapping.api', {
  rootPath: 'http://' + window.location.hostname + ':3100',
  mapping: {
    getMap: '/mapping',
    suggest: function(cwpId) { return '/mapping/cwp/' + cwpId + '/suggest'; },
    commit: '/mapping' // POST
  },
  cwp: {
    getAll: '/cwp',
    getSingle: '/cwp', // + cwpId
    suggest: function(cwpId) { return '/cwp/' + cwpId + '/sectors/suggest'; }
  }
});

}());
