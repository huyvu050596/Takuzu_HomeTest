import fetchApi from "../Config/ApiConfig";

const METHOD = {
    POST: "post",
    GET: "get",
    PATH: "path",
    PUT: "put",
    DELETE: "delete",
};

export const getPaymentDetail = id => () =>
    fetchApi(`/payments/${id}`, null, METHOD.GET);

export const getAdvertiseDetail = id => () =>
    fetchApi(`/advertises/${id}`, null, METHOD.GET);

