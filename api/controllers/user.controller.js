import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import { validateEmail, validatePassword } from '../utils/validation.js';
import Listing from '../models/listing.model.js';
import VisitSlot from '../models/visitSlot.model.js';

export const test = (req, res) => {
    res.json({
        message: 'API Route is working!',
    });
};

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) return next(errorHandler(401, "You can only update your own account!"));
    try {
        const currentUser = await User.findOne({_id: req.params.id});
        if (req.body.username==='') return next(errorHandler(400, 'Name cannot be empty!'));
        // if (req.body.username)
        // {
        //     const validUser = await User.findOne({username: req.body.username});
        //     if (req.body.username!==currentUser.username && validUser) return next(errorHandler(409, 'Username already Exists!'));
        // }

        if (req.body.email || req.body.email==='')
        {
            if (!validateEmail(req.body.email)) return next(errorHandler(400, 'Invalid Email Format'));

            const validEmail = await User.findOne({email: req.body.email});
            if (req.body.email!==currentUser.email && validEmail) return next(errorHandler(409, 'Email already Exists!'));
        }

        if (req.body.currentPassword && req.body.newPassword)
        {
            const validPassword = bcryptjs.compareSync(req.body.currentPassword, currentUser.password);
            if (!validPassword) return next(errorHandler(401, 'Invalid Credentials!'));
            
            const passwordError = validatePassword(req.body.newPassword);
            if (passwordError) return next(errorHandler(400, passwordError));

            if (req.body.newPassword) {
                req.body.newPassword = bcryptjs.hashSync(req.body.newPassword, 10);
            }
        }
        else
        {
            delete req.body.currentPassword;
            delete req.body.newPassword;
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set:{
                username: req.body.username,
                email: req.body.email,
                password: req.body.newPassword,
                avatar: req.body.avatar,
                mobile: req.body.mobile,
            }
        }, {new: true});

        const {password, ...rest} = updatedUser._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) return next(errorHandler(401, 'You can only delete your own account!'));
    try {
        await User.findByIdAndDelete(req.params.id);
        res.clearCookie('access_token');
        res.status(200).json('User has been deleted!');
    } catch (error) {
        next(error);
    }
};

export const getUserListings = async (req, res, next) => {
    if (req.user.id === req.params.id)
    {
        try {
            const listings = await Listing.find({userRef: req.params.id});
            res.status(200).json(listings);
        } catch (error) {
            next(error);
        }
    }
    else
    {
        return next(errorHandler(401, 'You can only view your own listings!'));
    }
};

export const getUser = async (req, res, next) => {
    try {
        const currentUser = await User.findById(req.params.id);
        if (!currentUser)
        {
            return next (errorHandler(404, 'User Not Found!'));
        }
        res.status(200).json(currentUser);
    } catch (error) {
        next (error);
    }
};

export const getUserVisitsSlots = async (req, res, next) => {
    if (req.user.id === req.params.id)
    {
        try {
            const visitSlots = await VisitSlot.find({buyerId: req.params.id});
            res.status(200).json(visitSlots);
        } catch (error) {
            next(error);
        }
    }
    else
    {
        return next(errorHandler(401, 'You can only view your own visit slots!'));
    }
};

export const getUserPendingVisitors = async (req, res, next) => {
    if (req.user.id === req.params.id)
    {
        try {
            const pendingVisitors = await VisitSlot.find({sellerId: req.params.id});
            res.status(200).json(pendingVisitors);
        } catch (error) {
            next(error);
        }
    }
    else
    {
        return next(errorHandler(401, 'You can only view your own pending visitors!'));
    }
};

export const updateVisitSlot = async (req, res, next) => {
    const visitSlot = await VisitSlot.findById(req.params.id);

    if (!visitSlot)
    {
        return next (errorHandler(404, 'Visit Slot Not Found!'));
    }

    if (req.user.id !== visitSlot.buyerId && req.user.id !== visitSlot.sellerId)
    {
        return next(errorHandler(401, 'You can only update your own visit slots!'));
    }

    try {
        await VisitSlot.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.status(200).json(visitSlot);
    } catch (error) {
        next(error);
    }
};