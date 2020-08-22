import axios from "axios";
import { RootUrl } from "../config";

export const Login = async (email, password) => {
  try {
    const res = await axios.post(`${RootUrl}/api/users/login`, {
      email,
      password,
    });

    await localStorage.setItem("token", res.data.token);
    await localStorage.setItem("email", res.data.email);

    return {
      data: res.data,
      success: true,
    };
  } catch (error) {
    return {
      error: error.response,
      success: false,
    };
  }
};

export const Register = async (email, password) => {
    try {
      await axios.post(`${RootUrl}/api/users`, {
        email,
        password,
      });
  
      return await Login(email, password)
    } catch (error) {
      return {
        error: error.response,
        success: false,
      };
    }
  };

export const Logout = async () => {
  await localStorage.removeItem("token");
  await localStorage.removeItem("email");

  return {
    success: true,
  };
};

export const CheckToken = async () => {
  try {
    const token = await localStorage.getItem("token");
    if (token) {
      return {
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  } catch (error) {
    return {
      success: false,
    };
  }
};
