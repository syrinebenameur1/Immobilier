// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8800/api',
  withCredentials: true, // Ensures cookies are sent in requests
  headers: {
    'Content-Type': 'application/json',
  },
});



export default axiosInstance;


/**/




/*        <UploadWidget
          uwConfig={{
            cloudName: "syrineuser",
            uploadPreset: "immobilier",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />*/