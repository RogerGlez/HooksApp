import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target: { name, value } }) => {
        const newFormState = { ...formState, [name]: value };
        setFormState(newFormState);
    }

    const onResetForm = () => {
        setFormState({ ...initialForm });
    }

    return {
        formState,
        ...formState,
        onInputChange,
        onResetForm
    }
}