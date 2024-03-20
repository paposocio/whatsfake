import './App.css'
import PageHeader from './components/pageHeader/PageHeader';
import Contact from './components/sideBar/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaugh, faPlus, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function App() {
  const contacts = Array(50).fill(null);
  return (
    <>
      <PageHeader />
      <div className='sideBar'>
        <div className='contactsContainer'>
          {contacts.map((contact, index) => (
            <Contact key={index} />
          ))}
        </div>
      </div>
      <div className='messagesContainer'>
        <div>mensajes</div>
      </div>
      <div className='chatContainer'>
        <FontAwesomeIcon icon={faFaceLaugh} size='xl' style={{ color: "#8696A0", }} />
        <FontAwesomeIcon icon={faPlus} size='xl' style={{ color: "#8696A0", }} />
        <textarea placeholder='Escribe un mensaje'></textarea>
        <FontAwesomeIcon icon={faPaperPlane} size='xl' style={{ color: "#8696A0", }} />
      </div>
    </>
  )
}
export default App
