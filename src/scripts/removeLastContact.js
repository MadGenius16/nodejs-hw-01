
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";


export const removeLastContact = async () => {
  const contacts = await readContacts();
  if(contacts !==0) contacts.pop();
  else return;
  await writeContacts(contacts);
};

removeLastContact();
