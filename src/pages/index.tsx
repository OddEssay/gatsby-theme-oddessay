import * as React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import {Text} from '../components/typeography'
import {Card} from '../components/cards'
import storybookImg from './storybook.png'

import HeroLayout from "../layouts/hero";


interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }
  public render() {
    return (
      <HeroLayout
          siteTitle={this.props.data.site.siteMetadata.title}
          sections={[
              {title:'About',link:'/about'},
              {title:'About',link:'/about'},
              {title:'About',link:'/about'},
            {title:'About',link:'/about'},
            {title:'About',link:'/about'},
              ]}
      >
          <Card title='Storybook' backgroundImage={storybookImg}>
            <Link to="/storybook/">View the Storybook for this theme.</Link>
          </Card>
      </HeroLayout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
