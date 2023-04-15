import React from "react";
import theme from "../../../../theme";

function CommentItem() {
  return (
    <div className='commentItem'>
      <div className='image'>
        <img
          src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7KS0zSU11NDCHdv0AN48XLPskqd5DFxyoOJ900axEBf3ln0_O'
          alt=''
          width={"100%"}
        />
      </div>
      <div className='commentBody'>
        <div className='header'>
          <p style={{ fontWeight: "bold", color: theme.headlines }}>
            Amrit Man
          </p>
          <p style={{ color: theme.para }}>Punjabi Singer</p>
          <br />
          <p style={{ color: theme.headlines, fontSize: ".85rem" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            veritatis perspiciatis, pariatur dicta ducimus enim! Veritatis
            magnam est animi aspernatur, dignissimos eum nesciunt, itaque at
            cumque, ad et qui labore?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perferendis placeat nulla ad, ipsam explicabo
            adipisci aut? Dolorem inventore ullam sapiente consequuntur natus
            mollitia tempora, molestiae aspernatur, facilis culpa, autem
            excepturi?
          </p>
        </div>
        <div className='body'></div>
      </div>
    </div>
  );
}

export default CommentItem;
