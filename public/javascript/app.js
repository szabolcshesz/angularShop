"use strict";
(function() {
    var app = angular.module('myStore', ['store-directives','ngRoute']);

    angular.module('myStore')
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/store', {
          templateUrl: '/main-store.html',
        })
      .when('/selectedProduct', {
        templateUrl: '/selected-product.html',
      })
      .when('/checkout', {
        templateUrl: '/checkOut.html',
      })
      .otherwise({
        redirectTo: '/store'
      });
  }]);


    app.controller('StoreController', ['$http', function($http) {
        var store = this;
        store.products = [];
        $http.get('/json/store-products.json').success(function(data) {
            store.products = data;
        });
    }]);

    app.controller('cartBtnController', function() {
        //this.cartButton = false;
        //console.log('basket button pushed');
    });

})();
