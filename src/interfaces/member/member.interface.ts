type ID = string | number;

export interface Member {
  id?: ID;
  firstName: string;
  lastName: string;
  contacts: Contacts;
  address: Address;

  birthDate: Date;

}

interface Address {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
}
interface Contacts {
  phone: string | null;
  cel: string | null;
  email: string | null;
}
