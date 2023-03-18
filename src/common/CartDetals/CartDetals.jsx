import React from 'react'
import { Link } from 'react-router-dom'
import '../../components/Cart/Cart.scss'

const CartDetals = ({post}) => {
  return (
    <Link to={`/discounts/${post.id}`} class="card">
        <img src={post.img} alt="" class="card-img-top" />
        <div class="card-body">
            <h5 className="card-title">
                {post.title}
            </h5>
            <span className='const'>
                {post.cost}
            </span>
            <span className='price'>
                {post.price}
            </span>
            <button className='card-btn'>
                Bir zumda olish
            </button>
        </div>
        <div className="card-pos">
            <div className="chegirma">
                <h4>{post.dics}</h4>
            </div>
            <div className="left">
                <div className="item">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="item">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default CartDetals