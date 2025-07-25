function VotingCard(props) {
  return (
    <div className="card m-4 col-md-5">
      <div className="card-body m-2">
        <h2>{props.name}</h2>
        <h4>Votes: {props.vote}</h4>

        <div className="progress mb-3" style={{ height: "25px" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: `${props.percent}%` }}
          >
            {Math.round(props.percent)}%
          </div>
        </div>

        <button className={`btn ${props.color}`} onClick={props.onVote}>
          Vote
        </button>
      </div>
    </div>
  );
}

export default VotingCard;
