import React from 'react';
import Navbar from '../Components/Navbar';
import BitCoinWatch from '../Components/BitCoinWatch';
import BalanceCard from '../Components/BalanceCard';
import CheckOutCard from '../Components/CheckOutCard';
import '../CSS/Home.css';

const Home = () => {
    return (
        <div className="Home">
            <div className="container-fluid body p-0">
            <Navbar />
            <div className="row justify-content-center m-0">
            <div class="col ml-9 mt-4 ">
                <BitCoinWatch />
                    </div>
            <div class="col ml-1 mt-4">
                <BalanceCard />
                    </div>
            <div class="col ml-1 mt-4">
                <CheckOutCard />
            </div>
            </div>
        </div>
        </div>

    )
}

export default Home
