import React from 'react';
import SectionContent from './sectioncontent';

const PagenotFound = ({ msg }) => {
    return (
        <>
            <div className="section__bg">
                {' '}
                <div className="bg"></div>
            </div>
            <div className="section__body">
                <SectionContent
                    showInitButton={false}
                    msg={msg}
                />
            </div>
        </>
    );
};

export default PagenotFound;
