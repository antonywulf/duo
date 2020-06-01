import React from 'react';
import OrganizersItem from './OrganizersItem';

const OrganizersList = ({ organizers }) => {
  return (
    <div className="row">
      {organizers &&
        organizers.map(project => {
          const { id, ...otherProps } = project;
          return <OrganizersItem key={id} project={otherProps} />;
        })}
    </div>
  );
};

export default OrganizersList;
