myApp.controller('CodeController',function(GithubAPI){
  var vm = this;

  vm.getProfile = function(){
    GithubAPI.githubProfile().then(function(data){
      vm.githubUser = data.login;
    });
  };

  vm.getProfile();

  vm.getRepos = function(){
    GithubAPI.githubRepos().then(function(data){
      vm.repos = data;
    });
  };

  vm.getRepos();
});
