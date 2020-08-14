    const moongoose = require('mongoose');
    const Schema = moongoose.Schema;
    const bcrypt = require('bcrypt');

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

    UserSchema.pre('save', async function (next) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(this.password, salt);
            this.password = hashPassword;
            next();
        } catch (error) {
            next(error);
        }
    });

    UserSchema.methods.isValidPassword = async function(password) {
        try {
            return await bcrypt.compare(password, this.password);
        } catch (error) {
            throw error;
        }
    }

    const User = moongoose.model('user', UserSchema);

    module.exports = User;