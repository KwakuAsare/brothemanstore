import axios from "axios";



export default {
    search: function() {
        return axios.get("'https://fakestoreapi.com/products");
    }
};