const authenticateRequest = (req, res) => {
  console.log('here in post 1', req.query);
  console.log('here in post 2', req.params.id);

  res.send(req.body);
};

export default authenticateRequest;
