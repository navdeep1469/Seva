import React from "react";
import * as AiIcons from "react-icons/ai";
import "./style.css";

function Thoughts() {
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
      <button>
        <AiIcons.AiOutlinePaperClip size={25} />
        Post it!
      </button>
    </div>
  );
}

export default Thoughts;
