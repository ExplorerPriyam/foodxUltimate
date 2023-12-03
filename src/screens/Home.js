import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/card'
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search,setSearch]=useState("");
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    // console.log(response[0]);
    setFoodCat(response[1]);
    setFoodItem(response[0]);
  }
  useEffect(() => {
    loadData()
  }, [])


  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel data-bs-theme="dark">
          <Carousel.Item >
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/1378x1080/?pizza"
              alt="First slide"
              id='image_x'
            />

          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/1378x1080/?momos"
              alt="Second slide"
              id='image_x'
            />

          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/1378x1080/?burger"
              alt="Third slide"
              id='image_x'
            />

          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <div className="d-flex m-3 justify-content-center" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"value={search} onChange={(e)=>{setSearch(e.target.value)}} />
        </div>
      </div>
      <div className='container'>
        {
          foodCat !== [] ? foodCat.map((data) => {
            return (
              <div className='row mb-3'>
                <div key={data.id} className='fs-3 m-3'>
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem !== [] ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map(filterItems => {
                  return (
                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                      <Card  foodItem={filterItems}
                        options={filterItems.options[0]}
                        

                      />
                    </div>
                  )
                }) : <div> </div>}
              </div>
            )
          }) : ""
        }

      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home;