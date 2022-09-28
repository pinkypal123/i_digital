import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Cart from "../cart/Cart"
import './Home.css'
export default function Home() {
    const [post, setPost] = useState([])
    const [cartItem, setCartItem] = useState([])
    // const navigate=useNavigate()
    useEffect(() => {
        fetch(' https://dummyjson.com/products?limit=100').then((res) => {
            return res.json()
        }).then((data) => {
            // console.log(data.products)
            setPost(data.products)
        })
    }, [])
    function titleSearch(e) {
        let filterTitle = post.filter((el) => {
            return el.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setPost(filterTitle)
    }
    function priceSearch(e) {
        let filterPrice = post.filter((el) => {
            return el.price === e.target.value
        })
        setPost(filterPrice)
    }
    function ratingSearch(e) {
        let filterRating = post.filter((el) => {
            return el.rating === e.target.value
        })
        setPost(filterRating)
    }
    function discountSearch(e) {
        let filterDiscount = post.filter((el) => {
            return el.discountPercentage === e.target.value
        })
        setPost(filterDiscount)
    }
    const addToCart = (e) => {
        console.log(e.target.id)
        let cartValue = post.map((el) => {
           if(e.target.id==el.id){
            console.log(el)
            return el
           }
           else{
            return;
           }
           
        })
        setCartItem(cartValue)

    }
    return (
        <>
            <div className="navbar">
                <div className="logo">BUY</div>
                <div className="cartIcon">Cart</div>
            </div>
            <header>
                <div className="headerContainer">
                    <div className="input">
                        <input type="text" onChange={(e) => titleSearch(e)}></input><button className="btn">Product</button>
                    </div>
                    <div className="input">
                        <input type="text" onChange={(e) => discountSearch(e)}></input><button className="btn">Discount</button>
                    </div>
                    <div className="input">
                        <input type="number" onChange={(e) => priceSearch(e)}></input><button className="btn">Price</button>
                    </div>
                    <div className="input">
                        <input type="number" onChange={(e) => ratingSearch(e)}></input><button className="btn">Rating</button>
                    </div>
                </div>
            </header>
            <div className="container">
                {post.map((el) => {
                    return <div className="listItem" key={el.id}>
                        <div className="listImages"><img src={el.images[0]} /></div>
                        <div className="cartBtn" id={el.id} onClick={(e) => addToCart(e)}>cart</div>
                        <div className="productItem">
                            <div className="title">{el.title}</div>
                            <div className=" costPrice">
                                <span className="price">Rs: ${el.price}</span>
                                <span className="rating">{el.rating}|<span className="discount">{el.discountPercentage}</span></span>
                            </div>
                        </div>

                    </div>
                })}
            </div>

            <div className="cartConatiner">
                {cartItem}
                <div>Cart</div>
                {
                    cartItem.map((el) => {
                        return <div className="cartProducts">
                            {/* <div className="cartImage">
                                <img src={el.images[0]}/>
                            </div> */}
                            <div className="cartTitle">
                                <div className="cartPrice">${el.price}</div>
                                <div className="cartTitle">{el.title}</div>
                            </div>

                        </div>
                    })
                }
            </div>
        </>
    )
}