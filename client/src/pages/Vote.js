import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { SINGLE_MATCHUP } from '../utils/queries';
import { CREATE_VOTE } from '../utils/mutations';
const Vote = () => {
  let { id } = useParams();
  const [voteNum,setVoteNum] = useState(0);
  const {loading, data} = useQuery(SINGLE_MATCHUP, {
    variables: {
      matchId:id
    }
  })

  const [createVote,{error}]=useMutation(CREATE_VOTE);

  const matchup = data?.oneMatchup||{}

  
  const handleVote = async (techNum) => {
    try {
      const res = await createVote({variables:{ matchId:id, techNum }});
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-white card-rounded w-50">
      {loading?(
        <h1>Loading...</h1>
      ):(
        <>
      <div className="card-header bg-dark text-center">
        <h1>Here is the matchup!</h1>
      </div>
      <div className="card-body text-center mt-3">
        <h2>
          {matchup.tech1} vs. {matchup.tech2}
        </h2>
        <h3>
          {matchup.tech1_votes} : {matchup.tech2_votes}
        </h3>
        <button className="btn btn-info" onClick={() => handleVote(1)}>
          Vote for {matchup.tech1}
        </button>{' '}
        <button className="btn btn-info" onClick={() => handleVote(2)}>
          Vote for {matchup.tech2}
        </button>
        <div className="card-footer text-center m-3">
          <br></br>
          <Link to="/">
            <button className="btn btn-lg btn-danger">View all matchups</button>
          </Link>
        </div>
      </div>
      </>
      )}
    </div>
  );
};

export default Vote;
