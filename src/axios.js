///Dummy Api need to creates my own!
import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'http://us-central1-clone-13d42.cloudfunctions.net/api' //API Url
    
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;
