import React, {useEffect} from 'react';

import { UserState } from '../atom/Userinfo';
import {useRecoilState} from 'recoil';
import { Link } from 'react-router-dom';

const Home = () => {
    
    const [userset, setUserset] = useRecoilState(UserState);
    useEffect(()=>{
        localStorage.setItem("home",<div>Bienvenue sur Coumbiland</div>)
    },[])
    return (
        <div className="Container" >
            <h1 className="Pstitre">Je vous souhaite la bienvenue sur mon site </h1>
            <Link class="dropdown-item Cdropdown" to="/posts">articles </Link>
            <Link class="dropdown-item Cdropdown" to="/posts/create">create article </Link>
            
        </div>
    )
}
export default Home;