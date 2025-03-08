interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

interface Hotel {
  hotelName: string;
  hotelAddress: string;
  price: string;
  hotelImage: string;
  geoCoordinates: GeoCoordinates;
  rating: number;
  description: string;
}

interface Place {
  placeName: string;
  placeDetails: string;
  placeImage: string;
  geoCoordinates: GeoCoordinates | string;
  ticketPricing: string;
  timeToTravel: string;
  bestTimeToVisit: string;
  additionalNotes?: string;
}

interface DayPlan {
  theme: string;
  places: Place[];
}

interface Trip {
  tripName: string;
  budget: string;
  travelers: string;
  location: string;
  hotelOptions: Hotel[];
  itinerary: DayPlan[];
  notes: string[];
}

export default Trip;