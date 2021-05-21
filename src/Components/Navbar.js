import React from 'react'
import '../CSS/Navbar.css'
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
const Navbar = () => {
    return (
        <div className="navBar">

            <div className="logoContainer">
             <a href="#"><img src="https://play-lh.googleusercontent.com/gvwnnIhHcfmFxYiN8YWsiwpNCezMcV-iOocx5PopZEYpbRSiqGQAHJdSR-neMeIJmQ" alt="logoUphold" /></a>
            </div>
            <div className="menu">
                <div className="menuIcons">
                    <Tooltip title="ss" placement="left-start"><Button><i class="far fas fa-chart-line"></i></Button></Tooltip>
                    <br />
                    <Tooltip title="ss" placement="left-start"><Button><i class="fas fas  fa-bars"></i></Button></Tooltip>
                    <br />
                     <Tooltip title="ss" placement="left-start"><Button><i class="fad fas fa-chart-pie-alt"></i></Button></Tooltip>
                    <br />
                     <Tooltip title="ss" placement="left-start"><Button><i class="far fas fa-ellipsis-v"></i></Button></Tooltip>

                </div>
            </div>

        </div>
    )
}



export default Navbar
