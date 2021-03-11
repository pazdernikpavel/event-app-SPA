export interface IEvent {
  id: string;
  name: string;
  date: string;
  description: string;
  latitude: number;
  longitude: number;
  price: number;
  participants: number;
  imageUrl: string;
}

export interface ICreateEvent {
  organizer: {
    firstName: string;
    lastName: string;
    email: string;
  };
  event: {
    name: string;
    date: string;
    capacity: number;
    price: number;
    description: string;
    termsAgreed: boolean;
  };
}
