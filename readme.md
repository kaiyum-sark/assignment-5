
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer:-
** getElementById - return element by its unique id from entire html document. if there is no valid id it does not work.
** getElementByClassName - return all element by its class name. it works live. if we update same class in html it also update the class.
** querySelector - it returns first closest matched  element. it can select CSS, attribute, tag, id, class.
**querySelectorAll - it returns node list of elements. its not live.
2. How do you **create and insert a new element into the DOM**?
Answer-
** first need to create an element by writing. eg-const element=document.createElement('element'). then input any value or text. eg- div.innerText= element or div.innerHTML = <h1>***</h1>.
then append the child. eg- item.appendChild()
3. What is **Event Bubbling** and how does it work?
Answer-
** we add event handling on any element when triggered first interact the element then moves up DOM tree through parent.
4. What is **Event Delegation** in JavaScript? Why is it useful?
** we add event handling on parent element. it can manage and handle events on multiple child element. no need to add event handling on every item. it improves performance and memory usage. it makes easier to maintain code in multiple items.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
answer:
** some element or tag has its default action. preventDefault() method cancels the action.

** stopPropogation() use to stop event bubbling. when event listener triggerd it goes up to parent and ancestor. stopPropogation() manages to stop interact going up.
---

