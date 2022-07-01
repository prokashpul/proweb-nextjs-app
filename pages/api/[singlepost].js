import path from "path";
import { promises as fs } from "fs";

export default async function postDetails(req, res) {
  const { singlepost } = req.query;
  console.log(singlepost);
  const directory = path.join(process.cwd(), "public");
  const singleData = await fs.readFile(directory + "/posts.json", "utf8");
  const data = JSON.parse(singleData);
  if (singlepost) {
    const post = data.find((i) => parseInt(singlepost) === i._id);
    res.status(200).json([post]);
  }
  res.status(404).json({ error: singlepost });
}
