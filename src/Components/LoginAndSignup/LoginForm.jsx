import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import * as Icons from "react-icons/ai";
import theme from "../../theme";
import "./styles.css";

function LoginForm() {
  return (
    <div className='loginFormContainer'>
      <div className='loginForm'>
        <div style={{ textAlign: "center", marginBottom: "3em" }}>
          <h1 style={{ color: theme.button }}>Login</h1>
        </div>
        <div className='inputContainer'>
          <FormControl variant='outlined' style={{ marginBottom: "1.5em" }}>
            <InputLabel
              htmlFor='username'
              style={{ color: theme.button, fontWeight: 540 }}
            >
              Username
            </InputLabel>
            <Input
              style={{ color: theme.button }}
              id='username'
              startAdornment={
                <InputAdornment position='end'>
                  <MdOutlinePersonOutline size={20} color={theme.button} />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant='standard' style={{ marginBottom: "1em" }}>
            <InputLabel
              htmlFor='password'
              style={{ color: theme.button, fontWeight: 540 }}
            >
              Password
            </InputLabel>
            <Input
              style={{ color: theme.button }}
              id='password'
              startAdornment={
                <InputAdornment position='end'>
                  <RiLockPasswordLine size={20} color={theme.button} />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            color: theme.button,
            fontSize: ".95rem",
            marginBottom: "2rem",
          }}
        >
          Forgot password?
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3rem",
            width: "100%",
          }}
        >
          <button className='btn'>Login</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              marginBottom: "1rem",
              color: theme.button,
              fontSize: ".95rem",
            }}
          >
            {" "}
            Or Sign Up Using
          </p>
          <div
            className='icons'
            style={{
              display: "flex",
              width: "50%",
              justifyContent: "space-between",
            }}
          >
            <Icons.AiOutlineMail color={theme.button} size={30} />
            <Icons.AiOutlineLinkedin color={theme.button} size={30} />
            <Icons.AiOutlineFacebook color={theme.button} size={30} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              marginBottom: "1rem",
              color: theme.button,
              fontSize: ".95rem",
            }}
          >
            Or Sign Up Using
          </p>
          <div
            className='signup'
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button className='btn'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
