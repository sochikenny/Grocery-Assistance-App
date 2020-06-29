# Grocery Assistance App!!!


### Description

The simple app that helps users with grocery shopping. It lets users organize their grocery items and update them when needed. It also helps the user effectively locate grocery stores in their neighborhoods based on whatever zip code their enter. 


### Live Site

View Page https://groceryassistance.herokuapp.com/

When visiting the site:
1) Make sure you use this link in Google Chrome 

2) Make sure add the chrome extension "Moesif Orign & CORS Changer"

3) Unfortuately,this is only fully supported by Google Chrome through with the extension because of the third party API being utilized on the stores page. 
Please adhere to the first two instructions to fully benefit from the web application. 


### Technologies Used

* Node.js
* MySQL (Sequelize)
* JavaScript/jQuery
* CSS frameworks (Bootstrap/Materialize)
* Express
* Handlebars
* Heroku 
* RESTful API/ Thirdparty API(Google Places)


### Installation

1. Run "npm install" to install the required dependencies
2. Run the schema.sql file to setup the database in your mysql server
3. Update the .env file for your mysql database port, user, and password.


### How to use the Application


1. In the text area type the grocery item that you would like to add, and hit the 'Add' button.

2. Grocery items in the MySQL database will appear in the list named 'Groceries to be purchased'.

3. When you succeed in buying the grocery item, click 'bought' and the item should move to the 'Groceries purchased' column where it could be deleted by clicking on the 'delete' button.

4. On the nav bar, click on 'store' and it will direct you to the stores page. In this page, you will type in your desired zip code and click on the button. Once this happens, then a list of five stores will appear on the screen. You can now select any of those store(s) to help in getting your grocery items.


### Directions for Future Development

* Adding more design and maybe some animations 
* Adding options to save a compiled list for items
* Security development for user such as a sign up email and login page
* Making sure that the application is fully supported by other web browers
* Adding another third party api that can render dat on what prices of products are in certain stores
* Hopefully, purchasing a better third party API for to supply store data instead of using free third party API's that are restrictive
* Linking the different addresses on the following stores rendered on the stores page to google maps for instant navigation benefits
