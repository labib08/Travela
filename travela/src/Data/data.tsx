export type TravelOption = {
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
    },
    {
        id: 2,
        title: "Couple",
        icon: '🥂',
        desc: "Two travellers",
      },
      {
        id: 3,
        title: "Family",
        icon: '🏡',
        desc: "A group of fun loving adv",
      },
      {
        id: 4,
        title: "Friends",
        icon: '⛵',
        desc: "A bunch of thrill seeks",
      },
]

export const SelectedBudgetOption:TravelOption[] = [
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