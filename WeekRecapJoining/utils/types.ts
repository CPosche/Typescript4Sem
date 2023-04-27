export type PersonInput = {
  name: string;
  age: number;
  email: string;
  address?: string;
};

export type AddressInput = {
  street: string;
  number: number;
  city: string;
  postalCode: number;
  people?: string[];
};

export type Args = {
  id?: string;
  input?: PersonInput | AddressInput;
};
