import React from 'react';
import { TextField } from '@mui/material';

const CustomInput = ({ label, type = 'text', register, name, rules, errors }) => {
    return (
        <div className="mb-4">
            <TextField
                fullWidth
                label={label}
                type={type}
                variant="outlined"
                {...register(name, rules)}
                error={!!errors[name]}
                helperText={errors[name]?.message}
            />
        </div>
    );
};

export default CustomInput;