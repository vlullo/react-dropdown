# React Dropdown

1. Create a new react app and add a new file Dropdown.js 
2. Inside App.js import the Dropdow component
3. Define 'options' as an array of objects and pass it down to Droptown as props, that will specify what diffrent options we want to show inside the dropdown 
4. Inside our Dropdown component we can now receive and distructure options out of our props object, we can then map over that list of options and build up the list we want to display to the user
5. Create a piece of state inside our App component to keep track of what option is currently selected and we will pass that down into the dropdown so whenever someone make a change and clicks on another option we can tell our App component to update the selected piece of state
6. Update the Drpdown component with the 2 new props and add the onClick event handler which will call onSelectedChange with the option that we are rendering
7. Set a condition to remove the duplicate option from the dropdown when an option is selected

