export type TravelOption = {
    id: number;
    title: string;
    icon: string;
    desc: string;
    people: string;
  };

export type BudgetOption = {
    id: number;
    title: string;
    icon: string;
    desc: string;
  };

export const SelectedTravelList:TravelOption[] = [
    {
        id: 1,
        title: 'Solo',
        icon: '✈',
        desc: 'A sole travel in exploration',
        people: "1 People"
    },
    {
        id: 2,
        title: "Couple",
        icon: '🥂',
        desc: "Two travellers",
        people: "2 People"
      },
      {
        id: 3,
        title: "Family",
        icon: '🏡',
        desc: "A group of fun loving adv",
        people: "3 to 5 People"
      },
      {
        id: 4,
        title: "Friends",
        icon: '⛵',
        desc: "A bunch of thrill seeks",
        people: "5 to 10 People"
      },
]

export const SelectedBudgetOption:BudgetOption[] = [
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon: '💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon: '💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:"Don't worry about the cost",
        icon: '💳',
    },
]
export const AI_PROMPT = "Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} with a {budget}, give me Hotel options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions, and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, time Travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format."