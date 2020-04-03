/* eslint-disable jsx-a11y/img-redundant-alt */
//yarn run deploy

import React from 'react';
import './style.css';
import PostImg from './../../assets/image-post.png';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
export default function Home() {
    return (

        <div className="home-page-container" >

            <div className="header">
                <h2>Mídia Magazine</h2>
            </div>

            <selection className="row" >

                <div className="leftcolumn">
                    <div className="card">
                        <h2>Eriton Ribeiro.</h2>
                        <img className="image-post" src={PostImg} alt="Image Post" />

                        <p>Militante esquerdista desde os quatorze anos,
                        iniciou sua nas comunidades eclesiais de base e no movimento popular,
                        através da CBB, comissão dos bairros de Belém, em seguida já jovem uniu seu empenho de militante
                        também no movimento estudantil, sendo que esteve presente nas grandes manifestações da capital
                        paraense em favor da meia passagem, uma vitória histórica para os estudantes do nosso estado,
                        neste período atuou nos grêmios das escolas Cordeiro de Farias e IEEP, Instituto de Educação do Estado do Pará.
                        Logo toda essa disposição para a luta foi direcionada ao movimento sindical,
                        unido com os trabalhadores da saúde do município de Belém, onde sou servidor até hoje.
                        Formado em administração, consciente das lutas da sociedade, mantenho o perfil aguerrido e disposto para as batalhas da vida.</p>
                    </div>
                </div>

                <div className="rightcolumn">
                    <div className="card">
                        <div>
                            <h2>About Me</h2>
                            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Popular Post</h3>
                    </div>

                    <div className="card">
                        <h3>Follow Me</h3>
                        <p>
                            <a className="icon" href="https://www.facebook.com/eriton.ribeiro.5">
                                <FaFacebook className="icon-social" />
                            </a>
                            <a className="icon" href="https://api.whatsapp.com/send?1=pt_BR&phone=5591980885252">
                                <IoLogoWhatsapp className="icon-social" />

                            </a>
                            
                        </p>
                    </div>

                </div>


            </selection>


            <div className="footer">
                <h2>Footer</h2>
            </div>

        </div>

    );
}