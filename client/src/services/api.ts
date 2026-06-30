import axios from "axios";

const api=axios.create({

    baseURL:"https://gappyai-r53u.onrender.com/api",

    headers:{

        "Content-Type":"application/json"

    }

});

export default api;