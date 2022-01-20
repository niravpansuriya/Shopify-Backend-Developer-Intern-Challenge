# Shopify Backend Challenge
## Instructions
- This project requires Node.js to run. [Install Node.js](https://www.pluralsight.com/guides/getting-started-with-nodejs)
- Clone the project.
- Open terminal 
- Create a .env file at the root and paste this content.
```
PORT = 80 #Port on which one wants to run node server
MONGO_URI = mongodb+srv://niravpansuriya:dummy123@cluster0.xqu93.mongodb.net/inventory_management?retryWrites=true&w=majority 
#This is a mongo URL. This should not be in this introduction. But for testing purposes, I am putting it in the introduction. Otherwise, never share or upload DB URI or any secrets or env files on GitHub
```
- Open a terminal at the root and fire these commands (to install dependencies and start the server).
```
npm install
npm start
```
- Now this project is running.
- Please follow this [documentation](https://documenter.getpostman.com/view/13275545/UVXokYmB) for API call.
- I have implemented the export CSV feature. One can find the export CSV API in the above documentation.