import { SelectedBudgetOption } from "@/Data/data";
import { TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
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
const CreateTrip: React.FC = () => {
  const [place, setPlace] = useState<Option | null>(null);
  const [inputValue, setInputValue] = useState<number>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value === "" ? undefined : Number(value));
  };
  return (
    <div className="create-trip">
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
              value={inputValue ?? ""}
              onChange={handleInputChange}
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
          <div className="create-trip-budget grid grid-cols-3 gap-5 mt-5">
            {SelectedBudgetOption.map((item, index) => (
              <div
                key={index}
                className="create-trip-budget-section p-4 border rounded-lg hover:shadow"
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
      </Container>
    </div>
  );
};

export default CreateTrip;
