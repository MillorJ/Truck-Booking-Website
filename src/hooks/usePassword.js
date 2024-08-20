import { useState } from "react";

export const usePassword = (fields) => {
  const [showPasswordField, setShowPasswordField] = useState({
    ...fields,
  });

  const handleShowPassword = (key) => {
    setShowPasswordField((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  return {
    showPasswordField,
    handleShowPassword,
    setShowPasswordField,
  };
};
