import React from 'react'
import styled from 'styled-components'
import { Content, Title } from 'helpers'
import { Container, Columns } from 'bloomer'
import Perk from './Perk'

const Wrapper = styled.section`
  position: relative;
`

const PaddedContainer = styled(Container)`
  padding: 60px 0;
  @media (max-width: 768px) {
    padding: 60px 0 28px;
  }
`

const PaddedColumns = styled(Columns)`
  margin-top: 60px !important;
  margin-bottom: 60px !important;
  position: relative;
`

const PerksSection = ({ title, columns }) => (
  <Wrapper>
    <PaddedContainer>
      <Content>
        <Title>{title}</Title>

        <PaddedColumns>
          {columns.map(perk => <Perk key={perk.title} {...perk} />)}
        </PaddedColumns>
      </Content>
    </PaddedContainer>
  </Wrapper>
)

export default PerksSection
