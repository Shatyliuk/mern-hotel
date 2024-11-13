export interface HotelType {
  id: string;
  userId: string;
  name: string;
  city: string;
  country: string;
  description: string;
  type: number;
  adultCount: number;
  childCount: number;
  facilities: string[];
  pricePerNight: number;
  imageUrls: string[];
  lastUpdated: Date;
  starRating: number;
}
