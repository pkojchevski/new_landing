import React, { useEffect, Fragment, useState } from "react";
import classes from "./Content.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import TitleLine from "../TitleLine/TitleLine";
import FeaturedTopic from "../FeaturedTopic/FeaturedTopic";
import OPRPLatform from "../OPRPlatform/OPRPLatform";
import LatestsPosts from "../LatestPosts/LatestPosts";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Loader from '../../loader/Loader'


function Content() {

const [loader, setLoader] = useState(false);
const [data, setData] = useState({ hits: [] });
const [latestPosts, setLatestPosts] = useState([])
const [postsPerPage, setPostsPerPage] = useState(4)
const [page, setPage] = useState(2);
const [last, setLast] = useState(false)
const [posts, setPosts] = useState({});

  const history = useHistory();
  
  const shoot = (id) => {
		 history.push("/post/"+id);
		 window.location.reload();
	}
  
  useEffect(() => {
    async function fetchData() {
      setLoader(true)
    const result = await axios(
      'https://oneplanetrating.org/blog/apis/latest-posts.php',
    );
    setLoader(false)
    setData(result.data.hits);
    setLatestPosts(postsPerPage < result.data.hits.length ? result.data.hits.slice(0, postsPerPage) : result.data.hits)
    setLast(postsPerPage < result.data.hits.length ? false : true)
    }

    async function fetchPosts() {
      const result = await axios(
        'https://oneplanetrating.org/blog/apis/rightside-posts.php',
      );
        setPosts(result.data.posts);
      }

    fetchPosts();
    fetchData();

  }, []);

  
  const readPosts = () => {
    // let {data, last, page, postsPerPage} = this.state;
    let first = page * postsPerPage
    if(first < data.length-1) {
      data && setLatestPosts(data.slice(0, first))
      setPage(prevState => prevState+1)
    } else {
      data && setLatestPosts(data.slice(0, data.length-1))
      setLast(true)
    }
  }
  return (
    <Fragment>
      <main>
        {!loader ?<div>
        {posts && posts.length > 0 && 
        <section className={classes.SectionFirst} style={{
          backgroundImage:
            `linear-gradient(to right, rgba(0, 0, 0, 0.31),  rgba(0, 0, 0, 0.31)),
            url(${posts[0].imgUrl})`
        }}>
          <div className={classes.Text}>
            <div className={classes.Title}>
              {posts[0].title}
            </div>
            <button className={classes.TitleButton} onClick={() => shoot(posts[0].ID)}>READ MORE</button>
            {/* <button className={classes.TitleButton} onClick={getNextPosts}>READ MORE</button> */}
          </div>
          <div className={classes.ProgressBarWrapper}>
            <ProgressBar posts={posts.slice(1, 5)} />
          </div>
          <div className={classes.WorldMap}></div>
        </section>
        }
        </div> :
        <div className={classes.SectionFirst} style={{top:'200px'}}>
        <Loader/>
        </div>
        }
        <section className={classes.SectionSecond}>
          <TitleLine margin="15rem" title="Latest Posts" />
          <LatestsPosts posts={latestPosts} readMorePosts={readPosts} last={last}/>
        </section>

        <section className={classes.ThirdSection}></section>

        <section className={classes.FeaturedTopic}>
          <TitleLine title="Featured Topics" margin="30rem" />
          <FeaturedTopic />
        </section>

        <section className={classes.OPRPlatform}>
          <TitleLine title="OPR Platform" margin="60rem" />
          <OPRPLatform />
        </section>

        <section className={classes.FeaturedTopic2}>
          <TitleLine margin="38rem" title="Featured Topics" />
          <div className={classes.FT2Wrapper}>
            <img
              className={classes.FT2Image}
              src={require("../../../assets/images/Image 1.png")}
              alt="ft2image"
            />
            <div className={classes.Background}></div>
            <div className={classes.FT2Images}>
              <img
                className={classes.FT2SingleImage}
                src={require("../../../assets/images/b1.png")}
                alt="singleImage1"
              ></img>
              <img
                className={classes.FT2SingleImage}
                src={require("../../../assets/images/b1.png")}
                alt="singleImage2"
              ></img>
              <img
                className={classes.FT2SingleImage}
                src={require("../../../assets/images/b1.png")}
                alt="singleImage3"
              ></img>
              <img
                className={classes.FT2SingleImage}
                src={require("../../../assets/images/b1.png")}
                alt="singleImage4"
              ></img>
            </div>
          </div>
        </section>
      </main>
    </Fragment >
  );
}

// const mapDispatchToProps = dispatch => ({
//   getPosts: () => dispatch(fetchPosts()),
// });

// const mapStateToProps = state => ({
//   posts: state.posts.posts,
//   loading: state.isLoading
// });

export default Content;
