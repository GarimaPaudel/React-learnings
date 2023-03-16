import React from 'react';
import Header from "./components/header.js";
import AddContact from './components/AddContact.js';
import ContactList from './components/ContactList.js';
import './App.css';

function App() {
  return (
    <div>

<Header />
<AddContact />
<ContactList />
</div>
  );
}

export default App;
