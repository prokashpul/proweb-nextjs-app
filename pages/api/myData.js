import path from "path";
import { promises as fs } from "fs";

export default async function posts(req, res) {
  const { id } = req.query;
  console.log(id);
  const directory = path.join(process.cwd(), "public");
  const singleData = await fs.readFile(directory + "/posts.json", "utf8");
  const data = JSON.parse(singleData);
  if (data) {
    res.status(200).json(data);
  }
  res.status(404).json({ error: "Data Not found" });
}
