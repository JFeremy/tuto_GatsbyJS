import React from "react"
import { Link } from "gatsby"

const PoiPage = ({location}) => (
    <div>
        <dl>
            <dt>Titre</dt>
                <dd>{location.state.dataPoi.title}</dd>
            <dt>Catégorie</dt>
                {location.state.dataPoi.categories.edges.map(cat => 
                    <dd>{cat.node.title}</dd>)
                }
            <dt>Description</dt>
                <dd>{location.state.dataPoi.description}</dd>
            <dt>Adresse</dt>
                <dd>{location.state.dataPoi.location.address}</dd>            
        </dl>
    </div>
)

export default PoiPage;