# training-svelte_toDo_list
:octocat: training-svelte_toDo_list

To Do List, is an Application build with Svelte, it's a basic exercise to learn how Svelte works, it allows basic CRUD operations using as backend a fake but very funtional REST API.

## Stack
* JavaScript
  - Svelte

### Manual Installation
To get started you will first need the following installed on your machine.
* [Nodejs](https://nodejs.org)
* [npm](https://www.npmjs.com/)
* [json-server](https://github.com/typicode/json-server)

### Running locally
Then you can download this repository, open two terminals window and navigate
to the folder in each terminal, and then type the following.
#### Terminal 1
##### Run Server
Type the following in your first terminal
```
cd app/src/db
json-server --watch db.json --port 4000
```
#### Terminal 2
##### Run Application
Type the following in your second terminal
```
cd app
npm i
npm start
```

### Use
#### User Interface
Go to the following URL on your browser
```
http://localhost:5000
```
Done!  
You can handle ToDo List(CRUD)

#### Data (Optional)
Go to the following URL on your browser to see data into server
```
http://localhost:4000/todos
```

## Software Developer
[Javier Andrés Garzón Patarroyo](https://www.javierandresgp.com)
