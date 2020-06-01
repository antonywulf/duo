import React from 'react';
import { Link } from 'react-router-dom';
import { Alarm, Book, Briefcase, Cart } from '../ui/svg/svg';

const OrganizersItem = props => {
  const { title, type, linkTo } = props.project;

  let color = 'text-muted';
  let footerText = 'Soon...';

  if (type === '2') {
    color = 'text-info';
    footerText = 'Test mode';
  }
  if (type === '1') {
    color = 'text-success';
    footerText = 'Tap to use';
  }

  return (
    <div className="col-6 mb-4">
      <Link to={linkTo} className="removeTextDecoration">
        <div className="card">
          <p className={`card-header text-center text-capitalize ${color}`}>{title}</p>
          <div className={`card-img text-center py-3 ${color}`}>
            {title === 'PURCHASES' && <Cart />}
            {title === 'RECIPES' && <Book />}
            {title === 'PLANS' && <Briefcase />}
            {title === 'REGIME' && <Alarm />}
          </div>

          <div className="card-footer text-center text-muted">{footerText}</div>
        </div>
      </Link>
    </div>
  );
};

export default OrganizersItem;
