app.controller('MainController',['$scope',function($scope){
	$scope.todo={
		list: ["My name is May Myat Noe","I am 22 years old","Nice to meet you"]
	}
	$scope.books={
		list: []
	}
	$scope.addItem = function (itemList,item) 
	{
		itemList.push($scope.addToDo);
	}
}])