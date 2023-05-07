# Weekend JQuery Salary Calculator


## Description
### Created a webpage to input employee data, add to a table, and calculate total monthly costs based on added salaries
- Created inputs for employee first and last name, job title, employee ID number, and annual salary
- Created a submit button to add that information to the employee table
- Created a function that when called would add all filled in input fields as a new row to the table with a delete button
- Created an event target that targets the most recently added table row when the respective delete button is clicked
- Created an if statement that makes the Total Monthly text turn red when the total monthly is over 20000
- Created an if statement that checks if any of the input fields are empty. If any are empty, it will not let the user submit and will pop up an alert saying "Please fill out all fields!"

## Languages Used
- HTML
- CSS
- Javascript
- [JQuery.JS](https://jquery.com/)

## Setting Up JQuery
To set up JQuery, you first need to copy the compressed production code from their [website](https://code.jquery.com/jquery-3.6.4.min.js). After that, you will need to create a new file inside of VSCode named jquery.js or something similar. Paste the code into that file and source the file into your HTML document BEFORE the Javascript file is sourced. In your Javascript file, write $(onReady) up at the top and create a function onReady(). Inside that function, console log some text to make sure the JQuery is working properly.

## How To Use App
Fill out the input fields provided on the page. Make sure all of the input fields are filled out or else you can't submit and will recieve an alert at the top of the page. Once all fields are filled out and submitted, a new row will appear inside of the table with the inputted information. Below the table, there is a total monthly calculator that calculates the monthly total of all inputted annual salaries in the table. Using the delete button on the respective line that it's on will delete that row of information.

## Acknowledgements
I would like to acknowledge and thank the staff and students at Emerging Digital Academy for being great people to work with and being very helpful. If you are stuck on something, they will take their time to help you through it, but also to understand what's happening with the code as well. 

## Support
For any further questions on the app, feel free to email me at travismack47@protonmail.com.
