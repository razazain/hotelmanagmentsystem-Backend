const RoomModel = require("../models/RoomModel");


// @Request  GET
// @Route    /api/Room/
// @access   private
const getRoomDetails = async (req, res) => {
    const roomDetail = await RoomModel.find();
    res.status(200).json(roomDetail)
}


// ----------------CREATE ROOM API START-------------------------
// @Request  POST
// @Route    /api/Room/
// @access   private

const createRoom = async (req, res) => {

    const {
        roomNumber,
        type,
        price,
        status,
        bedType,
        size,
       
    } = req.body;


    if (!roomNumber) {
        return res.status(400).json({ error: 'Room number is required' });
    }

    if (!type) {
        return res.status(400).json({ error: 'Room Type is required' });
    }

    if (!price) {
        return res.status(400).json({ error: 'Room Price is required' });
    }
    if (!status) {
        return res.status(400).json({ error: 'Room status is required' });
    }

    if (!bedType) {
        return res.status(400).json({ error: 'Room bedtype is required' });
    }

    if (!size) {
        return res.status(400).json({ error: 'Room size is required' });
    }

    const checkRoomNumber = await RoomModel.findOne({
        "roomNumber": roomNumber
    });
    if (checkRoomNumber) {
        return res.status(400).json({ error: "Room Number is already created try another one" })
    }
    
    try {
        const newRoom = await RoomModel.create({
            roomNumber: roomNumber,
            type: type,
            price: price,
            status: status,
            bedType: bedType,
            size: size,
            
        })

        return res.status(200).json({ success: "Room Created Successfully" });
    } catch (err) {
        console.log(` Some Error in Room Creation ${err}`)
    }

}


// ----------------CREATE ROOM API END-------------------------

// ----------------UPDATE ROOM API sTART-------------------------
// @Request  PUT
// @Route    /api/Room/id
// @access   private

const updateRoom = async (req,res) =>{

    const id = req.params.id;
    const {
        roomNumber,
        type,
        price,
        status,
        bedType,
        size, 
    } = req.body;

    if (!roomNumber) {
        return res.status(400).json({ error: 'Room number is required' });
    }

    if (!type) {
        return res.status(400).json({ error: 'Room Type is required' });
    }

    if (!price) {
        return res.status(400).json({ error: 'Room Price is required' });
    }
    if (!status) {
        return res.status(400).json({ error: 'Room status is required' });
    }

    if (!bedType) {
        return res.status(400).json({ error: 'Room bedtype is required' });
    }

    if (!size) {
        return res.status(400).json({ error: 'Room size is required' });
    }




    const updateData = {
        roomNumber: roomNumber,
        type: type,
        price: price,
        status: status,
        bedType: bedType,
        size: size,
    }


    const Room = await RoomModel.findByIdAndUpdate(id, updateData, { new: true });

    console.log(Room);

    res.status(200).json({ success: 'Room Updated Successfull' });
}

// ----------------UPDATE ROOM API END-------------------------


// ----------------DELETE ROOM API START-------------------------
// @Request  DELETE
// @Route    /api/Room/id
// @access   private


const deleteRoom = async(req,res)=>{

    const id = req.params.id;

    const delroom = await RoomModel.findByIdAndDelete(id) 

    if(!delroom){
        res.status(400).json({error:"account not deleted"});
    }
    res.status(200).json({success:'account deleted successfully'})
}

// ----------------DELETE ROOM API END-------------------------











module.exports = {
    getRoomDetails,
    createRoom,
    updateRoom,
    deleteRoom
};