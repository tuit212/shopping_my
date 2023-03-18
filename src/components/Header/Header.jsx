import React from 'react'
import './Header.scss'
import { Link , NavLink} from 'react-router-dom'
import Helmet from '../Helmet/Helmet'
import { useState  } from 'react'
import {posts} from '../../data/newProduct'

const Header = () => {
    const [query , setQuery] = useState(" ")

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(posts.filter(post=>post.title.toLowerCase().includes(query)));

    }


  return <Helmet title={'Home'}>
    <header className='site-header'>
        <div className="top">
            <div className="container">
                <div className="header">
                    <div className="header__top">
                        <Link to={'discounts'} title='chegirmalar' className='discounts'>
                            Chegirmalar
                        </Link>
                        <div className="cards">
                            <Link to={'tel:+998912989808'}  className='phone'>
                                +998 91 298 98 08
                            </Link>
                            <div className="lang">
                                <span className='langs active'>Uzb</span>
                                <span className='langs'>Eng</span>
                                <span className='langs'>Ru</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="center">
            <div className="container">
                <div className="header">
                    <div className='header__center'>
                        <Link to={'/'} className='logo'>
                            Pro Exit
                        </Link>
                        <form className="input" onSubmit={handleSubmit}>
                            <input type="text" placeholder='search...' 
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </form>
                        <div className="content">
                            <ul className='header__card'>
                                <Link to={"/like"} className='header__card-item' title='Sevimlilar'>
                                    <div><i class="fa fa-heart"></i></div>
                                    <p>Sevimlilar</p>
                                    <span id='Sevimlilar'>0</span>
                                </Link>
                                <Link to={"/cart"} className='header__card-item' title='Korzinka' >
                                    <div><i class="fa-solid fa-cart-shopping" id='Korzinka'></i></div>
                                    <p>Korzinka</p>
                                    <span id='Korzinka'>0</span>
                                </Link>
                                <Link className='header__card-item' title='Kirish'>
                                    <div><i class="fa-sharp fa-solid fa-truck"></i></div>
                                    <p>Truck</p>
                                </Link>
                                <Link className='header__card-item' title='Kirish'>
                                    <div><i class="fa-solid fa-user" ></i></div>
                                    <p>Kirish</p>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="container">
                <div className="header">
                    <div className="header__bottom">
                        <div className="navbar">
                            <NavLink to={"newProducts"} className='nav'>
                                <i class="fa-solid fa-bars"></i>
                                Barcha mahsulotlar
                            </NavLink>
                            <NavLink to={"products"} className='nav'>
                                Yangi mahsulotlar
                            </NavLink>
                            <NavLink to={"discounts"} className='nav'>
                                Chegirmalar
                            </NavLink>
                            <NavLink to={"sportGoods"} className='nav'>
                                Sport Buyumlari
                            </NavLink>
                            <NavLink to={"books"} className='nav'>
                                Kitoblar
                            </NavLink>
                            <NavLink to={"tvSet"} className='nav'>
                                Televizor
                            </NavLink>
                            <NavLink to={"food"} className='nav'>
                                Oziq-ovqat
                            </NavLink>
                            <NavLink to={"phone"} className='nav'>
                                Telefonlar va gadjetlar
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  </Helmet>
}

export default Header


