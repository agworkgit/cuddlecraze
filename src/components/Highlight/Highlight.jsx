import HighlightCard from './HighlightCard';
import './highlight.css'

function Highlight() {
    return ( 
    <div className="highlight-section container">
        <h1 className='highlight-title'>Pets Of The Month</h1>
        <HighlightCard/>
    </div> );
}

export default Highlight;