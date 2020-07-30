import React, { Component } from "react";
import Axios from "axios";


export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItem: {}
        }
    }

    componentWillMount() {
        this.getPortfolioItem();
    }

    getPortfolioItem() {
        Axios.get(`https://nilshaugen.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
         { withCredentials: true})
    .then(response => {
        this.setState({
            portfolioItem: response.data.portfolio_item
        })
    })
    .catch(error => {
        console.log("getportfolioitems error", error)
    });

    }

    render() {
        const {
            banner_image_url,
            catgeory,
            description,
            id,
            logo_url,
            thumb_image_url,
            url,
            name
        } = this.state.portfolioItem;

        const bannerStyles = {
            backgroundImage: "url(" + banner_image_url + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
          };
      
          const logoStyles = {
            width: "200px"
          };

        return (
            <div className="portfolio-detail-wrapper">

                <div className="banner" style={bannerStyles}>

                    <img style={logoStyles} src={logo_url} />

                </div>

                <div className="portfolio-detail-description-wrapper" >

                    <div className="name">
                        {name}
                    </div>

                    <div className="description">
                        {description}
                    </div>

                    <div className="bottom-content-wrapper">
          <a href={url} className="site-link" target="_blank">
            Visit {name}
          </a>
        </div>
                </div>
               
            </div>
        )
    }
}
