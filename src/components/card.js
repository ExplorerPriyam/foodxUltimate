import React from 'react'

const card = () => {
    return (
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
            <img src="https://source.unsplash.com/random/?fruit" className="card-img-top" alt="..." height={140} width={120}/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is Imp Text</p>
                <div className='container w-100'>
                    <select className='m-2 h-100  bg-success rounded' style={{ background: "green" }}>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            )
                        })}
                    </select>
                    <select className='m-2 h-100  bg-success rounded' style={{ background: "green" }}>
                        <option value="half"> Half</option>
                        <option value="full"> Full</option>
                    </select>
                    <div className='d-inline  h-100 fs-3'>TotalPrice</div>
                </div>
            </div>
        </div>
    );
}

export default card;