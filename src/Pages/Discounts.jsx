import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { posts } from '../data/newProduct'


const Discounts = () => {
  return <Helmet title={"chegirmalar"}>
    {posts.map(post => (
      <img src={post.img} alt="" />
    ))}
  </Helmet>
}

export default Discounts