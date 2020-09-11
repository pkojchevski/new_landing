import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LatestPostImage from '../landing/LatestPosts/LatestPostImage/LatestPostImage'
import Loader from '../loader/Loader'

class CulturalInteractions extends Component {
// state = {posts:[], page:0, last:false}
	constructor(props){
    super(props);
// this.state={posts:this.props.posts.slice(0,7), page:0, last:false}
   }

//    static getDerivedStateFromProps(nextProps, prevState) {
//      console.log(prevState)
//     if (prevState.posts !== nextProps.posts) {
//       return { posts: nextProps.posts.slice(0, 8), page:1};
//     }

//     return null;
// }



// componentWillReceiveProps(nextProps){
//   console.log(nextProps.posts)
//   if (nextProps.posts !== this.props.posts) {
//     this.setState({posts:this.props.posts.slice(0,8), page:1, last:false})
//   }
// }
	
  render() {
	this.shoot = (id) => {
		// alert('id = '+id);
		window.location.href = "/post/"+id;
  }

  const handleClick = () => {
    this.props.readMorePosts()
  }

    return (
      <>
        {!this.props.loader ? <div className="energy-container">
          <Row>
            {this.props.posts && this.props.posts
            .map((item, i) => {
              return (
                <Col
                item={item ? 1: 0}
                  xs={12}
                  sm={12}
                  md={6}
                  lg={3}
                  xl={3}
                  key={item.ID}
				  onClick={() => this.shoot(item.ID)}
                  // style={{ margin: 0, padding: 0 }}
                >
                   <LatestPostImage post={item}/>
                  {/* <div className="cultural-categ-container">
                    <img
                      className="energy-grid-image"
                      src={item.feature_image}
                      alt="energy"
                    />
                    <div className="energy-tag" style={{width:"150px"}}>{item.tag}</div>
                    <div className="energy-topic">{item.post_title}</div>
                    <div className="energy-team-date">
                      <div className="energy-team">{item.url}</div>
                      <div className="energy-date">{item.post_date}</div>
                    </div>
                  </div> */}
                </Col>
              );
            })}
          </Row>
          {!this.props.last && (<div className="read-more-container">
            <button className="read-more-button" onClick={handleClick}>read more</button>
          </div>
          ) 
        }
        </div>
   : 
   <div style={{height:'100vh'}}>
          <Loader/></div>}
      </>
    );
  }
}

export default CulturalInteractions;
