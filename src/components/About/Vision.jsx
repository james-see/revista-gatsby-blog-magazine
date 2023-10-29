import React from 'react'
import styled from 'styled-components'

const Vision = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col grid">
            <div className="grid-item grid-item-title">
              {' '}
              <div className="title">
                <h2>Committed to Clarity</h2>
              </div>
            </div>

            <div className="grid-item grid-item-right grid-item-vision ">
              {' '}
              <div className="vision container">
                <h3>Vision</h3>
                <p>
                At InsightDC, our vision extends beyond just reporting the news. We aspire to reshape the very landscape of journalism by prioritizing transparency, integrity, and inclusivity. In a world where information is power, we believe in empowering our readers with knowledge that is both accurate and enlightening. We envision a future where news platforms act as bridges, connecting diverse communities and fostering understanding. By steadfastly adhering to the highest journalistic standards and continuously adapting to the ever-evolving digital age, InsightDC is committed to being not just a news source, but a beacon of hope for a more informed and united world.
                </p>
              </div>
            </div>

            <div className="grid-item grid-item-right grid-item-mission">
              {' '}
              <div className="mission container">
                <h3>Mission</h3>
                <p>
                At the heart of InsightDC is a resolute mission: to combat the pervasive onslaught of propaganda and disinformation that clouds today's media landscape. We understand the grave implications of unchecked falsehoods, and we are unyielding in our commitment to deliver news that is both factual and unbiased. Every story we publish undergoes rigorous verification, ensuring that our readers receive information untainted by hidden agendas or misleading narratives. In a world rife with misinformation, InsightDC stands as a bulwark, dedicated to preserving the sanctity of truth in journalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .col {
    display: grid;
    width: 100%;
    min-height: 450px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'title vision'
      'title mission';
    border-right: 1px solid var(--border-color-light);
    border-top: 1px solid var(--border-color-light);
    border-bottom: 1px solid var(--border-color-light);
    padding: 0;
    margin-bottom: 5rem;
  }

  .grid-item-right {
    border-left: 1px solid var(--border-color-light);
  }

  .grid-item-title {
    grid-area: title;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-self: center;
  }

  .grid-item-vision {
    grid-area: vision;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-self: center;
    border-bottom: 1px solid var(--border-color-light);
  }

  .grid-item-mission {
    grid-area: mission;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-self: center;
  }

  .grid-item {
    padding: 2.5rem;
  }

  .vision {
  }

  .mission {
  }

  @media screen and (max-width: 767px) {
    text-align: center;

    .col {
      display: grid;
      width: 100%;
      min-height: 450px;
      grid-template-rows: 0.5fr 1fr 1fr;
      grid-template-columns: 1fr;
      grid-template-areas:
        'title'
        'vision'
        'mission';
      padding: 0;
      margin-bottom: 2rem;
    }
    .grid-item-right,
    .col,
    .grid-item-vision {
      border: none;
    }
    .grid-item {
      padding: 0;
    }

    h3 {
      position: relative;
      display: inline-block;
    }

    .vision h3::after {
      position: absolute;
      content: '';
      background-color: #ffe7b8;
      width: 109%;
      height: 6px;
      left: 0;
      bottom: 4px;
      z-index: -1;
    }

    .mission h3::after {
      position: absolute;
      content: '';
      background-color: #b8faff;
      width: 109%;
      height: 6px;
      left: 0;
      bottom: 4px;
      z-index: -1;
    }
  }
`

export default Vision
