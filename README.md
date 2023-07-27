Regex String Validator Application
Application Description
This application allows users to validate a string based on specific requirements. Users can input a string of their choice, and the application will validate it against set criteria: length, presence of upper and lower case letters, digits, special characters, and absence of whitespace. The application provides real-time feedback on whether the input string meets the criteria.

Regex Implementation Description
The current implementation of the Regex String Validator Application is designed to handle and validate the following conditions in an input string:

Length: The input string length should fall within the specified range of 1 to 12 characters. This means any string shorter than 1 character or longer than 12 characters will be deemed invalid.

Uppercase Letters: The string must contain at least one uppercase (capital) letter. If the string doesn't include any uppercase letters, it won't pass the validation.

Lowercase Letters: The string must also contain at least one lowercase letter. An input without any lowercase letters will not be considered valid.

Digits: The application checks for the presence of at least one numerical digit within the input string. Strings without any numbers will fail the validation.

Special Characters: The validator looks for at least one special character in the input string. The specific set of special characters checked can vary, but commonly includes symbols such as !, @, #, $, %, ^, &, \*, (, ), -, +, =, {, }, [, ], :, ;, ', ?, /, and ~.

Whitespace Characters: The string must not contain any whitespace characters, which include spaces, tabs, and newline characters. If the string has any such characters, it will be considered invalid.

It's important to note that these conditions are currently hardcoded and any changes to these requirements would necessitate adjustments in the code.

How to Run the Application Locally
Clone the repository to your local machine:

bash
Copy code
git clone https://git@github.com:Aztek2008/chatgpt-ss-usecase.git
Navigate into the project directory:

bash
Copy code
cd regex-string-validator
Install the necessary dependencies:

Copy code
npm install
Start the application:

sql
Copy code
npm start
This command runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

The application and regex descriptions are generic and might not cover the specifics of your application. I suggest adjusting these descriptions based on the actual features and implementation details of your project.
