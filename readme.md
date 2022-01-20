# Shopify Backend Challenge
## Instructions
- This project require Node.js to run. [Install Node.js](https://www.pluralsight.com/guides/getting-started-with-nodejs)
- Clone the project.
- Open terminal 
- Create .env file at root and paste this content
```
PORT = 80 #Port on which one wants to run node server
MONGO_URI = mongodb+srv://niravpansuriya:dummy123@cluster0.xqu93.mongodb.net/inventory_management?retryWrites=true&w=majority 
#This is mongo url, this should not be in this introduction. But for testing purpose I am putting it in introduction, otherwise never share or upload db uri or any secrets or env file on github
```
- Open terminal at root and fire these commands (To install dependencies and start the server)
```
npm install
npm start
```