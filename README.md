#### 26/05

taskList.js is now rendering thanks to the renderComponent boolean identifier. A way to render new instances of the taskList component is yet to be found.

Current line of thought is implementing task as an array and new elements are to be concatenated. The map function can then be used to be implement multiple instances of the taskList component. Hopefully.


#### 27/05

Implementing task as array worked like a charm! Now all that is left to be sorted are the task counter in the header component and the delete, edit buttons in the taskList component.

#### 28/05

Tons of problems have now arisen. So much that I don't want to document them. 

No progress to be recorded either.

#### 29/05

Implemented task as a global array successfully. What to do with it is still in the air. The input field disable/enable problem has been worked out and dealt with.

The splice method is being considered for deleting task array element (which is a job for the deleteClick() function in taskList component). 

A way of forcibly unmounting a component is yet to be found, which is the main reason for delay in implementing deleteClick() method. **High Priority**.

Also editing an array element at a particular index also needs to be figured out for the implementation of the editClick() method. 

#### 31/05

Was unable to log yesterday, though nothing of event was achieved. A way to splice the global task array was discovered but unable to apply it in a meaningful way. Trying to re-render the array by using another component for the rendering failed spectacularly. So still stuck at trying to unmount a component.

**A simple conditional statement helped in unmounting the component!!** Not exactly unmounting but it does the job. A new problem that has been observed is that to enter a new element after deleting requires submitting twice. Need to figure out what is going wrong...

Suspecting the renderComponent state of taskList component to be the culprit. App behaves strangely when deleteClick is called occasionally. That too is supposedly being caused by the renderComponent state. Not entirely sure of any of it though.