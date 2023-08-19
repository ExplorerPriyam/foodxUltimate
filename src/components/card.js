import React, { useEffect, useRef, useState } from 'react'
import {useDispatchCart,useCart } from './ContextReducer'
const Card = (props) => {
    let dispatch =useDispatchCart();
    const [qty,setQty]=useState(1);
    const [size,setSize]=useState("");
    const priceRef=useRef();
    let options=props.options;
    let priceOptions=Object.keys(options);
    let data=useCart()
    const handleAddToCart=async()=>{
        let food = []
        for (const item of data) {
          if (item.id === props.foodItem._id) {
            food = item;
    
            break;
          }
        }
        console.log(food)
        console.log(new Date())
        if (food !== []) {
          if (food.size === size) {
            await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
            return
          }
          else if (food.size !== size) {
            await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
            console.log("Size different so simply ADD one more to the list")
            return
          }
          return
        }
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size});
        console.log(data)
    }
    let finalPrice=qty* parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])
    return (
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
            <img src={props.foodItem.img} className="card-img-top" alt="..." height={120} width={120}style={{objectFit:'fill'}}/>
            <div className="card-body">
                <h5 className="card-title">{props.foodItem.name}</h5>
                
                <div className='container w-100'>
                    <select className='m-2 h-100  bg-success rounded' style={{ background: "green" }} onChange={(e)=>setQty(e.target.value)}>
                        {Array.from(Array(10), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            )
                        })}
                    </select>
                    <select className='m-2 h-100   rounded' ref={priceRef} style={{ background: "green" }} onChange={(e)=>setSize(e.target.value)}>
                       {priceOptions.map((data)=>{
                        return <option key={data} value={data}>{data}</option>
                       })}
                    </select>
                    <div className='d-inline  h-100 fs-3'>{finalPrice}Rs.</div>
                </div>
            </div>
           <div className='justify-center container mb-2'>
           <hr>
            </hr>
            <button className='btn text-white justify-center ms-2' onClick={handleAddToCart}style={{background:"blue"}}>Add to Cart🛒</button>
           </div>
        </div>
    );
}

export default Card;