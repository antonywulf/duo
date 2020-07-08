import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import OrganizersItem from './OrganizersItem';
import styles from './Organizers.module.scss';

const organizers = [{ title: 'RECIPES', linkTo: 'recipes' }];

const Organizers = props => {
  const { auth } = props;

  if (!auth.uid) return <Redirect to="signin" />;

  return (
    <div className={`container mt-4 pt-4 text-center ${styles.block}`}>
      <h1 className={`py-3 ${styles.h1}`}>Organizers</h1>
      {organizers.map(organizer => (
        <OrganizersItem key={organizer.title} organizer={organizer} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Organizers);
