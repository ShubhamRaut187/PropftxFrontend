import React from 'react';
import './Styles/PageTitle.css'

function PageTitle({Title}) {
    return (
        <div className='page_title_main'>
            <h1>{Title}</h1>
        </div>
    );
}

export default PageTitle;