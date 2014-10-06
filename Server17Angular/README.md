NodeJS with AngularJS
============

<p>
  AngularJS is amazing but I realized that I don't actually have a guide on how to use it from scratch... So here we go
</p>


<h3>Installation</h3>

```shell
### in shell ###
express -e 
npm install -g bower
touch .bowerrc
touch bower.json


### in .bowerrc ###
{
  //where do you want the bower components to be stored
  "directory" : "public/bower_components"
}


### in bower.json ###
{
  "name": "Server17Angular",
  "version": "0.0.1",
  "dependencies": {
  }
}

```

<p>Install angular and it's dependencies</p>

```shell
bower install --save angular
bower install --save bower-angular-route
```
