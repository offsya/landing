import React from 'react';
import '../styles/DeliveryForm.scss'
import { CgClose } from 'react-icons/cg';
import {useDispatch, useSelector} from "react-redux";

const DeliveryForm = ({setSeeDeliveryForm}) => {
    return (
        <div className='modal' onClick={() => setSeeDeliveryForm(false)}>
            <div className='deliveryFormModal' onClick={(e) => e.stopPropagation()}>
                <div className='seeDeliveryText'>Standart delivery<CgClose className="closeButton" onClick={() => setSeeDeliveryForm(false)}/></div>
            </div>
        </div>
    );
};

export default DeliveryForm;