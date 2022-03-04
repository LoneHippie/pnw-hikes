import mongoose from 'mongoose';

const hikeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    startPoint: {
        type: String,
        required: true
    },
    endingPoint: {
        type: String,
        required: true
    },
    hikeType: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    highPoint: {
        type: String,
        required: true
    },
    elevationGain: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    seasons: {
        type: String,
        required: true
    },
    familyFriendly: {
        type: String,
        required: true
    },
    backpackable: {
        type: String,
        required: true
    },
    summary: {
        type: [String],
        required: true
    }
});

const Hike = mongoose.models['Hike'] ? mongoose.model('Hike') : mongoose.model('Hike', hikeSchema);

export {
    Hike
}