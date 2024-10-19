import React from "react";
import { Button } from "@mui/material";

interface BackButtonProps {
  handleBack: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ handleBack }) => {


  return(
  <Button
    variant="contained"
    className="bg-blue-500 text-white px-4 py-2 button"
    onClick={handleBack}
  >
    Back⇐
  </Button>
  )

};

export default BackButton;
