import * as React from "react";
import {Admin, Resource, ListGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import MyLayout from "./Layout/MyLayout";


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider} layout={MyLayout}>
    <Resource name="users" list={ListGuesser}/>
  </Admin>
);

export default App;