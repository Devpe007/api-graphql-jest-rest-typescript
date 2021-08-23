import mongoose, { Schema } from 'mongoose';

import { IUserDocument } from '../IUserDocument';

const UserSchema = new Schema<IUserDocument>(
    {
        name: String,
        email: String,
        password: String,
        createdAt: {
            type: Date,
            default: Date.now,
            required: false,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
            required: false,
        },
    },
    {
        timestamps: {},
    },
);

const model = mongoose.model<IUserDocument>('User', UserSchema);

export default model;