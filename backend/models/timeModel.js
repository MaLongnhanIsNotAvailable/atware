import mongoose from 'mongoose';

const timeSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
             
    },
    {
        timestamps: true,
    }
);
const TimeTable = mongoose.model('TimeTable', timeSchema);
export default TimeTable;
