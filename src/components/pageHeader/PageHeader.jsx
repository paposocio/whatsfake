import './PageHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faSatellite, faComments, faSquarePlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

export default function PageHeader() {
    return (
        <>
            <header className='pageHeader'>
                <div className="sideBarHead">
                    <div className="userImageContainer">
                        <div className='userImageDiv'>
                            <div className="userImage"></div>
                        </div>
                    </div>
                    <div className="iconsContainer">
                        <div className="iconsGroup">
                            <FontAwesomeIcon icon={faUserGroup} size='lg' style={{ color: "#AEBAC1", }} />
                            <FontAwesomeIcon icon={faSatellite} size='lg' style={{ color: "#AEBAC1", }} />
                            <FontAwesomeIcon icon={faComments} size='lg' style={{ color: "#AEBAC1", }} />
                            <FontAwesomeIcon icon={faSquarePlus} size='lg' style={{ color: "#AEBAC1", }} />
                            <FontAwesomeIcon icon={faEllipsisVertical} size='lg' style={{ color: "#AEBAC1", }} />
                        </div>
                    </div>
                </div>
                <div className="mainHeader">
                    <div className="contactMainInfo">
                        <div className="contactMainPicture">
                            <div className='contactImageDiv'>
                                <div className="contactImage"></div>
                            </div>
                        </div>
                        <div className="contactMainName">
                            <h3>Messi</h3>
                            <h5>Haz click para ver la info del contacto</h5>
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}
