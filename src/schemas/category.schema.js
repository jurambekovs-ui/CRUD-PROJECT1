import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },  // descriptio → description
    image: { type: String }
}, {
    versionKey: false,
    timestamps: true   // Timestamps → timestamps (kichik harf)
});

export default model('Category', categorySchema);