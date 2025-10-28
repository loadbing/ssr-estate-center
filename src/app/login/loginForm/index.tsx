'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../../../components/loader";
import { User } from "@/core/domain/entities/User";
import Cookies from 'js-cookie';

import styles from "./loginForm.module.css";

type PropertiesFormProps = {
    validate: (formData: FormData) => Promise<string>
}

const LoginForm = ({ validate }: PropertiesFormProps) => {
    const [loading, setLoading] = useState(false);
    const defaultEmail = 'superadmin@gmail.com'

    const { register, formState: { errors } } = useForm<User>({
        defaultValues: { email: defaultEmail }
    });

    const handleAction = async (formData: FormData) => {
        setLoading(true)
        formData.append("email", defaultEmail);
        const name = await validate(formData);

        if (name) {
            Cookies.set('user', name, {
                expires: 1,
                path: '/',
                secure: true,
                sameSite: 'strict'
            });
            window.location.href = '/'
        }

        setLoading(false)
    };

    return (
        !loading ? <div className={styles['login-form']}>
            <p>Iniciar sesión</p>

            <form action={handleAction}>
                <div>
                    <label>Usuario</label>
                    <input {...register("email", { required: "El nombre de la propiedad es un campo requerido", disabled: true })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" {...register("password", { required: "La dirección de la propiedad es un campo requerido" })} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <button type="submit">Ingresar</button>
            </form>
        </div> : <Loader />
    );
}

export default LoginForm

