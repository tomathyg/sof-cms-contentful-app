import React, { FC, Fragment } from 'react';

interface SubmissionImage {
  url: string;
}

interface Submission {
  name: string;
  text: string;
  submissionImage: SubmissionImage;
}

interface SubmissionsGalleryProps {
  submissions: Submission[];
}

const SubmissionsGallery: FC<SubmissionsGalleryProps> = ({ submissions }) => {
  return (
    <div>
      {submissions.map((item, index) => (
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