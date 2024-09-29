import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contactsArr = await readContacts();
  return contactsArr.length;
};

console.log(await countContacts());
