import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import Contacts from './components/Contacts/Contacts';
import './components/Form/Form.css';

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <Form />
      <h2 className="title">Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}
