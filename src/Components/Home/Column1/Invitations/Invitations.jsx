import React from "react";
import theme from "../../../../theme";
import * as ImIocns from "react-icons/im";
import "./style.css";

const InvitationCard = () => {
  return (
    <div className='invitationCard'>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9UIOkBKZ88mbn0wjMtgO9JFTGJ_2TYQCrYQ&usqp=CAU'
        alt=''
        className='invitationImg'
      />
      <div className='invitationBtn'>
        <button style={{ fontSize: ".75rem", fontWeight: "bold" }}>
          Accept Invitation
        </button>
        <button>
          <ImIocns.ImCross size={15} />
        </button>
      </div>
    </div>
  );
};

function Invitations() {
  return (
    <div className='invitationContainer'>
      <div
        className='invitationHeading'
        style={{
          color: theme.headlines,
        }}
      >
        <span style={{ margin: 0 }}>INVITATIONS</span>
        <span className='invitationNoti'>4</span>
      </div>
      <InvitationCard />
    </div>
  );
}

export default Invitations;
