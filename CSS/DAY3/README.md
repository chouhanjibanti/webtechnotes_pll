
Combinator selector :- des - space, child > , adja +, general  ~


pseudo element selector :- ::

first line 
first letter 
before 
After 
marker
selection




pseudo class selector :- 

anchor -> link , active , visited
focus 
checked 
hover


========================================


   <style>
        h1::first-line{
            color: red;
        }
        p::first-letter{
            background-color: green;
        }
        ol::before{
            content: url('../DAY2/Images/virat.webp');
        }
        ol::after{
            content: url('../DAY2/Images/siraj.webp');
        }
        ul li::marker{
             content: '🤣';
        }
         ul li+li::marker{
             content: '❤';
        }
         ul li+li+li::marker{
             content: '😂';
        }
        /* win+. */
        h2::selection{
            color: red;
            background-color: yellow;
        }
    </style>