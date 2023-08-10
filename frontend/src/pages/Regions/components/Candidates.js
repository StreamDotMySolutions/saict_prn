import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Candidates = ({candidates, candidateDataUrl}) => {

    
    const highestVote = Math.max(...candidates.map(candidate => candidate.official_count));

    const listItems = candidates.map((candidate) =>
        <>
        <Link 
            key={candidate.id} 
            className={candidate.official_count !== 0 && candidate.official_count === highestVote ? 'row p-3 mb-4  border border-2 border-success' : 'row p-3 mb-4 bg-light'}
            alt={candidate.candidate_name}  
            to={candidateDataUrl + candidate.id + '/' + candidate.slug}>
          
          
        <div className="col-sm-2 d-flex align-items-center justify-content-center">
               
                <div className="p-3">
                   
                    {candidate.url ? (
                        <img 
                            alt={candidate.candidate_name} 
                            style={{ width: '70px', height: 'auto', display: 'block', margin: '0 auto' }} 
                            className="rounded" 
                            src={candidate.url} />
                        ) : (
                        <img 
                            alt={candidate.candidate_name} 
                            style={{ width: '70px', height: 'auto', display: 'block', margin: '0 auto' }}
                            className="rounded" 
                            src="/img/no-image.png" />
                    )}

                    
                </div>
            </div>

 
            <div className="col-sm-4 d-flex align-items-center justify-content-center">
                <div className="p-3">
                    <strong>{candidate.candidate_title?.toUpperCase()} {candidate.candidate_name?.toUpperCase()}</strong>
                     <br />
                    <span className='text-muted'>
                        {candidate.party_coalition && candidate.party_name
                            ? candidate.party_coalition.toUpperCase() === candidate.party_name.toUpperCase()
                            ? candidate.party_coalition.toUpperCase()
                            : `${candidate.party_coalition.toUpperCase()} - ${candidate.party_name.toUpperCase()}`
                            : 'N/A'}
                    </span>  
                </div>
            </div>
            <div className="col-sm-3 d-flex align-items-center justify-content-center">
               
                <div className='card'>
                        <div className='card-body text-center'>
                            <h2>
                                <span className='text-muted '>
                                    {candidate.party_coalition }
                                </span>
                            </h2>  
                        </div>
          
                </div>
            </div>

            <div className="col-sm-3 d-flex align-items-center justify-content-center">
                <div className="card text-center pe-2 ps-2 pt-2 m-3 ">
                    
                    <h4>
                        <FontAwesomeIcon icon="fas fa-vote-yea" />
                        {" "}
                        { candidate.official_count ? candidate.official_count : 0 }
                    </h4>    
                </div>

                <div className="text-center ms-3 me-3">
                    
                    { candidate.status === "RASMI" && candidate.official_count === highestVote &&
                 
                        <h1 className='text-success'><FontAwesomeIcon icon="fa-solid fa-check" /></h1>
                       
                    }  
                </div>
            </div>
        </Link>
        </>
    ); // listItems

    return listItems;
}
export default Candidates