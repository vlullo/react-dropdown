# React Dropdown

1. Create a new react app and add a new file Dropdown.js 
2. Inside App.js import the Dropdown component
3. Define "options" as an array of objects and pass it down to Dropdown as props, that will specify what different options we want to show inside the dropdown 
4. Inside our Dropdown component we can now receive and distructure "options" out of our props object, we can then map over that list of options and build up the list we want to display to the user
5. Create a piece of state "selected" inside our App component to keep track of what option is currently selected and we will pass that down into the dropdown so whenever someone make a change and clicks on another option we can tell our App component to update the selected piece of state
6. Update the Drpdown component with the 2 new props (selected, onSelectedChange) and add the onClick event handler which will call onSelectedChange with the option that we are rendering
7. Set a condition "if (option.value === selected.value)" to remove the duplicate option from the dropdown when an option is selected
8. We now want the dropdown to close after a new option is selected. To do this we will add a new piece of state "open" which we will keep track of whether or not the component is open at any given time. It will have a value of true or false and we will be using this value to add or remove the classes "visible active" from our component 
9. We then want the dropdown to close when clicking anywhere outside the dropdown. To do so we will make use of event Bubbling and we will manually add an Event Listener on the <body> element. 
10. Add useEffect to run only once, when the component is first rendered on to the screen. We only want it to run one time because we only want to set up the event listener once. When clicking anywhere in the document we want to set "open" to false "setOpen(false)"
11. N.B. Event Listeners get called first, before any react event. 
12. We will make use of useRef to get a reference to our top level element inside Dropdown and then use it to decide whether or not the element that was clicked is inside or contained by the element with class name .ui.form. It is specifically the 'current' property on the 'ref' is going to to give us a reference to that div.
13. Then we add a condition inside the useEffect "if (ref.current && ref.current.contains(event.target))" that checks if the element that was clicked on is inside of our component, if that's true then we will return and do anything else, otherwise it will attempt to close the dropdown by "setOpen(false)"
