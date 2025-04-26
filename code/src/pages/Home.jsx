import { Button } from "@mui/material";
import { Layout } from "../components/layouts/Layout";
import React from 'react';
import { Link } from "react-router-dom";
//import fastfoodImage from '../assets/images/fastfood1.jpeg';
import fastfoodImage from '../assets/images/resturant.jpg';



import '../styles/HomeStyle.css';


 const Home  = () => {



    return (
       <Layout>
    <div className="home" style={{ backgroundImage: `url(${fastfoodImage})` }}>
        <div className="headerContainer">
            <h1 >Foot WebSite</h1>
            <p>Best Food in Pakistan Sindh</p>
            <Link to="/menu">
            <Button>
                ORDER NOW
            </Button>
            </Link>

        </div>

       </div>

       </Layout>
         
    )

    
}
export default Home;