import { Talent } from '../../utils/filter';

const ResultsDisplay = (props: { data: Talent[] }) => {
  return(
    <div className='Display'>
      {props.data.map((item, index) => (
      <p className='Result' key={index} >{item.name}</p>))}
      {props.data.length < 1 && 
      <p className='Result'>No matches found</p>}
    </div>
  );
};

export default ResultsDisplay;