import axios from "axios";
import {setLogStyle, useLogStyle} from "./LogConfig";
import GlobalStore from "../Constants/GlobalStore";

const codeMessage = {
    200: "Lấy dữ liệu thành công",
    201: "Thêm mới hoặc sửa đổi thành công",
    202: "Thêm mới hoặc sửa đổi thành công",
    204: "Xóa dữ liệu thành công.",
    400: "Yêu cầu đã được phát hành với một lỗi. Máy chủ không tạo hoặc sửa đổi dữ liệu.",
    401: "Người dùng không có quyền (mã thông báo, tên người dùng, lỗi mật khẩu).",
    403: "Người dùng được ủy quyền nhưng quyền truy cập bị cấm.",
    404: "Không thể kết nối đến server",
    406: "Định dạng được yêu cầu không khả dụng.",
    410: "Tài nguyên được yêu cầu sẽ bị xóa vĩnh viễn và sẽ không còn khả dụng nữa.",
    422: "Đã xảy ra lỗi xác thực khi tạo đối tượng.",
    500: "Đã xảy ra lỗi trên máy chủ. Vui lòng kiểm tra máy chủ.",
    502: "Cổng xấu",
    503: "The service is unavailable and the server is temporarily overloaded or maintained.",
    504: "Đã hết thời gian chờ của cổng.",
};

const BASE_URL = "http://178.128.214.191:2019";
const TIME_OUT = 180000;

export default (endPoint, data = null, method = "get", headers = {}) => {
    const token = GlobalStore.token;

    if (token) {
        headers = {
            ...headers,
            "Authorization": "Bearer " + token,
        };
    }

    console.log(useLogStyle + '----FETCHING START: ', setLogStyle('blue'), BASE_URL + endPoint, data, method, headers);

    return axios({
        url: BASE_URL + endPoint,
        method,
        headers,
        data,
        timeout: TIME_OUT,
    })
        .then((response) => {
            if (response) {
                const { status, data: d } = response;
                const { code, data, msg, time } = d;
                if (code < 300) {
                    console.log(useLogStyle + '----FETCHING SUCCESS: ', setLogStyle('green'), d, status);
                    return data;
                }
                throw new Error(msg)
            }
        })
        .catch((error) => {
            const { response, message, errors } = error;
            console.log(useLogStyle + '----FETCHING FAIL: ', setLogStyle('red'), response, message, errors);
            if (response) {
                const { status, data } = response;
                console.log(data, status);
                if (status === 401 && token) //Unauthorite
                {
                    //do something
                }
                if (data) {
                    const { error, detail, message, errors } = data;
                    if (error) throw error;
                    if (errors && errors.length > 0) throw errors[0];
                    if (detail) throw detail;
                    if (message) throw message;
                }
                if (status >= 400) throw codeMessage[status] || "Có lỗi xảy ra";
            }

            if (errors && errors.length > 0) {
                console.log(errors);
                throw errors[0];
            }
            if (message) {
                console.log(message);
                if (error.message.includes("timeout of")) throw "Time out";
                if (message.toString().includes("Network Error"))
                    throw `Lỗi kết nối, vui lòng thử lại`;
                throw message;
            }

            if (error.toString().includes("Network Error")) throw `Lỗi kết nối, vui lòng thử lại`;
            throw error;
        });
};
