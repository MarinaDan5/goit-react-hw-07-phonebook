import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './contacts-actions';

const axiosInstance = axios.create({
  baseURL: 'https://6191605e41928b001769003f.mockapi.io',
});

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axiosInstance
    .get('/contacts')
    .then(({ data }) => {
      console.log('data', data);
      dispatch(fetchContactSuccess(data.items));
    })
    .catch(error => dispatch(fetchContactError(error)));
};
export const addContact =
  ({ name, number }) =>
  dispatch => {
    const contacts = { name, number };
    dispatch(addContactRequest());

    axiosInstance
      .post('/contacts', contacts)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error)));
  };

export const delContacts = contactsId => dispatch => {
  dispatch(delContactRequest());

  axiosInstance
    .delete(`/contacts/${contactsId}`)
    .then(() => dispatch(delContactSuccess(contactsId)))
    .catch(error => dispatch(delContactError(error)));
};
