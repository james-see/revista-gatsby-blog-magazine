import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import { StaticImage } from 'gatsby-plugin-image'
import Title from './Title'
import styled from 'styled-components'
import SidebarCard from './SidebarCard'
import './sidebar-styles.scss'

const About = ({ postTitle }) => {
  return (
    <SidebarCard>
      <Wrapper>
        <Title title="Who We Are" />
        <StaticImage
          src="../../assets/logonew.png"
          layout="fixed"
          width={100}
          height={100}
          alt="author"
          className="img"
        />
        <p>Find the best resources to think on your favourite topic.</p>
        <p>InsightDC is free and open-source news.</p>
        <SocialLinks title={postTitle} className="sidebar-icons" />
      </Wrapper>
    </SidebarCard>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--grey-5);
  }
  .img {
    /* border-radius: 50%; */
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`
export default About
