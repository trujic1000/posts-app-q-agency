export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: Comment[];
  user: User;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Geo = {
  lat: string;
  lng: string;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
