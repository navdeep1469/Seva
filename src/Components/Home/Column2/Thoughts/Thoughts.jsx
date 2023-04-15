import React from "react";
import * as AiIcons from "react-icons/ai";
import "./style.css";
import theme from "../../../../theme";
import Button from "../../../Button/Button";

function Thoughts() {
  const style = {
    x: 0.6,
    y: 0.5,
    backgroundcolor: theme.backGroundSecondry,
    color: "white",
    borderWidth: 0,
    bordercolor: "white",
  };
  return (
    <div className='thoughts'>
      <img
        alt='profile-pic'
        src='https://images.news9live.com/h-upload/2022/07/02/448078-sidhu.jpg?w=663'
        className='profilePic'
        width={"7%"}
        style={{ borderRadius: 12 }}
      />
      {/* <span>What's new, Sidhu? </span> */}
      <input
        type='text'
        className='thtsInput'
        placeholder="What's new, Sidhu?"
      />
      <Button
        title={"Post it!"}
        icon={<AiIcons.AiOutlinePaperClip size={25} />}
        style={style}
      />
    </div>
  );
}

export default Thoughts;
