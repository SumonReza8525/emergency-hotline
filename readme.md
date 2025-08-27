### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

## Answer to the question no 1:

- **getElementById** :
  _getElementById is one of the most commonly used DOM methods.It allows to select an HTML element by its unique id and then manipulate or change that element._
  Example:document.getElementById("id").innerText ="hello";

- **getElementsByClassName** :
  _getElementsByClassName is a DOM method used to select all HTML elements that share a common class name.It returns an HTMLCollection,which is similar to an array but does not support methodslike forEach directly.To iterate over it,You can use a for loop or convert it into a true array._
  Example:document.getElementsByClassName("class").style.backgroundColor ="red";

- **querySelector** :
  _querySelector is a DOM method that allows you to select elements using CSS selectors.It is useFul when you need to select a specific element,such as a child div inside a parent div.This method always returns only the first matching element from the document._
  Example:document.querySelector(".parentClassName .ChildClassName").style.backgroundColor ="green";

## Answer to the question no 2:

_To create and insert a new element into the HTML DOM ,it takes three steps.First ,create the element.next,set its content using innerText or innerHTML.Finally,append it to the parent element where to appear._
Example:
/..step 1../
const newDiv = document.createElement("div");
/..step 2../
newDiv.innerText ="Hello,this is my new div";
/..step 3../
const parentDiv = Document.getElementById("id");
parentDiv.appendChild(newDiv);

## Answer to the question no 3:

_Event Bubbling is like a chain where the event starts at the child element and then bubbles up through all its parent elements,all the way to the <html> element._

Example:
document.getElementById('childId').addEvenetListener('click',function(){
console.log('Child clicked')
})

document.getElementById('parentId').addEvenetListener('click',function(){
console.log('Parent clicked')
})

_If i click on the child element,both consoles will show because the click event bubbles from the child to the parent._

## Answer to the question no 4:

_Adding addEventListener separetly to many child elements can be messy.With event delegation ,we attach one listener to the parent and handle all child events easily-even for new elements added later._

## Answer to the question no 5:

_preventDefault() is a method that stops default behavior of an event.suppose,if we click on a link it will take us to a new page.but if we apply preventDefault(),it does not go to the new page.Another example is when we submit a form it reloads.its a default behavior of forms.But if we use preventDefault(),it does not reload the page.But it has some limitations.It does not stop event Bubbling.To stop event bubbling we have to use stopPropagation().it stops prapagation after the targeted child.So this is the main difference between preventDefault() and stopPropagation()._
