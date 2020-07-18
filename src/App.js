import * as React from "react";
import {Admin, Resource, ListGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import MyLayout from "./Layout/MyLayout";
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider} layout={MyLayout}>
    <Resource name="users" list={ListGuesser} icon={UserIcon}/>
  </Admin>
);

export default App;