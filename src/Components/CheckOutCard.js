import React from 'react'
import {useState } from 'react'
import '../CSS/CheckOutCard.css'
import CurrencyModal from '../Components/CurrencyModal'


const CheckOutCard = () => {
    const [Modal, setModal] = useState(false)

    function modalHandler() {
        setModal(true);
}

    return (
        <div className="CheckOutCard">
            <div className="checkOptions">
                <h6 className="checkOutTitle text-center">Anything to Anything</h6>
            <div className="checkBtns">
                <button className="transactBtn" type="button">Transact</button><button className="repeatBtn" type="button">Repeat</button>
            </div>
            </div>
            <div className="checkForms">
            <p className="firstCurrencysubtitle">From</p>
            <div class="input-group firstCurrency">
                <input type="text" class="form-control" placeholder="0" aria-label="Text input with dropdown button" />
                <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" onClick={modalHandler}></button>

                </div>
                </div>
                {Modal && <CurrencyModal/>}
                <div class="input-group equivalentCurrency">
                <input type="text" class="form-control" placeholder="0" aria-label="Text input with dropdown button" />
                <div class="input-group-append">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" aria-haspopup="true" aria-expanded="false">USD</button>
                </div>
                </div>


                <p className="finalCurrencysubtitle">To</p>
            <div class="input-group finalCurrency">
                <input type="text" class="form-control" placeholder="0" aria-label="Text input with dropdown button" />
                <div class="input-group-append">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                </div>
                </div>
            </div>
            <div className="checkButton">
            <button className="PreviewBtn" type="button">Preview</button>
            </div>
        </div>
    )
}

export default CheckOutCard
