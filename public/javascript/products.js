"use strict";
(function(){
  var app = angular.module('store-directives', ['ngRoute']);

  app.service('productService', function(){
    this.selectedProduct = function(product){
      return product.name;
    };
  });

  app.directive('productTitle', function (){
      return{
        restrict:'E',
        templateUrl:'product-title.html'
      };
  });

  app.directive('selectedProduct', function (){
      return{
        restrict:'E',
        templateUrl:'selected-product.html',
        controller: ['$scope', 'productService', function ($scope, productService){
          console.log("selectedProduct controller runs");
          //this.cart = productService.selectedProduct(product);
          //console.log("cart from Service: " + this.cart);
             this.productList = function(product){
             //this.cart = productService.selectedProduct(product);
             //return productService.selectedProduct(product);
             //console.log("selectedProduct.productList function called" + this.cart);
             //console.log("selectedProd productService: " + productService.selectedProduct(product));

          }
        }],
        controllerAs:"selectedProd"
      };
  });

  app.directive('basketButton', function (){
    return{
      restrict: 'E',
      templateUrl: "basket-button.html",
      controller: ['$scope', 'productService', function ($scope, productService){
        this.basket={};
        this.addProduct = function (product){
          //this.basket = product.PID;
          this.basket = productService.selectedProduct(product);
          //product.name.push(this.basket);

          console.log("baskettBtnCtrl productService: " + productService.selectedProduct(product));
          console.log('Our basket after selected the product - this.basket: ' + this.basket);
        };
      }],
      controllerAs:"baskettBtnCtrl"
    };
  });

  app.directive("productDescription", function() {
    return {
      restrict: 'E',
      templateUrl: "product-description.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict:"E",
      templateUrl: "product-specs.html"
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html",
      controller: ['$scope', function ($scope){
       this.review = {};
       this.addReview = function(product) {
          this.review.createdOn = Date.now();
          product.reviews.push(this.review);
          this.review = {};
          //console.log(testService.sayHello("World"));
        };
      }],
    controllerAs: "reviewCtrl"
    };
  });

  app.directive('relatedProducts', function (){
      return{
        restrict: 'E',
        templateUrl: "related-products.html"
      };
  });

  app.directive("productTabs", function() {
    return {
      restrict: "E",
      templateUrl: "product-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

  app.directive("productGallery", function() {
    return {
      restrict: "E",
      templateUrl: "product-gallery.html",
      scope: {
        product: '=product'
      },
      controller: ['$scope', function ($scope) {
        $scope.product;
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      }],
      controllerAs: "gallery"
    };
  });
})();
