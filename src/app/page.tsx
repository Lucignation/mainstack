"use client"

import CustomInput from "@/components/ui/custom-input";
import Image from "next/image";
import { useForm } from "react-hook-form";

const Login = () => {
    const { control } = useForm();
    return (
        <div>
            <h1>Login</h1>
            <form action="">
                <CustomInput 
                    label="Email"
                    name="email"
                    defaultValue=""
                    placeholder="Enter your email"
                    isDisabled={false}
                    errorMessage=""
                    onBlur={() => {}}
                    onChange={() => {}}
                />
            </form>
        </div>
    );
};

export default Login;
