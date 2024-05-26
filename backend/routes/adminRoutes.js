// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/userModel');
// const jwtSecret = 'your_jwt_secret';

// router.post('/login-admin', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ msg: 'Invalid email or password' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ msg: 'Invalid email or password' });
//         }

//         // Check if the user is an admin
//         if (!user.isAdmin) {
//             return res.status(403).json({ msg: 'Access denied. Admins only.' });
//         }

//         const payload = {
//             user: {
//                 id: user.id,
//                 isAdmin: user.isAdmin
//             }
//         };

//         jwt.sign(payload, jwtSecret, { expiresIn: '1h' }, (err, token) => {
//             if (err) throw err;
//             res.json({ token });
//         });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server error');
//     }
// });

// module.exports = router;
