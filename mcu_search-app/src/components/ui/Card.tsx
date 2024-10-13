import React from "react";


export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="border rounded-md p-4">{children}</div>;
};

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};
