import { SelectedBudgetOption, SelectedTravelList } from "@/Data/data";
import { Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast, ToastContainer } from 'react-toastify';

import "./CreateTrip.css";
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
const CreateTrip: React.FC = () => {
  const [place, setPlace] = useState<Option | null>(null);
  const [formData, setFormData] = useState<FormData>({
    location: null,
  });
  const [selectedTravelItem, setSelectedTravelItem] = useState<number | null>(null);
  const [selectedBudgetItem, setSelectedBudgetItem] = useState<number | null>(null);
  const handleInputChange=(name: string, value: Option | null | number |string) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const onGenerateTrip=()=> {
    if (formData && formData.numDays && (formData.numDays > 5 || formData.numDays < 1)) {
      toast.error('Number of days must be between 1 and 5.');
      return;
    }
    if(!formData.numDays || !formData.budget || !formData.location || !formData.numTravelers) {
      toast.error('Please fill all details');
      return;
    }
    console.log(formData);
  }
  useEffect(()=>{
    console.log(formData)
  },[formData])

  const numDaysRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const numDaysInput = numDaysRef.current;

    if (numDaysInput) {

      numDaysInput.addEventListener("wheel", (e) => e.preventDefault(), {
        passive: false,
      });
    }


    return () => {
      if (numDaysInput) {
        numDaysInput.removeEventListener("wheel", (e) => e.preventDefault());
      }
    };
  }, []);

  return (
    <div className="create-trip">
      <ToastContainer />
      <Container maxWidth="md" sx={{ padding: "10px" }}>
        <Typography variant="h3" sx={{ fontWeight: 550 }}>
          Tell us your travel preference
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{ color: "#6b7280", fontSize: "20px", mt: "12px" }}
        >
          Just provide some basic information, and our trip planner will
          generate a customized itinerary based on your preferences.
        </Typography>
        <div className="create-trip-info">
          <div>
            <Typography
              variant="h2"
              sx={{
                fontSize: "20px",
                lineHeight: "28px",
                mt: "12px",
                mb: "12px",
                fontWeight: "550",
              }}
            >
              What is your destination of choice?
            </Typography>
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                value: place,
                onChange: (newValue: Option | null) => {
                  setPlace(newValue);
                  console.log(newValue);
                  handleInputChange('location',newValue);
                },
                styles: {
                  control: (provided, state) => ({
                    ...provided,
                    borderColor: state.isFocused ? '#9c27b0' : '#cccccc',
                    boxShadow: state.isFocused ? '0 0 0 1px #9c27b0' : 'none',
                    '&:hover': {
                      borderColor: state.isFocused ? '#9c27b0' : '#cccccc',
                    },
                  }),
                },
              }}
            />
          </div>
          <div>
            <Typography
              variant="h2"
              sx={{
                fontSize: "20px",
                lineHeight: "28px",
                mt: "12px",
                mb: "12px",
                fontWeight: "550",
              }}
            >
              What is your destination of choice?
            </Typography>
            <TextField
              label="Example: 3"
              variant="outlined"
              type="number"
              inputRef={numDaysRef}
              color="secondary"
              value={formData.numDays ?? ""}
              onChange={(e) => {
                const value = e.target.value === "" ? null : Number(e.target.value);
                handleInputChange('numDays', value);
              }}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                },
                "& .MuiInputLabel-root": {
                  transition: "all 0.2s ease-in-out",
                },
                "& .MuiInputLabel-outlined": {
                  transform: "translate(14px, 10px) scale(1)",
                  "&.MuiInputLabel-shrink": {
                    transform: "translate(14px, -6px) scale(0.75)",
                  },
                },
              }}
            />
          </div>
        </div>
        <div>
          <Typography
            variant="h2"
            sx={{
              fontSize: "20px",
              lineHeight: "28px",
              mt: "40px",
              mb: "12px",
              fontWeight: "550",
            }}
          >
            What is your Budget?
          </Typography>
          <div className="create-trip-budget">
            {SelectedBudgetOption.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  handleInputChange('budget', item.title);
                  setSelectedBudgetItem(index);
                }}
                className={`create-trip-budget-section ${
                  selectedBudgetItem === index ? 'selected' : ''
                }`}
              >
                <h2 className="text-4xl"> {item.icon} </h2>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "3px",
                  }}
                >
                  {" "}
                  {item.title}{" "}
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#6b7280" }}>
                  {" "}
                  {item.desc}{" "}
                </Typography>
              </div>
            ))}
          </div>

        </div>
        <div>
          <Typography
            variant="h2"
            sx={{
              fontSize: "20px",
              lineHeight: "28px",
              mt: "40px",
              mb: "12px",
              fontWeight: "550",
            }}
          >
            Who do you plan on to travel with?
          </Typography>
          <div className="create-trip-budget">
            {SelectedTravelList.map((item, index) => (
               <div
                key={index}
                onClick={() => {
                  handleInputChange('numTravelers', item.people);
                  setSelectedTravelItem(index);
                }}
                className={`create-trip-budget-section ${
                  selectedTravelItem === index ? 'selected' : ''
                }`}
              >
                <h2 className="text-4xl"> {item.icon} </h2>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "3px",
                  }}
                >
                  {" "}
                  {item.title}{" "}
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#6b7280" }}>
                  {" "}
                  {item.desc}{" "}
                </Typography>
              </div>
            ))}
          </div>
          <div className="create-trip-button">
            <Button variant="contained" className="header-button" onClick={onGenerateTrip}>
              Generate Trip
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CreateTrip;
