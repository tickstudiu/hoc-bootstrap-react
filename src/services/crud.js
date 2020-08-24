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
        await localStorage.removeItem("email");

        await callback()

        return {
            error: error.response,
            success: false
        };
    }
};

export const postApi = async (url, callback, data) => {
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
        await localStorage.removeItem("token");
        await localStorage.removeItem("email");
        
        await callback()

        return {
            error: error.response,
            success: false
        };
    }
};

export const setVisible = async () => {
    const token = await localStorage.getItem("token");
    const email = await localStorage.getItem("email");
    
    try {
        const res = await axios.post('http://localhost:5000/api/visible', 
        {
            "email": email,
            "title": true,
            "firstName": true,
            "lastName": true,
            "gender": true,
            "language": true,
            "shirtSize": true,
            "university": true,
            "companyName": false,
            "department": false,
            "jobTitle": false,
            "phone": false,
            "city": false,
            "country": false,
            "countryCode": false,
            "postalCode": false,
            "state": false,
            "streetAddress": false,
            "movieGenres": false,
            "carMark": false,
            "money": false,
            "color": false
        }, {
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

export const patchApi = async (url, callback, data) => {
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
        await localStorage.removeItem("token");
        await localStorage.removeItem("email");
        
        await callback()

        return {
            error: error.response,
            success: false
        };
    }
};