# phimon

Simple Pokédex web app with some nice charts and pokémons.

### Basic functionalities:
 - Compare up to 5 different Pokémons with eachother based on their stats
 - Search Pokémon
 - View info featuring some nice [Recharts](https://github.com/recharts/recharts) charts
 - Filter and sort a list of Pokémons

### This app was developed using
 - [ExpressJS](https://github.com/expressjs/express)
 - [TypeScript](https://github.com/Microsoft/TypeScript)
 - [PostgreSQL](https://www.heroku.com/postgres)
 - [React](https://reactjs.org/)
 - [Redux (react-redux)](https://github.com/reduxjs/react-redux)
 - [Recharts](https://github.com/recharts/recharts)
 - [Material-UI](https://material-ui.com/)

I made this small application in order to learn about Redux, Typescript and using a relational database (Postgres).

Instead of doing all the filtering directly on the client side I decided to query the postgres db with the user input in order to filter and sort the Pokemons.

TypeScript is used both on the server and the client (using the [create-react-app-typescript](https://github.com/Microsoft/TypeScript-React-Starter)).

The Pokemon data that is being used is from the [PokeAPI](https://github.com/PokeAPI/pokeapi) but stored on a Heroku PostgreSQL DB. 
