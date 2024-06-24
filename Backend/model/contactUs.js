import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        message: {
            type: String,
            required: true
        }
    }
);

const ContactUs = mongoose.model('ContactUs', ContactSchema);

export default ContactUs;
