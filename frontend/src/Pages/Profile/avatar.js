import { useRef } from 'react'
import camera1 from './camera1.svg'
import avatar from './avatar.webp'

export const Avatar = () => {
    const inputRef = useRef(null)
    const handleClick = () => {

        // 👇️ open file input box on click of another element
        inputRef.current.click();
    }

    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
          return;
        }
    
        console.log('fileObj is', fileObj);
    
        // 👇️ reset file input
        event.target.value = null;
    
        // 👇️ is now empty
        console.log(event.target.files);
    
        // 👇️ can still access file object here
        console.log(fileObj);
        console.log(fileObj.name);
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
        <img   style={{ 'width': '30px' }}  onClick={handleClick} src={camera1}></img>
        </>
    )
}