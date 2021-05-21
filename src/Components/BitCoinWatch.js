import React from 'react'
import '../CSS/BitCoinWatch.css'


const BitCoinWatch = () => {
    return (
        <div className="bitCoinwatch">
            <div className="coins">
                <div className="coinProfile">
                    <p className="coin font-weight-bolder"><i class="fab fa-bitcoin bitIcon1"></i> BTC<p className="coinPrice">$ 50,466.75 <span className="coinPercent"> +0.67%</span> </p></p>
                </div>
            </div>
            <div className="watchlist">
                <h6 className="watchTitle text-center">Watch List</h6>
            <div className="watchlistContainer">
            <div className="coinInfo">
            <i class="fab fa-bitcoin bitIcon2"></i><p className="coin font-weight-bolder">Bitcoin<p className="coinAbrv">BTC</p></p>
                </div>
                <div className="coinPrices">
                        <p className="coinPrice">$ 50,466.75 <p className="coinPercent"> +0.67%</p></p>

                </div>
                </div>
                <div className="watchlistContainer">
            <div className="coinInfo">
            <i class="fab fa-bitcoin bitIcon2"></i><p className="coin font-weight-bolder">Bitcoin<p className="coinAbrv">BTC</p></p>
                </div>
                <div className="coinPrices">
                        <p className="coinPrice">$ 50,466.75 <p className="coinPercent"> +0.67%</p></p>

                </div>
                </div>
                <div className="watchlistContainer">
            <div className="coinInfo">
            <i class="fab fa-bitcoin bitIcon2"></i><p className="coin font-weight-bolder">Bitcoin<p className="coinAbrv">BTC</p></p>
                </div>
                <div className="coinPrices">
                        <p className="coinPrice">$ 50,466.75 <p className="coinPercent"> +0.67%</p></p>

                </div>
            </div>

            </div>
            <div className="recentActivity">
                <h6 className="watchTitle text-center">Recent Activity</h6>
                <div>
                    <h6 className="watchTitle text-center">You don't have any activity  <p className="recentSubtitle text-center">Make your first transaction</p></h6>

                </div>
            </div>
        </div>
    )
}

export default BitCoinWatch
