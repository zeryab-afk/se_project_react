import { useState } from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    
    // Add validation
    setErrors((prev) => ({ ...prev, [name]: e.target.validationMessage }));
    
    // Check form validity
    if (e.target.closest('form')) {
      setIsValid(e.target.closest('form').checkValidity());
    }
  };

  const resetForm = (newValues = initialValues) => {
    setValues(newValues);
    setErrors({});
    setIsValid(false);
  };

  return { values, handleChange, setValues, errors, isValid, resetForm };
};