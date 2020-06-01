import React from 'react';
import OrganizersList from '../organizers/OrganizersList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const Dashboard = props => {
  const { organizers, auth } = props;

  if (!auth.uid) return <Redirect to="signin" />;

  return (
    <div className="container mt-4 pt-4">
      <h1 className="text-center pt-3">Organizers</h1>
      <hr />
      <OrganizersList organizers={organizers} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    organizers: state.firestore.ordered.organizers,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'organizers', orderBy: ['type'] }])
)(Dashboard);
