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
            return res.json({success: false, message: "User with this email does not exist"})
        }
        const isMatch = await bcrypt.compare(password, user.rows[0].password);
        if (!isMatch) {
            res.json({success: false, message: "Incorrect Password"});
        }

        const token = createToken(user.rows[0].user_id);
        return res.json({success: true, token})

    } catch (error) {
        console.log(error);
        return res.json({success: false, message: error.message})
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
            console.log("hehe1");
            return res.json({success: false, message: "User already exists"});
        }

        if (!validator.isEmail(email)) {
            console.log("hehe2");
            return res.json({success: false, message: "Please enter a valid email"});
        }
        if (password.length < 4) {
            console.log("hehe");
            return res.json({success: false, message: "Please enter a strong password"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await pool.query(
            'INSERT INTO "user" (name, email, password) VALUES($1, $2, $3) RETURNING *' ,
            [name, email, hashedPassword]
        );

        const token = createToken(user.rows[0].user_id)
        return res.json({success: true, token});

    } catch (error) {
        console.log(error);
        return res.json({success: false, message: error.message});
    }
}

export { createAccount, loginAccount };
