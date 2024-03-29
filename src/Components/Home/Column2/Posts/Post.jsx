import React, { useState } from "react";
import "./style.css";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import theme from "../../../../theme";
import CommentItem from "./CommentItem";

function Post() {
  const [commentsVisible, setCommentsVisible] = useState(false);

  return (
    <div className='post'>
      <div className='postHeader'>
        <div className='nameContainer'>
          <img
            src='https://images.news9live.com/h-upload/2022/07/02/448078-sidhu.jpg?w=663'
            alt=''
            style={{
              borderRadius: 15,
              border: "1px solid black",
              marginRight: ".5rem",
            }}
            width={"9%"}
          />
          <div>
            <p style={{ fontWeight: "bold", color: theme.headlines }}>
              Sidhu Moosewala
            </p>
            <p style={{ color: theme.para }}>Punjabi Singer and Rapper.</p>
            <p style={{ color: theme.para }}>6h ago</p>
          </div>
        </div>
        <div className='desc'>
          <p style={{ color: theme.headlines, fontWeight: "530" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, consectetur. Suscipit qui labore reiciendis, aperiam
            voluptas necessitatibus? Quisquam hic natus quia voluptate maiores
            quo inventore culpa porro iste, rem voluptatum!
          </p>
        </div>
      </div>
      <div className='postBody'>
        <img
          src='https://yt3.googleusercontent.com/ytc/AGIKgqM3qPU6g2pIoP5ydGrSxzdVOsE7zfwPE1-BZRr7Hw=s900-c-k-c0x00ffffff-no-rj'
          // src='https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSGzpz2yMixrhO4txosprDHgSEQKF5MEfI84NO4WQsfRZKI-eJXU8SLTLjkJyZ3usGPhthkfiz8jzBSnk0'
          alt=''
        />
      </div>
      <div className='postFooter'>
        <div className='likesAndComments'>
          <span>78 Likes</span>
          <span>84 Comments . 7 Reposts</span>
        </div>
        <div
          style={{
            display: "flex",
            width: "92%",
            borderTop: ".25px solid #e4ecec ",
            justifyContent: "space-between",
            padding: ".25rem 0rem",
          }}
        >
          <div
            className='react pressed'
            onClick={() => {
              console.log("Like");
            }}
          >
            <FiIcons.FiHeart
              size={25}
              // color={theme.para}
              className='icons pressed'
              onClick={() => {}}
            />
            Like
          </div>
          <div
            className='react pressed'
            onClick={() => {
              // console.log("Comment");
              setCommentsVisible(!commentsVisible);
            }}
          >
            <AiIcons.AiOutlineComment
              size={25}
              // color={theme.para}
              className='icons pressed'
            />
            Comment
          </div>
          <div
            className='react pressed'
            onClick={() => {
              console.log("Repost");
            }}
          >
            <AiIcons.AiOutlineShareAlt
              size={25}
              // color={theme.para}
              className='icons pressed'
            />
            Repost
          </div>
        </div>
        <div
          className='commentSection'
          style={{
            display: commentsVisible ? "flex" : "none",
          }}
        >
          <div className='addComment'>
            <div className='commentProfile'>
              <img
                src='https://images.news9live.com/h-upload/2022/07/02/448078-sidhu.jpg?w=663'
                alt=''
                width={"100%"}
                style={{ borderRadius: 15 }}
              />
            </div>
            <input type='text' placeholder='Add a comment....' />
          </div>

          <CommentItem />
        </div>
      </div>
    </div>
  );
}

export default Post;
