import React from 'react'
import { connect } from 'react-redux'
import * as traits from '../../lib/traits'

import Container from 'constructicon/container'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Heading from '../../components/Heading'
import Grid from 'constructicon/grid'
import GridColumn from 'constructicon/grid-column'
import ListSection from '../../components/ListSection'
import favicon from '../../favicon.png'

import Helmet from 'react-helmet'
import TraitsProvider from 'constructicon/traits-provider'

const Root = ({ checklist }) => {
  return (
    <TraitsProvider traits={traits}>
      <div
        style={{
          fontWeight: '500',
          lineHeight: '1.5em',
          WebkitFontSmoothing: 'antialiased',
          fontFamily: '-apple-system, BlinkMacSystemFont, "helvetica neue", arial, sans-serif'
        }}
      >
        <Helmet>
          <link
            href='https://fonts.googleapis.com/css?family=Merriweather:400i'
            rel='stylesheet'
          />
          <link rel='icon' type='image/png' href={favicon} />
        </Helmet>

        <Header />

        <Container width={40} spacing={{ t: 3, r: 1, b: 3, l: 1 }}>
          <Grid>
            <GridColumn md={9}>
              <Heading styles={{ padding: '3em 0 1em' }}>
                {checklist.length} helpful guidelines centered around 4 basic
                design principles, to help create consistent, user&nbsp;friendly
                website designs&nbsp;in&nbsp;sitebuilder.
              </Heading>
              <p>
                Read more about design principles in this great guide <br />
                <a
                  style={{
                    color: '#0000FF',
                    textDecoration: 'underline'
                  }}
                  href='http://learndesignprinciples.com'
                >
                  learndesignprinciples.com
                </a>
                &nbsp;by Melissa&nbsp;Mandelbaum
              </p>
            </GridColumn>
          </Grid>
        </Container>

        <ListSection />

        <Footer />
      </div>
    </TraitsProvider>
  )
}

const mapStateToProps = ({ checklist }) => ({ checklist })

export default connect(mapStateToProps)(Root)
