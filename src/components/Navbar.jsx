import React from 'react'
import { BsFillBasketFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const {quantity} = useSelector((store)=>store.cart);
    //console.log(useSelector((state)=>state.cart));
  return (
    <nav>
        <div className='navbar'>
            <h3>Kurs Uygulamasi</h3>
            <div className='navDiv'> 
              <BsFillBasketFill className='itemsIcon' />
              <p>{quantity}</p>
            </div>
             
        </div>
    </nav>
  )
}

export default Navbar