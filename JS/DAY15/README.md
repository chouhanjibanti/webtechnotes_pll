Event Loop :- It is a mechanism , by using this we can handle the task in the asychronous way , becuase javascript is single threaded language.


Mainly three things  :- 
1. Stack  -> LIFO - FILO 
2. Queue -> FIFO
3. Event Loop 

Working of Event Loop :- 

     Stack
       |
   Event Loop 
      |
     Queue


There are 2 types of task :-
console.log("")
1. microtask :- Promises , queueMicroTask , Async and await  - First Priority
2. macrotask  :- setTimeout , setInteval   - second Priority