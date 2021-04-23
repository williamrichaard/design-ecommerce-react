import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
  background: url(${props => props.image});
  height: 720px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px
`

const SectionLogo = styled.img`
  align-self: end;
  width: 128px;
  margin: 0 auto;
`

const SectionTitleGroup = styled.div`
`

const SectionTitle = styled.h3`
  color: white;
`

const SectionText = styled.p`
  color: white;
`

const Section = props => (
  <SectionGroup image={props.image}>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section