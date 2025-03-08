type Option = {
    label: string;
    value: {
      description: string;
      place_id: string;
      reference: string;
      structured_formatting: {
        main_text: string;
        secondary_text: string;
      };
    };
  };
  type FormData = {
    location?: Option | null;
    numDays?: number;
    budget?: string;
    numTravelers?: string;
  };

export type { FormData, Option };

