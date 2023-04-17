import axios from "axios";

export default axios.create({
    baseURL: 'https://ecommerce-platform-v1-bi2pkswgsq-uk.a.run.app'
    //headers: {"ngrok-skip-browser-warning": "true"}
});