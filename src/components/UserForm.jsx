import React from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from './CustomInput';

const UserForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
    });

    const handleFormSubmit = (data) => {
        const formattedData = { ...data, age: Number(data.age) };
        alert("Submit thành công! F12 để xem data trong console.");
        console.log("Form Data Submitted:", formattedData);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5 shadow p-4 rounded bg-white">
                    <h3 className="mb-4 text-center">Registration Form</h3>

                    <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
                        <CustomInput
                            label="Name"
                            name="name"
                            register={register}
                            errors={errors}
                            rules={{ required: 'Name is required' }}
                        />

                        <CustomInput
                            label="Email"
                            name="email"
                            type="email"
                            register={register}
                            errors={errors}
                            rules={{
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email format',
                                },
                            }}
                        />

                        <CustomInput
                            label="Age"
                            name="age"
                            type="number"
                            register={register}
                            errors={errors}
                            rules={{
                                required: 'Age is required',
                                min: { value: 18, message: 'Age must be between 18 and 65' },
                                max: { value: 65, message: 'Age must be between 18 and 65' },
                            }}
                        />

                        <div className="d-grid gap-2 mt-2">
                            <button type="submit" className="btn btn-primary btn-lg">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserForm;