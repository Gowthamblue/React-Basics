function Card() {
    return (
        <>

            <div className="container">
                <h1 className="mb-5">Toggle Back Ground Cards</h1>
                <div className="row">
                    <div className="col-md-4">

                        <div className="card" style={{ width: '300px' }}>
                            <img
                                src="https://placehold.co/300x200/000000/FFF"
                                alt="card"
                                className="card-img-top"
                            />
                            <button
                            onClick={()=>
                            {
                                document.querySelector(".card-body").classList.toggle("bg-warning")
                            }
                            }
                            className="btn btn-warning position-absolute top-0 end-0 m-2">
                                Toggle
                            </button>

                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, illo?
                                </p>
                                <a href="#" className="btn btn-outline-primary">Read more</a>
                            </div>
                            <div className="card-footer">2 days to go</div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
