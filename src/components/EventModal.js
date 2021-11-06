import React from 'react';
import Modal from './Modal';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../styles/eventModal.css'

const EventModal = ({ toggleDetails }) => {

    let location = useLocation()
    let eventId = location.pathname.slice(8)
    let event = useSelector(state => state.events.events.filter(e => e.id === eventId)[0])
    // let user = useSelector(state => state.users.currentUser)

    let pageHeader = event.type === "paath" ? "TIME SLOTS" : "DETAILS"

    return ( 
        <Modal>
            <div className='event-modal'>
                <div>
                    <p><span>{pageHeader}</span><span>type: {event.type}</span> <span>organizer: {event.user}</span></p>
                </div>
            </div>
            <div className='event-modal-cloud' onClick={toggleDetails}></div>
        </Modal>
    );
}
 
export default EventModal;