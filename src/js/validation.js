//regular expression g is global, m is multiline, and i is caseinsensitive
// /d is numbers and /D is non-numbers and () seperate what you look for
// + means 1 or more
// (?=.*\d) means it needs to have a digit
// {6,} means minimum of 6 characters
// (?=.*[a-z])(?=.*[A-Z]) must have 1 or more letters capital and lowercase
const isValidPassword = (password) => {
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(password);
  };
  
  //return true or false
  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  export default {isValidEmail, isValidPassword};