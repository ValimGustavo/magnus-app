type ID = string | number;

export interface Member {
  id: ID;
  firstName: string;
  lastName: string;
  contacts: Contacts;
  address: Address;

  birthDate: Date;

  participations: Participator[];
}

export interface Participator {
  id: ID;
  modality: string;
  active: boolean;
}

interface Address {
  street: string;
  number: number;
  neighborhood: string;
  city: string;
}
interface Contacts {
  phone: string | null;
  cel: string | null;
  email: string | null;
}
