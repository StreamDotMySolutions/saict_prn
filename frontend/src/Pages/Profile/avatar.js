import { useRef } from 'react'
import camera1 from './img/camera1.svg'
import avatar from './img/avatar.webp'
import axios from '../../Libs/axios'

export const Avatar = () => {
    const inputRef = useRef(null)
    const handleClick = () => {

        // 👇️ open file input box on click of another element
        inputRef.current.click();
    }

    const handleFileChange = (event) => {

        // target the avatar file input
        const fileObj = event.target.files[0];
        if (!fileObj) {
          return;
        }
    
        // test the object
        //console.log('fileObj is', fileObj);
    
        // 👇️ reset file input
        event.target.value = null;
    
        // 👇️ is now empty
        //console.log(event.target.files);
    
        // 👇️ can still access file object here
        // console.log(fileObj);
        // console.log(fileObj.name);

        // get the Formdata
        const formData = new FormData()
        formData.append('file', fileObj) // selected file

        // submit as POST to API
        axios({
                url:  process.env.REACT_APP_BACKEND_URL + '/profile/avatar/store',   
                method: 'post',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then( function(response){
                console.log(response)
            })
            .catch ( function(error){
                console.log(error.response.data)
            })

      };

    return (
    <>
        <input
            style={{display: 'none'}}
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
        />

        <img 
            src={avatar} 
            alt="avatar"
            className="rounded-circle img-fluid" 
            style={{ 'width': '150px' }} 
        />
        <img
            src={camera1}
            alt="camera"   
            style={{ 'width': '30px' }}  
            onClick={handleClick} 
          
        />
    </>
    )
}