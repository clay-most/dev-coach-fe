import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import uuid from 'uuid';
import { getFeedback } from '../../state/actions/feedbackActions';
import FeedbackRating from '../../components/DataVisualization/Rating';
import FeedbackCard from '../../components/Cards/FeedbackCard';
import EmptyFeedback from '../../components/Cards/EmptyFeedbackCard';
import StudentChart from '../../components/DataVisualization/StudentChart';

const StyledFeedback = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  .chart-container {
    margin-top: 1.4em;
    height: 32em;
    width: 100%;
    background: #fff;
    border-radius: 5px;
    padding: 1em;
    box-shadow: 0px 0px 4px rgba(82, 68, 110, 0.3);
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-bottom: 2em;
    color: #4a4a4a;
  }
`;

const Feedback = ({ user, getFeedback, feedback }) => {
  useEffect(() => {
    getFeedback(user.id, user.role_id);
  }, [getFeedback, user]);

  return (
    <StyledFeedback className='feedback-card-container'>
      <div className='chart-container'>
        <StudentChart />
      </div>
      {feedback && feedback.length ? (
        feedback.map(feedback => (
          <FeedbackCard
            key={uuid()}
            rating={<FeedbackRating rating={feedback.rating} />}
            feedback={feedback.feedback}
            topic={feedback.appointment_topic}
            date={feedback.appointment_datetime.slice(0, 15)}
            coachFirstName={feedback.first_name}
            coachLastName={feedback.last_name}
            avatarUrl={feedback.avatar_url}
          />
        ))
      ) : (
        <EmptyFeedback />
      )}
    </StyledFeedback>
  );
};

const mapStateToProps = state => {
  return {
    feedback: state.feedbackReducer.feedback,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, { getFeedback })(Feedback);