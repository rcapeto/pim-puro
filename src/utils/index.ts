import { locale, priceConfig } from '../config/render';

export const formatPrice = (price: number) => {
   return price.toLocaleString(locale, priceConfig);
};