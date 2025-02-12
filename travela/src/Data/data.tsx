export type TravelOption = {
    id: number;
    title: string;
    icon: string;
    people: string;
  };

export type BudgetOption = {
id: number;
title: string;
desc: string;
icon: string;
};
export const SelectedTravelList:TravelOption[] = [
    {
        id: 1,
        title: 'Just Me',
        icon: '✈',
        people: '1',
    },
    {
        id: 2,
        title: "Family Trip",
        icon: '★',
        people: "4",
      },
      {
        id: 3,
        title: "Party Vacation",
        icon: '🏠',
        people: "6+",
      },
      {
        id: 4,
        title: "Adventure Travel",
        icon: '🏠',
        people: "2-5",
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