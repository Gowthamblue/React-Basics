function MovieCards(props) {
    return (
        <div className="col-4 mb-4">
            <div className="card w-100">
                <div style={{ height: '300px', overflow: 'hidden' }}>
                    <img
                        src={props.image}
                        alt="card"
                        className="card-img-top"
                        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className="card-body bg-dark text-light">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">⭐ Rating {props.rate}</p>
                </div>
            </div>
        </div>
    );
}
export default MovieCards;
