import React from 'react'
import './Cart.scss'
import { posts } from '../../data/newProduct'
import CartDetals from '../../common/CartDetals/CartDetals'

const Cart = () => {
  return (
    <div className='card-section'>
        <div className="container">
            <div className="cards">
                <h3>Yangi chegirmalar</h3>
                <ul className='list'>
                    {posts.map(post => (
                        <CartDetals key={post.id} post={post} />
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}


export default Cart