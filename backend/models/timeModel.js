import mongoose from 'mongoose';

const timeSchema = new mongoose.Schema(
    {

        title: String,
        startDate: String,
        endDate: String,
        more: String
    },
    {
        timestamps: true,
    }
);
const TimeTable = mongoose.model('TimeTable', timeSchema);
export default TimeTable;
