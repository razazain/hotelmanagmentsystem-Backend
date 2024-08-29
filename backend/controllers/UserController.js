const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");





// @Request  GET
// @Route    /api/useraccount/
// @access   private
const getUserAccount = async (req, res) => {
    const userDetail = await UserModel.find();


    res.status(200).json(userDetail)
}




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

    const {

        userName,
        userPassword,
        firstName,
        lastName,
        userEmail,
        phoneNumber,
        address,
        status,
    } = req.body;


    //testing credentials is according to requirment
    const emailCheck = emailRegex.test(userEmail);
    const nameCheck = nameRegex.test(userName);
    const passwordCheck = passwordRegex.test(userPassword);




    if (emailCheck == true) {
        if (passwordCheck == true) {
            if (nameCheck == true) {

                //password hashing
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(userPassword, salt);


                //checking email is already rgistered
                var Email_availability_db = await userModel.findOne({
                    "userEmail": userEmail
                });

                if (Email_availability_db) {
                    return res.status(400).json({ error: "Email is already taken" })
                }

                const newUser = await userModel.create({
                    userName: userName,
                    userEmail: userEmail,
                    userPassword: hashedPassword,
                    firstName: firstName,
                    lastName: lastName,
                    phoneNumber: phoneNumber,
                    address: address,
                    status: status,
                    //by default Role is guest after register admin can change the user Role 
                    userRole: "guest"
                })


                return res.status(200).json({ success: "account register successfully" })

            } else {
                res.status(400).json({ error: "name error" })
            }
        } else {
            res.status(400).json({ error: "password error" })
        }
    } else {
        res.status(400).json({ error: "email error" })
    }
}


//---------------------------User Registration API End ------------------



module.exports = {
    getUserAccount,
    createUserAccount
};

















