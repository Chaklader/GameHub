import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8cf5d11ea1534629be26f41dd4c9eaa9'
    }
})