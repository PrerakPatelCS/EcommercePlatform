import { useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import api from '../../api/axiosConfig';
import { Card } from 'react-bootstrap';
import './Devlog.css';



const Devlog = ({devlog, getDevlog, user}) => {

    const [logText, setLogText] = useState(''); // add state variable for the input field

    const postDevlog = async (jsonFormData) =>{
        try{
            const response = await api.post("api/devlog", jsonFormData, {
                headers: {
                  "Content-Type": "application/json"
                }
            });
            await getDevlog();
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const jsonFormData = JSON.stringify({ log: logText });
        console.log(jsonFormData);
        postDevlog(jsonFormData);
        setLogText('');
    }

    function handleInputChange(event) {
        setLogText(event.target.value);
    }

  return (
    <div className='devlog-items-container'>
        
        {user && user.role === 'admin' && (
            <form onSubmit={handleSubmit}>
                <label form="Log">Log</label>
                <input type='text' id='log' name='log' value={logText} onChange={handleInputChange} />
                <button type='submit'>Submit</button>
            </form>
        )}

        {
        devlog && devlog.length > 0 
        ? devlog.map((devlogItem) =>{
            return(
                <Card className='devlog-cards' key={devlogItem.id}>
                    <Card.Body>
                        <h6 className='card-title'><strong>{devlogItem.localDateTime}</strong></h6>
                        <h3 className='card-description'><strong>{devlogItem.log}</strong></h3>
                    </Card.Body>
                </Card>
            );
            
        })
        :(
            <div className='loading'>
                <h4>Loading.....</h4>
                <PacmanLoader color={'yellow'} size={250}/>
            </div>
        )}
        
    </div>
  );
};

export default Devlog