import { useState } from "react";

export function useForm() {
    const [values, setValues] = useState({});
    const [errs, setErrs] = useState({});
    const [isValidForm, setIsValidForm] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setValues({...values, [name]: value});
        setErrs({...errs, [name]: event.target.validationMessage});
        setIsValidForm(event.target.closest('form').checkValidity());

    };

    return {values, setValues, handleChange, errs, isValidForm, setIsValidForm };
}

