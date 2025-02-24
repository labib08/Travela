interface GeoCoordinates {
    latitude: number;
    longitude: number;
  }

  interface HotelOption {
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
    geoCoordinates: GeoCoordinates;
    ticketPricing: string;
    timeToTravel: string;
    bestTimeToVisit: string;
  }

  interface ItineraryDay {
    theme: string;
    places: Place[];
  }

  interface Trip {
    tripName: string;
    budget: string;
    travelers: string;
    location: string;
    hotelOptions: HotelOption[];
    itinerary: {
      day1: ItineraryDay;
      day2: ItineraryDay;
      day3: ItineraryDay;
    };
    notes: string[];
  }

export default Trip;