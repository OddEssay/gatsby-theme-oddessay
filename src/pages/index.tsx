import * as React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import {Heading,Text} from '../components/typeography'
import {Card} from '../components/cards'
import storybookImg from './storybook.png'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
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
      <div>
        <Heading title='A Theme by Paul Bennett-Freeman' />
        <Text>
          Welcome to your new{' '}
          <strong>{this.props.data.site.siteMetadata.title}</strong> site.
        </Text>
        <Link to="/page-2/">Go to page 2</Link>
        <Text>Now go build something great.</Text>
          <Card title='Storybook' backgroundImage={storybookImg}>
            <Link to="/storybook/">View the Storybook for this theme.</Link>
          </Card>
      </div>
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
