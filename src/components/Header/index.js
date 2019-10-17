import React , {Component} from 'react';
import './style.scss';

//Imagens
import Logo from "../../assets/img/logo.png"

export default class Header extends Component{
    render(){
        return(
            <>
                <header>    
                    <img className="logo" src={Logo} />
                </header>
            </>
        )
    }
}
