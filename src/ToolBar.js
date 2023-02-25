// create tool bar for `Editor` and `Preview`
// need to pass String `Editor` or `Preview`

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

const ToolBar = ({ text, maxEditor}) => {
    return (
        <div className="toolBar">
            <FontAwesomeIcon icon={ faFreeCodeCamp } className="fcc" /> 
            <p> { text } </p>
            {!maxEditor && <button className='maxArrow'>
                 <FontAwesomeIcon icon={ faMaximize } />
            </button>}
            {maxEditor && <button className='minArrow'>
                <FontAwesomeIcon icon={ faDownLeftAndUpRightToCenter } />
            </button>}
            
            
        </div>
    );
    
}

export default ToolBar;