import { User } from './user.type.js';

enum OfferCity {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

enum OfferHousing {
  Apartment = 'Apartment',
  House = 'House',
  Room = 'Room',
  Hotel = 'Hotel'
}

enum OfferOption {
  Breakfast = 'Breakfast',
  AirConditioning = 'Air conditioning',
  LaptopFriendlyWorkspace = 'Laptop friendly workspace',
  BabySeat = 'Baby seat',
  Washer = 'Washer',
  Towels = 'Towels',
  Fridge = 'Fridge'
}

type Location = {
  latitude: number;
  longitude: number;
}

export type Offer = {
  name: string;
  description: string;
  postDate: Date;
  city: OfferCity;
  preview: string;
  pictures: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  housing: OfferHousing;
  rooms: number;
  guests: number;
  price: number;
  options: OfferOption[];
  author: User;
  commentsNumber: number;
  location: Location;
}
