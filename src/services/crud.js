import axios from 'axios';

export const getApi = async (url, callback) => {
    const token = await localStorage.getItem("token");
    try {
        const res = await axios.get(url, {
            headers: {
                authorization: token
            }
        });

        return {
            data: res.data,
            success: true
        };
    } catch (error) {
        await localStorage.removeItem("token");
        await callback()
        
        return {
            error: error.response,
            success: false
        };
    }
};

export const postApi = async (url, data) => {
    const token = await localStorage.getItem("token");
    try {
        const res = await axios.post(url, data, {
            headers: {
                authorization: token
            }
        });

        return {
            data: res.data,
            success: true
        };
    } catch (error) {
        return {
            error: error.response,
            success: false
        };
    }
};

export const patchApi = async (url, data) => {
    const token = await localStorage.getItem("token");
    try {
        const res = await axios.patch(url, data, {
            headers: {
                authorization: token
            }
        });
        return {
            data: res.data,
            success: true
        };
    } catch (error) {
        return {
            error: error.response,
            success: false
        };
    }
};

export const putApi = async (url, data) => {
    const token = await localStorage.getItem("token");
    try {
        const res = await axios.put(url, data, {
            headers: {
                authorization: token
            }
        });
        return {
            data: res.data,
            success: true
        };
    } catch (error) {
        return {
            error: error.response,
            success: false
        };
    }
};

export const deleteApi = async url => {
    const token = await localStorage.getItem("token");
    try {
        const res = await axios.delete(url, {
            headers: {
                authorization: token
            }
        });
        return {
            data: res.data,
            success: true
        };
    } catch (error) {
        return {
            error: error.response,
            success: false
        };
    }
};