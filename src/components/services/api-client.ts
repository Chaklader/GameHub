import axios from "axios";


axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7e2bbf72caf4423dac9046ae149979a7'
    }
})