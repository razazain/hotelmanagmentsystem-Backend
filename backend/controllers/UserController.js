const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");





// @Request  GET
// @Route    /api/useraccount/
// @access   private
const getUserAccount = async (req, res) => {
    const userDetail = await UserModel.find();
    res.status(200).json(userDetail)
}



// @Request  GET by ID
// @Route    /api/useraccount/:id
// @access   private
const getUserAccountById = async (req, res) => {
    const { id } = req.params;

    try {
        const userDetail = await UserModel.findById(id);
        if (!userDetail) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(userDetail);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};


//Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Only letters and spaces
const nameRegex = /^[A-Za-z\s]+$/;
// Minimum 8 characters, at least one uppercase, one lowercase, one number, and one special character
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;






//---------------------------User Registration API START ------------------

// @Request  POST
// @Route    /api/useraccount/
// @access   private


const createUserAccount = async (req, res) => {
  try {
    const {
      userName,
      userPassword,
      firstName,
      lastName,
      userEmail,
      phoneNumber,
      status,
      userRole
    } = req.body;

    // ✅ Validate email
    if (!emailRegex.test(userEmail)) {
      return res.status(400).json({
        error: "Invalid email format. Example: user@example.com"
      });
    }

    // ✅ Validate username
    if (!nameRegex.test(userName)) {
      return res.status(400).json({
        error: "Invalid username. Only letters and spaces are allowed."
      });
    }

    // ✅ Validate password
    if (!passwordRegex.test(userPassword)) {
      return res.status(400).json({
        error:
          "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character."
      });
    }

    // ✅ Check if email already exists
    const existingUser = await UserModel.findOne({ userEmail });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already taken." });
    }

    // ✅ Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, salt);

    // ✅ Create new user
    await UserModel.create({
      userName,
      userEmail,
      userPassword: hashedPassword,
      firstName,
      lastName,
      phoneNumber,
      userRole, // default is guest in your model
      status
    });

    return res.status(201).json({
      success: "Account registered successfully."
    });
  } catch (error) {
    console.error("Error creating user account:", error);
    return res.status(500).json({
      error: "An internal server error occurred. Please try again later."
    });
  }
};


//---------------------------User Registration API End ------------------

//---------------------------User Registration Update API Start ------------------
// @Request  PUT
// @Route    /api/useraccount/id
// @access   private


const updateUserAccount = async (req, res) => {

    const id = req.params.id;

    const {
        userName,
        userPassword,
        userRole,
        firstName,
        lastName,
        userEmail,
        phoneNumber,
        status,
    } = req.body;

    if (!userName) {
        return res.status(400).json({ error: 'user name is required' });
    }

    if (!userEmail) {
        return res.status(400).json({ error: 'user email is required' });
    }

    if (!userPassword) {
        return res.status(400).json({ error: 'user password is required' });
    }

    // Update Data Object
    const updateData = {
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
        userRole: userRole,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
    
        status: status
    }

    // Find todo By Id and Update
    const AvailableUser = await UserModel.findByIdAndUpdate(id, updateData, { new: true });

    console.log(AvailableUser)

    res.status(200).json({ success: 'Account Updated Successfull' })


}

//---------------------------User Registration Update API End ------------------


//---------------------------User Registration Delete API Start ------------------
// @Request  DELETE
// @Route    /api/useraccount/id
// @access   private



const deleteUserAccount = async(req,res)=>{

    const id = req.params.id;

    const DeleteUser = await UserModel.findByIdAndDelete(id) 

    if(!DeleteUser){
        res.status(400).json({error:`account not deleted`})

    }

    res.status(200).json({success:'account deleted successfully'})
}


//---------------------------User Registration Delete API End ------------------











module.exports = {
    getUserAccount,
    getUserAccountById,
    createUserAccount,
    updateUserAccount,
    deleteUserAccount
};

















