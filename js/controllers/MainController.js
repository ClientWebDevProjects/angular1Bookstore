app.controller('MainController', function ($scope) {
  $scope.title = 'Top Sellers In Books';
  $scope.promo = 'NYTimes Best Sellers';
  $scope.products = [ 
    { 
      name: 'The Book of Trees', 
      price: 19, 
      pubdate: new Date('2014', '03', '08'), 
      cover: 'img/the-book-of-trees.jpg', 
      likes: 0
    }, 
    { 
      name: 'Program or be Programmed', 
      price: 8, 
      pubdate: new Date('2013', '08', '01'), 
      cover: 'img/program-or-be-programmed.jpg', 
      likes: 0 
    },
    { 
      name: 'The Book of Trees', 
      price: 19, 
      pubdate: new Date('2014', '03', '08'), 
      cover: 'img/the-book-of-trees.jpg', 
      likes: 0 
    }, 
    { 
      name: 'Program or be Programmed', 
      price: 8, 
      pubdate: new Date('2013', '08', '01'), 
      cover: 'img/program-or-be-programmed.jpg', 
      likes: 0 
    } 
  ];
  $scope.plusOne = function (index) {
    // body...
    $scope.products[index].likes += 1;
  };
})