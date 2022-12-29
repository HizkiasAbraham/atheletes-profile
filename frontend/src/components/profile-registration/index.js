import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { Divider, StepContent } from "@mui/material";
import { StepItems } from "./step-items";
import { registerAtheleteProfile } from "../../api";
import { useNavigate } from "react-router-dom";

const steps = ["Basic Information", "About", "Summary"];

export default function ProfileRegistrationForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [callingApi, setCallingApi] = React.useState(false);
  const [apiError, setApiError] = React.useState(false);
  const [formState, setFormState] = React.useState({
    basicInfo: {
      name: "",
      gender: "",
      dob: new Date(),
      sport: "",
    },
    about: {
      description: "",
      location: "",
      team: "",
      profilePicture: "",
    },
  });

  const navigate = useNavigate();

  const onChange = (step, payload) => {
    setFormState({ ...formState, [step]: { ...formState[step], ...payload } });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const submitAtheleteProfile = async () => {
    const formData = new FormData();
    formData.append("file", formState.about.profilePicture);
    formData.append("name", formState.basicInfo.name);
    formData.append("gender", formState.basicInfo.gender);
    formData.append("sport", formState.basicInfo.sport);
    formData.append("dob", formState.basicInfo.dob);
    formData.append("description", formState.about.description);
    formData.append("location", formState.about.location);
    formData.append("team", formState.about.team);

    if (!formState.basicInfo.name || !formState.about.description) return;
    setCallingApi(true);
    try {
      await registerAtheleteProfile(formData);
      navigate("/profile-list");
    } catch (error) {
      setCallingApi(false);
      setApiError(true);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5">Register Athelete Profile</Typography>
      <Divider />
      <Stepper mt={1} activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => {
          const StepItem = StepItems[index];
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
              <StepContent>
                <StepItem formState={formState} onChange={onChange} />
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button onClick={handleReset}>Reset</Button>
                    </Box>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={
                            index === steps.length - 1
                              ? submitAtheleteProfile
                              : handleNext
                          }
                          sx={{ mt: 1, mr: 1 }}
                          disabled={callingApi}
                        >
                          {index === steps.length - 1 ? "Finish" : "Continue"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </React.Fragment>
                )}
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
      {apiError && (
        <Alert severity="error">This is an error — check it out!</Alert>
      )}
    </Box>
  );
}
