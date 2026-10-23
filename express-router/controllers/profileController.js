
export const signup = (req, res) => {
  const { username, password } = req.body;
  return res.status(201).json({ message: `User ${username} created` });
};


export const login = (req, res) => {
  return res.status(200).send("Logged in Successfully");
};

export const getUser = (req, res) => {
  return res.json({ message: `Fetched user with ID: ${req.params.id}` });
};