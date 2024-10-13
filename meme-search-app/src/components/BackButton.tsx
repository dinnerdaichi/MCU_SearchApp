import React from "react";

interface BackButtonProps {
  handleBack: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ handleBack }) => {


  return(
  <button
    className="bg-blue-500 text-white px-4 py-2 button"
    onClick={handleBack}
  >
    Back⇐
  </button>
  )

};

export default BackButton;
