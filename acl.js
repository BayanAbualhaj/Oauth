module.exports = (capability) => {
    return (req, res, next) => {
      console.log('__ACL USER__', req.user, 'CAP?', req.user.capabilities);
      try {
        if (req.user.capabilities.includes(capability)) {
          next();
        } else {
          next('ACCESS DENIED');
        }
      } catch (error) {
        next('Invalid Login');
      }
    };
  };