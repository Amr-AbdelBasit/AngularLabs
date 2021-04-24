import { DiscountOffers } from "./DiscountOffers_Enum";

export interface IProduct {
    id: number;
    name: string;
    quantity: number;
    price: number;
    img: string;
    // discount: DiscountOffers;
}