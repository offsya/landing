import React, {useState} from 'react';
import '../styles/OptionsBar.scss'
import ProfitModal from "../ModalWindow/ProfitModal";
import {useSelector} from "react-redux";
import DeliveryForm from "../Forms/DeliveryForm";
import OptionMobile from "./OptionMobile";

const OptionsBarMobile = () => {
    const [seeModal, setSeeModal] = useState(false);
    const [seeDeliveryForm, setSeeDeliveryForm] = useState(false);
    return (
        <div className='seeOptionsBar-mobile'>
            <div className="optionsBackground-mobile">
                <OptionMobile name={"Pick-up from Mercabarna"} setSeeModal={setSeeModal} setSeeDeliveryForm={setSeeDeliveryForm}/>
                <OptionMobile name={"Standart delivery"} setSeeModal={setSeeModal} setSeeDeliveryForm={setSeeDeliveryForm}/>
                <OptionMobile name={"Smart delivery"} setSeeModal={setSeeModal} setSeeDeliveryForm={setSeeDeliveryForm}/>
            </div>
            {seeModal && <ProfitModal setSeeModal={setSeeModal}/>}
            {seeDeliveryForm && <DeliveryForm setSeeDeliveryForm={setSeeDeliveryForm}/>}
        </div>
    );
};

export default OptionsBarMobile;