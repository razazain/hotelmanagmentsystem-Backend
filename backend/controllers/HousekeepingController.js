const HousekeepingModel = require("../models/HousekeepingModel");

// @Request  GET
// @Route    /api/housekeeping
// @access   private
const getHousekeepingDetails = async (req, res) => {
    try {
        const housekeepingDetails = await HousekeepingModel.find().populate('room assignedTo');
        res.status(200).json(housekeepingDetails);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};

// @Request  POST
// @Route    /api/housekeeping
// @access   private
const createHousekeeping = async (req, res) => {
    const { room, assignedTo, task, status  } = req.body;

    if (!room || !assignedTo || !task  ) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newHousekeeping = await HousekeepingModel.create({
            room,
            assignedTo,
            task,
            status,
            
        });
        res.status(201).json({ success: "Housekeeping task created successfully", data: newHousekeeping });
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};

// @Request  PUT
// @Route    /api/housekeeping/:id
// @access   private
const updateHousekeeping = async (req, res) => {
    const { id } = req.params;
    const { room, assignedTo, task, status  } = req.body;

    if (!room || !assignedTo || !task ) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const updatedHousekeeping = await HousekeepingModel.findByIdAndUpdate(
            id,
            { room, assignedTo, task, status  },
            { new: true }
        );

        if (!updatedHousekeeping) {
            return res.status(404).json({ error: "Housekeeping task not found" });
        }

        res.status(200).json({ success: "Housekeeping task updated successfully", data: updatedHousekeeping });
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};

// @Request  DELETE
// @Route    /api/housekeeping/:id
// @access   private
const deleteHousekeeping = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedHousekeeping = await HousekeepingModel.findByIdAndDelete(id);

        if (!deletedHousekeeping) {
            return res.status(404).json({ error: "Housekeeping task not found" });
        }

        res.status(200).json({ success: "Housekeeping task deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};

module.exports = {
    getHousekeepingDetails,
    createHousekeeping,
    updateHousekeeping,
    deleteHousekeeping
};
