import data from "../data/data.js";
// dummy data
let users = data;


// controller for getting all users
export const getAllUsers = (req, res) => {
    res.status(200).json(users);
}

// controller for creating a user
export const createUser = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({ message: 'Bad request' });
    }
    const newUser = {
        id: data.length + 1,
        username,
        password,
    }
    users.push(newUser)
    res.status(200).json(newUser);
}

// controller for getting single user
export const getSingleUser = (req, res) => {
    const { id } = req.params;
    // finding requested user
    const user = data.find((d) => d.id == id);
    if (user == []) {
        res.status(400).json({ message: 'User not found' });
    }
    res.status(200).json(user);
}


// controller for updating a user (only password can be changed)
export const updateUser = (req, res) => {
    const { id } = req.params;
    const validId = users.filter((d) => d.id == id);
    if (JSON.stringify(validId) === '[]') {
        res.status(400).json({ message: 'User not found' });
        return;
    }
    const { password } = req.body;
    if (!password) {
        res.status(400).json({ message: 'Bad request' });
        return;
    }
    let updateduserIndex;
    // updating data
    users.forEach((item, index) => {
        if (item.id == id) {
            updateduserIndex = index;
            users[index] = { ...item, password }
        }
    })
    return res.status(202).json(users[updateduserIndex]);
}

// controller for deleting a user
export const deleteUser = (req, res) => {
    const { id } = req.params;
    const validId = users.filter((d) => d.id == id);
    if (JSON.stringify(validId) === '[]') {
        res.status(400).json({ message: 'User not found' });
        return;
    }
    users = users.filter(item => item.id != id);
    res.status(200).json({ message: 'user deleted' })
}