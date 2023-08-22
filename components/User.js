import { useEffect } from "react";

const User = ({ data }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Effect");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("useeffect return");
    };
  }, []);
  console.log("render");
  return (
    <>
      <h1>Hi {data}</h1>
    </>
  );
};
export default User;

// why didn't use async in useeffect
// But an async function returns a Promise, which can't be called as a function! It's simply not what the useEffect hook expects for its first argument
