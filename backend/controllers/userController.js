import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import pool from "../config/db.js";

const loginAccount = async(req, res) => {
    const {email, password} = req.body;
    try {
        const user = await pool.query(
            'SELECT * from "user" WHERE email = $1',
            [email]
        );
        if (user.rows.length === 0) {
            return res.status(400).json({message: "User with this email does not exist"})
        }
        const isMatch = await bcrypt.compare(password, user.rows[0].password);
        if (!isMatch) {
            res.status(400).json({message: "Incorrect Password"});
        }

        const token = createToken(user.rows[0].user_id);
        return res.status(200).json({token})

    } catch (error) {
        console.log(error);
        return res.status(400).json({message: error.message})
    }
}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

const createAccount = async(req, res) => {
    const {name, email, password} = req.body;
    try {
        const exists = await pool.query(
            'SELECT * FROM "user" WHERE email = $1',
            [email]
        );
        if (exists.rows.length > 0) {
            return res.status(400).json({message: "User already exists"});
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({message: "Please enter a valid email"});
        }
        if (password.length < 4) {
            return res.status(400).json({message: "Please enter a strong password"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await pool.query(
            'INSERT INTO "user" (name, email, password) VALUES($1, $2, $3) RETURNING *' ,
            [name, email, hashedPassword]
        );

        const token = createToken(user.rows[0].user_id)
        return res.status(200).json(token);

    } catch (error) {
        console.log(error);
        return res.status(400).json({message: error.message});
    }
}

export { createAccount, loginAccount };
