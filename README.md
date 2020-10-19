<div style="text-align: center;"><h3>This is budgie, the budget app</h3></div>

<br>
Overview of Contents

##### 1) [What is this app?](#whatisthisapp)

##### 2) [User Stories](#userstories)

##### 3) [How to use this app locally](#howtorun)

##### 4) [Technical dilemmas and decisions](#decisions)

<h1 id="whatisthisapp">What is this app</h1> 

This is a solo project by Stephan Ellenberger, aimed at displaying some of the following technical skills; 

- Test Driven Development
- Database design and management
- Backend Development (Python, Django, Postgres)
- Frontend Development (ReactJS, ChartJS, SCSS, HTML, CSS, State Management, Axios)
- Native Mobile Development (Flutter or React Native) (Yet to be implemented)


<h1 id="userstories">User Stories</h1> 

User stories

```
As a money pressed user
So that I can save money
I would like to upload my spendings

As a money pressed user
So that I can see where I spend my money
I would like a breakdown of my spendings

As a money pressed user
So that I can track all my spendings
I would like to add different 'accounts'

As a money pressed user
So that I can learn where I spend my money
I would like to see my accounts side by side

As a money pressed user
So that I can budget effectively
I would like tips on how to save more money 

As a money pressed user
So that I can budget effectively
I would like to see predicted spendings


As a money pressed user
So that I can budget effectively 
I would like to add a monthly spend limit

As a money pressed user
So that I can budget effectively 
I would like to be told how much spend limit I have left
```

<h1 id="howtorun">How to use this app locally</h1> 

You can use provided sample bank statements to see the app in action, or you can use your own (look at instructions on how to feed them into the app). At the moment, the app reads bank statements manually, via a CSV file. If you would like to see your own records in action locally, download your bank statement as a CSV file and feed it into the app to see the magic. 

At the time of this writing, data cleaning of the bank statement has not been implemented yet. You will need to have your data in a certain format until this is implemented, otherwise you may see incorrect and bad data. 

This is how the data should be laid out, and in a CSV format. 

(all on one line)

Transaction Date | Transaction Type | Sort Code | Account Number | Transaction Description | Debit Amount | Credit Amount | Balance

<h1 id="decisions">Technical dilemmas and decisions</h1> 

During the project, there were many different technologies I wanted to implement. Here are the breakdown of the decisions and technologies


- Python and Django (REST Framework) for the server side code
- ReactJS and ChartJS for the front end, with SCSS
- Docker for containerising this application and to manage all the dependencies accross the board (yet to be implemented)
- Plaid to as an API for the bank accounts. At the time of writing this, I dont know how intuitive it will be to implement, so I will first start by just uploading a CSV file
- threeJS for cool animations, perhaps later on in the application to create a dynamic and interactive GUI. 


