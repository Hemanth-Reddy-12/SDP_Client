const RegVal = (values) => {
  let errors = {};
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!values.email) {
    errors.email = "please provide a email address";
  } else if (!filter.test(values.email)) {
    errors.email = "please provide a valid email address";
  }

  if (!values.password) {
    errors.password = "please provide a password";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  return errors;
};

export default RegVal;
