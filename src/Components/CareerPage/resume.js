import { useNavigate } from "react-router-dom";
const BASEURL = process.env.REACT_APP_BASE_URL;
export default function useHandleResume() {
  const navigate = useNavigate()
  const handleResume = async (formData)=>{
      try{
        const response = await fetch(`${BASEURL}/app/candidate/upload-resume`, {
            method: 'POST',
            body: formData,
          });
        //hanlde response
        if (response.status === 200) {
            navigate(-1);
          }   else {
            console.log('Something went wrong');
          }
    
        }
        catch(err){
            console.log(err);
            
        }
      }

return {handleResume}
}