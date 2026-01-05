import React, { useState } from 'react';

const ReadMore = ({text, limit=200}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (text.length <= limit) {
        return <p>{text}</p>;
    }
    return (
        <p className='text-accent'>
            {isExpanded ? text : text.slice(0, limit)}
            {!isExpanded && '... '}
            <span 
                onClick={() => setIsExpanded(!isExpanded)}
                className='text-[#FF8C47] cursor-pointer  font-semibold'
            >
                {isExpanded ? "Read less" : "Read more"}
            </span>
        </p>
    );
};

export default ReadMore;