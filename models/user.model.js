    const moongoose = require('mongoose');
    const Schema = moongoose.Schema;

    const UserSchema = new Schema({
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    });

    const User = moongoose.model('user', UserSchema);

    module.exports = User;