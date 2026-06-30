import api from "./api";
import type { LoginData, LoginResponse } from "../types/auth";
import type { SignupData } from "../types/auth";

export async function loginUser(data: LoginData) {

    const response = await api.post<LoginResponse>(
        "/auth/login",
        data
    );

    return response.data;

}

export async function signupUser(data: SignupData) {

    const response = await api.post(
        "/auth/signup",
        data
    );

    return response.data;
}