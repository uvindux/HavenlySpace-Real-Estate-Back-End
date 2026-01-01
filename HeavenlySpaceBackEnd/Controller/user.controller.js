import prisma from "../lib/prisma.js";

export const updateUsername = async (req, res) => {
          try {
                    const userId = req.userId; // set by verifyToken
                    const { username, avatar } = req.body;
                    if (!userId || (!username && !avatar)) {
                              return res.status(400).json({ message: "User ID and new data required" });
                    }
                    const updateData = {};
                    if (username) updateData.username = username;
                    if (avatar) updateData.avatar = avatar;
                    const updatedUser = await prisma.user.update({
                              where: { id: userId },
                              data: updateData,
                    });
                    res.status(200).json({ message: "User updated", user: updatedUser });
          } catch (err) {
                    console.error(err);
                    res.status(500).json({ message: "Failed to update user" });
          }
};
