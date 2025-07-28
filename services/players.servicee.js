import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import playerDB from '../DB/playerDB.js';

export async function signup(username, password) {
    const hash_password = await bcrypt.hash(password, 12);
    const user = await addPlayer({ username, hash_password, role: "user" });
    return user;
}

export async function signin(username, password) {
    const user = await getPlayerByUsername(username);
    if (!user) return { message: "user not found" };
    const passwordMatch = await bcrypt.compare(password, user.hash_password);
    if (!passwordMatch) return { message: "Wrong password" };
    const token = jwt.sign({ username, role: user.role }, process.env.SECRET, { expiresIn: '5m' });
    return { message: "you have successfully logged in", token };
}

export async function getPlayerByUsername(username) {
    const { data, error } = await playerDB
        .select()
        .eq('username', username);
    return error || data[0];
}

export async function getAllPlarers() {
    const { data, error } = await playerDB
        .select();
    return error || data;
}

export async function addPlayer(newPlayer) {
    const { error } = await playerDB
        .insert(newPlayer)
    if (error) {
        if (error.code == '23505')
            return "Username already exists. Please choose a different one"
    }
    return error || "new user created successfully";
}

export async function updatePlayer(username, best_time) {
    const { data, error } = await playerDB
        .update({ "best_time": best_time })
        .eq('username', username)
        .select();
    return error || "The player has been successfully updated";
}

export async function getLeaderboard() {
    const { data, error } = await playerDB
        .select()
        .order('best_time');
    return error || data;
}
