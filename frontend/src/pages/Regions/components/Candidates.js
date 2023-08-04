import { Link } from 'react-router-dom'
const Candidates = ({candidates, candidateDataUrl}) => {

    const listItems = candidates.map((candidate) =>
        <>
        <Link className="row mb-4 bg-light" alt={candidate.candidate_name}  to={candidateDataUrl + candidate.id + '/' + candidate.slug}>
            <div className="col-md-3">
               
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

 
            <div className="col-md-4">
               
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
            <div className="col-md-4">
            
                <div className="p-3">
                    <div class="row">
                        <span className="mb-1 badge bg-success pill">rasmi - { candidate.official_count ? candidate.official_count : 0 }</span>
                        <span className="badge bg-warning text-dark pill">tidak rasmi - { candidate.unofficial_count ? candidate.unofficial_count : 0}</span>
                    </div>
                </div>
            </div>
        </Link>
        </>
    ); // listItems

    return listItems;
}
export default Candidates