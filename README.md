# Front-End, Back-End, React-Hyperscript.

Quick project to brush up on sqlite3 database with Knex, GET and PUT routes.
Also another chance to play with react-hyperscript.

```Clone > Install > knex migrate:latest > knex seed:run > npm run dev```

Click on the numbers to increment the number by +1. Click reset to set back to 0.
Values are saved in a database so refreshing the browser does not reset the number values.

TODOS: Add and remove colours rather than having 4 hard coded. Also include some wild-card feature :)
* take colours and RGB values from the database [DONE]
- container does all the database work (one get route, one put route) and maps out the single boxes. Single boxes recieve DB values as props and renders them (stateless component). happy with current structure :)

* have a REDUXform on the front end to input: colour, rgb value (include a link to a place to look at RGB values... - regex type check on the rgb value but actually it's messy custom conditional checks hehe)
 > Will need POST and DELETE routes + redux form
 DEL [DONE]
 POST [DONE]

NEXT: Validate that input coming into field is RGBA value
find some better way for user to choose colour
FURTHER STRETCH: Colour picker instead of input field...

TECHNICAL DEBT: 
* Utils FOLDER - with designated files inside it, it's a damn mess in that file atm and it could be better.