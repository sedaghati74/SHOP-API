<h3 align="center">Shop API</h3>
<h4 align="center">Similar Shop API via Nodejs,Express and Mysql</h4>
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#About-this-Project">About This Project</a>
    </li>
    <li>
      <a href="#How-to-Use">How to Use</a>
      <ul>
        <li><a href="#Setting-up-Database">Setting up Database</a></li>
        <li><a href="#API-Features">API features</a></li>
        <li><a href="#Additional-Info">Additional Info</a></li>
      </ul>
    </li>
    <li><a href="#License">License</a></li>
    <li><a href="#Credit">Credit</a></li>
  </ol>
</details>

## About this Project
I made a simple API for a online shop which is supporting categories,subsets and searching option.

This code is created via Nodejs, ExpressJS and MySql.
## How To Use
Here is some examples & instructions to learn how to use my Shop API.
### Setting up Database
I used MySql database for my project & you require to install MySql first & then continue reading my instructions.

You can use [MySql Installation Guide](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).

After installing MySql, you should use MySql commands or use MySql workbench to create a Database to use in this API. You can use this [Guide](https://www.w3schools.com/mysql/mysql_create_db.asp).

Then, you should change some files to connect your routes to Database.

In ``routes`` folder, you should see categories.js, product.js & subsets.js with below code in the beginning. Your change host, user, password & database with your own info.
```sh
const DB = mysql.createConnection({
    host: 'your-host',
    user: 'your-user',
    password: 'your-db-password',
    database: 'your-db-name'
})
```
For Example this is for Mine (I'm using localhost and default user root) :
```sh
const DB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'fake_shop'
})
```
I put a ``creatingTableMySql.txt`` in public folder. There is a few commands in it which you should use to create our target tables in your Database.

You can run the app by ``npm run start`` command to check if you are correctly connected to Database.
### API features
In version **1.0.0**, You can create custom categories/subsets and add custom product to them.

***Attention***: I'm using my localhost and port 3000 for this examples, It can be change in your case.
#### CREATING CATEGORIES
You should send a request to ./categories by post method to create a new category. You can do it in two way, fetch it or use API Platform Tools like postman to send request.

In fetching way, You should fetch like below example :
``body: name(string), category_id(int)``
```sh
fetch("http//localhost:3000/categories") , {
  method: 'POST',
  body: {name: 'category name', category_id:'category id'}
}
```
#### CHANGE CATEGORY NAME
You should send a request to ./categories/currentNameOfCategory by put method to change category name. You can do it in two way, fetch it or use API Platform Tools like postman to send request.

In fetching way, You should fetch like below example :
``body: name(string)``
```sh
fetch("http//localhost:3000/categories") , {
  method: 'PUT',
  body: {name: 'new category name}
}
```
#### CREATING SUBSETS
You should send a request to ./categories/subsets by post method to create a new subset. You can do it in two way, fetch it or use API Platform Tools like postman to send request.

In fetching way, You should fetch like below example :
``body: name(string), subset_id(int), category_id(int)``
```sh
fetch("http//localhost:3000/categories/subsets") , {
  method: 'POST',
  body: {name: 'category name', subset_id:'subset id', category_id:'category id'}
}
```
#### ADDING PRODUCTS
You should send a request to ./categories/subsets/products by get method to add a new product. You can do it in two way, fetch it or use API Platform Tools like postman to send request.

In fetching way, You should fetch like below example :
``body: name(string), price(int), subset_id(int), category_id(int)``
```sh
fetch("http//localhost:3000/categories/subsets/products") , {
  method: 'POST',
  body: {name: 'category name', price:'product price', subset_id:'subset id', category_id:'category id'}
}
```
#### SEARCHING IN PRODUCTS
You should send a request to ./categories/subsets/products/search=productName by post method to search for your product.

You can do it by going to the route like this example below (We are looking for a glasses in products) :
```
http//localhost:3000/categories/subsets/products/search=Glasses
```
#### Additional Info
This is just a Demo of my codes, I'll improve it & add new features in future .
## License
Distributed under the **MIT** License.

## Credit
Hassan Sedaghati [@sedaghati74](https://github.com/sedaghati74)
