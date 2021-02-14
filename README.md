# Talent Search

A tech test to practice SOLID principles.

## Requirements

To build a program that accepts two inputs:

- A JSON array of talent, containing objects with `name`, `location` and `date_of_birth` attributes
- A location to filter by

The program should then filter the array of supplied talent, and output the names of talent whose location matches the location supplied. The supplied location should be consider case-insensitive, and the order in which names are outputted is not important.

## Considerations

* Filter method - this is tricky to restrict to the 2 inputs yet make it expandable to search by more parameters if needed. I decided therefore to create a parent class with a method that accepts 2 arguments - a search query and the data to filter. Specific filters can inherit from this parent and pass in a default search parameter with which to search. This conforms to the Open/Closed principle - for instance if the program needs to be expanded to include a search by name a new class is created that passes in a default search parameter of 'name'. The inherited find_talent method can be used as before. The benefit is new filters can easily be created if new attribute fields are added to the data.

* SearchForm component - the search bar is customisable so that new form fields can easily be added by passing in OnClick properties for a filter class.

* ResultsDisplay component - The full list of talent is displayed on loading the app and then is narrowed by search. It can be reset back to the full list by the reset button. If more search fields were added and the list should be filtered by multiple searches, the current state would be needed as the data argument for the filter. However with one search field it makes more sense to be searching the entire pool each time. Consideration to be given to using a UUID generator for the key instead of index.

* Filter component - currently the entry point of the app, this can be moved in the navigation stack if needed once more screens are added.

* No consideration has been given to styling as thumbnails and additional attributes would likely be added down the line. Class names have been added for future styling and identification.

* Malformed data - types of data are defined and errors thrown if the data is not in the specified format.

## Build

Create React App with Typescript template.    
No additional dependencies added.    
Tested with Jest

## Instructions

Clone the program to your machine
````
git clone https://github.com/TheDancingClown/ts2.git
````
Install dependencies
````
npm install
````
Run the program
````
npm start
````
The program will open a browser on localhost:3000

## Testing
  
To run tests
````
npm test
````



