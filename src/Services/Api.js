import fetchApi from "../Config/ApiConfig";

const METHOD = {
    POST: "post",
    GET: "get",
    PATH: "path",
    PUT: "put",
    DELETE: "delete",
};

export const login = data => () =>
    fetchApi(`/users/login`, data, METHOD.POST);

export const loginWithValidate = data => () =>
    fetchApi(`/users/loginWithValidate`, data, METHOD.POST);

export const sendRegEmail = data => () =>
    fetchApi(`/users/send_reg_email`, data, METHOD.POST);

export const validateRegEmail = data => () =>
    fetchApi(`/users/validate_reg_email`, data, METHOD.POST);

export const register = data => () =>
    fetchApi(`/users/register`, data, METHOD.POST);

