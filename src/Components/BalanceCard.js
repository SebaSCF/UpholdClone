import React from 'react';
import '../CSS/BalanceCard.css';

const BalanceCard = () => {
    return (
        <div className="BalanceCard">
            <div className="Balance">
                <p className="balanceTitle">Total Balance</p>
                <h4>$ 0.00</h4>
                <hr className="balanceDiv" />
            </div>
            <div className="balanceGraph text-center">
            <div class=""><button class="balanceBtn">1H</button><button class="balanceBtn">1D</button><button class="balanceBtn">1W</button><button class="balanceBtn">1M</button><button class="balanceBtn">1Y</button></div>
            </div>
            <div className="balanceFundings">
            <h6 className="balanceTitle text-center">Let's fund your account  <p className="recentSubtitle text-center">Deposit quickly using your credit/debit card, bank account or crypto</p></h6>
            </div>
        </div>
    )
}

export default BalanceCard
