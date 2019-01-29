import React, {Fragment} from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
        }
        render = {data => (
            <Fragment>
                <h1>{data.site.siteMetadata.title}</h1>
                <p>Hello world !</p>
            </Fragment>
        )}
    />
)
