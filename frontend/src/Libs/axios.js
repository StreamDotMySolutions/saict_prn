import Axios from 'axios'

const axios = Axios.create({
    baseURL:  (process.env.REACT_APP_BACKEND_URL),
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    //withCredentials: true,
})

// intercept every request
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // get the token set by signin
        config.headers.Authorization =  `Bearer ${token}`; // set the header according to Sanctum format
        return config; // return back config()
    },
    (error) => {
      return Promise.reject(error);
    }
  )


export default axios
