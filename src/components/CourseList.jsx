import React from 'react'
import { useSelector } from 'react-redux'
import CourseItem from './CourseItem';

function CourseList() {
    const {cartItems,quantity,total} = useSelector((state)=>state.cart);
   // console.log(cartItems);
  return (
   <>
   {
    quantity < 1 ? (
        <section className='cart'>
            <header>
                <h4>Sepetim</h4>
                <h4>Bombos</h4>
            </header>
        </section>
    ) : (
        <section className='cart'>
        <header>
            <h4>Sepetim</h4>
            
        </header>
        <div>
            {
                cartItems.map((item) =>{
                    return < CourseItem key={item.id} {...item} />
                })
            }
        </div>
        <footer>
            <hr />
            <div>
                <h4>Toplam Tutar <span>{total} TL</span></h4>
            </div>
            <button className='clearButton'>Temizle</button>
        </footer>
    </section> 
    )
   }
   </>
  )
}

export default CourseList
