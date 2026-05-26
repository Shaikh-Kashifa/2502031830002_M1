function Conditional() {
  const isLoggedIn = true;

  // short cut
  return (
    <div>
      {isLoggedIn ? <h1> Welcome Kashifa!</h1> : <h2> Pleasee Login!</h2>}
    </div>
  );
  //another way
  // let message;

  // if (isLoggedIn)
  // {
  //     message =  <h1>Welcome Kashifa!</h1> //true
  // }
  // else{
  //     message = <h2> Please login</h2>//false
  // }

  // return <div>{message}</div>
}

export default Conditional;
