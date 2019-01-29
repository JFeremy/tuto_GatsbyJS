import React, {Fragment} from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export default () => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
                democityv4 {
                    pois {
                        edges {
                            node { 
                                id
                                title
                                categories {
                                    edges {
                                        node {
                                            title
                                        }
                                    }
                                }
                                description        
                                location {
                                    address
                                    zipCode
                                    city
                                }
                                websites
                            }
                        }
                    }
                }
            }
        `
        }
        render = {data => (
            <Fragment>
                <h1>{data.site.siteMetadata.title}</h1>
                <p>Hello world !</p>
                <div>
                    <ul>
                        {data.democityv4.pois.edges.map(dataPoi => 
                        <li key={dataPoi.node.id}> 
                            <Link to='/poiPage/' state={{ dataPoi: dataPoi.node }}>{dataPoi.node.title}</Link>
                        </li>)}
                    </ul>
                </div>
            </Fragment>
        )}
    />
)
