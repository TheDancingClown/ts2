# Talent Search

## Considerations

* Filter - this is tricky to restrict to the 2 inputs yet make it expandable to search by more parameters if needed. I decided therefore to create a parent class with a method that accepts 2 arguments - a search query and the data to filter. Specific filters can inherit from this parent and pass in a default search parameter with which to search. This conforms to the Open/Closed principle - for instance if the program needs to be expanded to include a search by name a new class is created that passes in a default search parameter of 'name'. The inherited find_talent method can be used as before. The benefit is new filters can easily be created if new attribute fields are added to the data.

* SearchForm component - the search bar is customisable so that new form fields can easily be added by passing in OnClick properties for a filter class.

* ResultsDisplay component - The full list of talent is displayed on loading the app and then is narrowed by search. It can be reset back to the full list by the reset button. If more search fields were added and the list should be filtered by multiple searches, the current state would be needed as the data argument for the filter. However with one search field it makes more sense to be searching the entire pool each time.

