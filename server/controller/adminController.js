import jwt from 'jsonwebtoken';

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if the credentials match the admin credentials
    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Set a session or token for admin access
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.status(200).json({ success: true, message: 'Login successful', token });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
}

export default adminLogin;