import { Rating } from "./rating-model";

export interface Product {
  category: string;
  description: string;
  id: string;
  apiId: string
  image: string;
  price: string;
  rating: Rating;
  title: string;
}