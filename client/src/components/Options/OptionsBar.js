import React, {useState} from 'react';
import '../styles/OptionsBar.scss'
import Option from "./Option";
import ProfitModal from "../ModalWindow/ProfitModal";
import {useSelector} from "react-redux";
import DeliveryForm from "../Forms/DeliveryForm";

const OptionsBar = () => {
    const [seeModal, setSeeModal] = useState(false);
    const [seeDeliveryForm, setSeeDeliveryForm] = useState(false);

    return (
        <div className='seeOptionsBar'>
            <div className="optionsTitle">
                Options
            </div>
            <div className="optionsBackground">
                <Option name={"Pick-up from Mercabarna"} setSeeModal={setSeeModal} setSeeDeliveryForm={setSeeDeliveryForm}/>
                <Option name={"Standart delivery"} setSeeModal={setSeeModal} setSeeDeliveryForm={setSeeDeliveryForm}/>
                <Option name={"Smart delivery"} setSeeModal={setSeeModal} setSeeDeliveryForm={setSeeDeliveryForm}/>
            </div>
            {seeModal && <ProfitModal setSeeModal={setSeeModal}/>}
            {seeDeliveryForm && <DeliveryForm setSeeDeliveryForm={setSeeDeliveryForm}/>}
        </div>
    );
};

export default OptionsBar;