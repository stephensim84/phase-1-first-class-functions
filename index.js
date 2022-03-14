const receivesAFunction = (callback) => {
    const happy = "yes i am";
  callback (happy)
  };
  
  const returnsANamedFunction = ()  => {
     const hello = ()  => { "my name is" }
     return hello;
    }
   const returnsAnAnonymousFunction = () => {
    return () => {return "hi"}
}