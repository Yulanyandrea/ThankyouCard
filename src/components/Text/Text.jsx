import { useNavigate } from 'react-router-dom'
import './style.css';

const Text = () =>{
  const navigate = useNavigate();
  const handleClick = (e) =>{
    e.preventDefault();
    navigate('/text')


  }
  return(
    <>
      <header className="textContainer">
        <h1 className="textContainer__title" >Esto es para decir gracias ! 💜</h1>
        <button className="textContainer__button" onClick={handleClick}>Otro botón más</button>
      </header>

    </>

  )
}
export default Text;
