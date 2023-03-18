import React from 'react'
import { posts } from '../data/newProduct'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import './Product.scss'

const Product = () => {
  const {id} = useParams();
  const post = posts.find((item) => item.id === id - 0)
  console.log(posts);

  return <Helmet title={post.title}>
    <div className="product-section">
      <div className="container">
        <div className="product">
          <div className="product__top">
            <div className="left">
              <img src={post.img} alt={post.title} />
              <div className="like">
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="center">
              <h4>{post.title}</h4>
              <p>{post.cost}</p>
              <p>{post.price}</p>
            </div>
            <div className="right">
              salom
            </div>
          </div>
        </div>
      </div>
    </div>
  </Helmet>
}

export default Product