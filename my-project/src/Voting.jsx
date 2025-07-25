import { useState } from "react";
import VotingCard from "./VoteButton";

function Voting() {
  const [options, setOptions] = useState([
    { name: "React", votes: 0, color: "btn-primary" },
    { name: "Angular", votes: 0, color: "btn-danger" },
    { name: "Java", votes: 0, color: "btn-info" },
    { name: "Vue.js", votes: 0, color: "btn-success" }
  ]);

  const totalVotes = options.reduce((acc, curr) => acc + curr.votes, 0);

  const handleVote = (index) => {
    const updated = [...options];
    updated[index].votes += 1;
    setOptions(updated);
  };

  return (
    <>
      <h1 className="text-center">🗳️ My Voting App</h1>
      <div className="row">
        {options.map((option, index) => (
          <VotingCard
            key={option.name}
            name={option.name}
            vote={option.votes}
            color={option.color}
            percent={totalVotes === 0 ? 0 : (option.votes / totalVotes) * 100}
            onVote={() => handleVote(index)}
          />
        ))}
      </div>
    </>
  );
}

export default Voting;
