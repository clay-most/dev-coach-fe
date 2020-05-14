import React from 'react';
import HowContainer from './HowStyles';

const How = () => {
  return (
    <HowContainer>
      <div className={'title'}>
        <h1>How does DevCoach work?</h1>
      </div>
      <section className={'how-cards-container'}>
        <article className={'how-card'}>
          <div>
            <h2>Find Coaches</h2>
            <p>
              Search for coaches based on the skills you want to
              improve.
            </p>
          </div>
          <div className={'card-image'}>
            <img src='#' alt='search UI screen shot'></img>
          </div>
        </article>
        <article className={'how-card'}>
          <div className={'card-image'}>
            <img src='#' alt='booking UI screen shot'></img>
          </div>
          <div>
            <h2>Schedule a Meeting</h2>
            <p>Request a meeting with a coach who interests you.</p>
          </div>
        </article>
        <article className={'how-card'}>
          <div>
            <h2>Chat With Your Coach</h2>
            <p>Chat via instant message or video call.</p>
          </div>
          <div className={'card-image'}>
            <img src='#' alt='chat UI screen shot'></img>
          </div>
        </article>
        <article className={'how-card'}>
          <div className={'card-image'}>
            <img src='#' alt='resources UI screen shot'></img>
          </div>
          <div>
            <h2>Get Resources</h2>
            <p>Access curated materials from your coach.</p>
          </div>
        </article>
        <article className={'how-card'}>
          <div>
            <h2>The Developers</h2>
            <p>Meet the team behind the app.</p>
          </div>
          <div className={'card-image'}>
            <img src='#' alt='developer portait collage'></img>
          </div>
        </article>
      </section>
    </HowContainer>
  );
};

export default How;
