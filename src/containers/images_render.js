import React, { Component } from 'react';
import { connect } from 'react-redux';

class ImagesRender extends Component {
  renderImages(data) {
    return(
      <div className="col-xs-6 col-sm-4 col-md-3" key={data.description}>
        <div className="thumbnail">
          <a href={data.link} target="_blank">
          <div className="caption">
            <p>{data.title}</p>
          </div>
          <img src={data.media.m} alt="Lights" style={{width: 100 + '%'}}/>
          </a>
        </div>
      </div>
    );
  }
  
  render(){
    return(
      <div className="row">
        {this.props.images.title && this.props.images.items.map(this.renderImages)}
      </div>
    );
  }
}

function mapStateToProps({ images }) {
  return { images };
}

export default connect(mapStateToProps)(ImagesRender);
