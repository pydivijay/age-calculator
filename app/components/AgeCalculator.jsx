import { useState } from "react";
import { Container, TextField, Typography, Card, CardContent, Box, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4a90e2",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#f4f6f8",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export default function AgeCalculator() {
  const [birthdate, setBirthdate] = useState("");
  const [ageDetails, setAgeDetails] = useState(null);

  const calculateAge = (date) => {
    if (!date) return;
    const birthDate = new Date(date);
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    
    setAgeDetails({ years, months, days });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" style={{ marginTop: "50px", textAlign: "center" }}>
        <Card style={{ padding: "20px", borderRadius: "15px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", backgroundColor: theme.palette.background.default }}>
          <CardContent>
            <Typography variant="h5" gutterBottom style={{ fontWeight: "bold", color: theme.palette.primary.main }}>
              Age Calculator
            </Typography>
            <TextField
              label="Enter your birthdate"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              onChange={(e) => {
                setBirthdate(e.target.value);
                calculateAge(e.target.value);
              }}
              style={{ marginBottom: "20px" }}
            />
            {ageDetails && (
              <Box style={{ marginTop: "20px", padding: "10px", borderRadius: "10px", backgroundColor: theme.palette.secondary.light }}>
                <Typography variant="h6" style={{ fontWeight: "bold", color: theme.palette.primary.dark }}>
                  Your Age:
                </Typography>
                <Typography variant="body1" style={{ fontSize: "18px", marginTop: "10px", color: theme.palette.primary.dark }}>
                  {ageDetails.years} Years, {ageDetails.months} Months, {ageDetails.days} Days
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
