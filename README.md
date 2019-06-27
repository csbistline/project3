# Final Project VBC

**Udpating the Parts Interface for Franklin Chrysler Dodge Jeep Ram Website by:**

* Matching the Front End Style of the current site
* Creating a Customer Query Form that takes in the customer and vehvile data
* Send collected data to the Parts Manager to be assigned to a specific Parts Specialist
* The Parts Specialist recieves the assigned Query as a workorder
* An auto generated email is sent to the customer when assigned with a time table to completion
* Finally once Query has been completed it is reurned to the Parts Manger to be checked and deleted
* [Check Out the DataFlowChart & WireFrame](##-Data-Flow-and-Project-Wire-Frames)

![TeamLogo](https://github.com/csbistline/project3/blob/59ab4c928fa4b71d77a23fe75f12c78e5defcd78/client/public/assets/misc/Hi5.png)

## Authors

* **Chris Blistine** - *React Architect* - [Csbistline github](https://github.com/csbistline)

* **Kevin Bailey** - *Authentication Master* - [RedSW20 github](https://github.com/redSW20)

* **Brendan Gutleber** - *Customer Query and API Ninja* - [GutleberB94 github](https://github.com/GutleberB94)

* **Alexandr 'Sasha' Peters** - *DataBase Guru* - [Merpig github](https://github.com/merpig)

* **Andy Pack** - *PreDesign, Front End, and ReadMe Monster* - [ThePackPater github](https://github.com/ThePackPater)

## Deployment

* [Hi5App](https://parts-manager-hi5.herokuapp.com) - Deployment Link

_<https://parts-manager-hi5.herokuapp.com/>_

## Technologies

* [Mongo](www.npmjs.com/package/mongodb) - Used for Database
* [Express](https://www.npmjs.com/package/express) - Used for routes, to handling requests, and views
* [React](https://github.com/reactjs/reactjs.org) - The web framework used
* [Node](https://www.npmjs.com/package/node) - Used for developing server-side and networking
* [Axios](https://www.npmjs.com/package/axios) - Used for API
* [React-Bootstrap](https://react-bootstrap.github.io/) - Used to generate front end styling
* [Github-ProjectMgr](https://github.com/features/project-management/) - Used to assign roles, set benchmarks, manage code flow
* [Adobe](https://www.adobe.io/apis/creativecloud/xd.html) - Used to generate design wireframes
* [LucidChart](https://www.lucidchart.com/) - Used to generate Login DataFlow
* [Code2Flow](https://code2flow.com/) - Used to generate Data flow chart
* [Heroku](https://devcenter.heroku.com/categories/reference) - Used for App deployment
* [MessageBird](https://www.messagebird.com/en/) - Used to generate ext conformation
* [NodeMailer](https://nodemailer.com/about/) - Used to generate autoReply Email
* [Bcrypt](https://www.npmjs.com/package/bcrypt) - Used for Authentication


## Data Flow and Project Wire Frames

* **_Project Design WireFrame_**
  
 ![Image of Wireframe](https://github.com/csbistline/project3/blob/fe6e931bdeab0c4aff4271d84edc2292282ce2f1/client/public/assets/misc/partswireframe.PNG)

* **_Project UI DataFlow_**
  
 ![Image of Dataflow](https://github.com/csbistline/project3/blob/dafa2e567cc740dd1d483837ff84022037401d4a/client/public/assets/misc/UIdataFlowChart.png)

* **_Team Login ERT DataFlow_**
  
 ![Image of Dataflow](https://github.com/csbistline/project3/blob/5bc82f4431865d762d37b8fabc990014307f9022/client/public/assets/misc/WorkOrderDataflow.PNG)

## Acknowledgments

* Hat tip to Franklin Chrysler Dodge Jeep Ram for the Project Inspiration!!!!

## Getting Started

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

### Installing

Start by installing front and backend dependencies. While in this directory, run the following command:

* npm install

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

* npm start

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.
