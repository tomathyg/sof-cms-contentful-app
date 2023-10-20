import React, { Fragment } from 'react';

function SubmissionsGallery(submissions) {
    //console.log("ARRAY:", Object.values(submissions));
    //console.log("TYPE OF:", typeof(Object.values(submissions[0])));
  return (
    <div>
      {Object.values(submissions)[0].map((item, index) => (
        <Fragment key={index}>
            <img 
                src={item.submissionImage.url} 
                alt={item.name} 
                style={{ margin: '10px' }} 
            />
            <p>{item.text}</p>
        </Fragment>
      ))}
    </div>
  );
}

export default SubmissionsGallery;
