import React from 'react'
import styled from 'styled-components'
import { AiOutlineDeploymentUnit, AiOutlineRead } from 'react-icons/ai'

const AboutUs = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1 className="section-title about-us-title">Our Story</h1>
        <div className="row">
          <div className="col-lg-7">
            <div className="about-card">
              <AiOutlineRead className="icon" />
              <h3>Humble Beginnings</h3>
              <p>
              In the early days of the digital age, the need for a reliable, unbiased news source became increasingly evident. Amidst a sea of misinformation and sensationalism, InsightDC emerged as a beacon of truth. Founded by a small team of dedicated journalists, this news platform was determined to cut through the noise and deliver facts to its readers. Operating out of a modest office space in downtown Washington, D.C., the team worked tirelessly, sifting through stories and verifying facts, ensuring that every article upheld the highest standards of journalism. Their commitment to truth and integrity quickly earned InsightDC a reputation as one of the most trusted news sources in the capital. As the site grew in popularity, its influence spread beyond the city's borders, but its core mission remained the same: to provide clear, unbiased news in an era of uncertainty.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-card">
              <AiOutlineDeploymentUnit className="icon" />
              <h3>Access to Resources</h3>
              <p>
              Contact us to help 
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 5rem 0;

  .about-us-title {
    margin-bottom: 4rem;
    font-size: 180%;
  }

  .about-card {
    background-color: #fafafa;
    padding: 40px;
    border-radius: 5px;
    min-height: 464px;
  }

  .icon {
    width: 90px;
    height: auto;
    background-color: var(--card-icon-bg);
    padding: 1rem;
    border-radius: 0.8rem;
    margin-bottom: 1rem;
    box-shadow: 0 7px 25px #b6eaffb4;
  }

  @media screen and (max-width: 767px) {
    .about-card {
      margin-bottom: 1rem;
    }
  }
`

export default AboutUs
