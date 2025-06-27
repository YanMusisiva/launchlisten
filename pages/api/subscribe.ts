import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/db";
import Email from "../../models/Email";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { email } = req.body;

      // Vérifie si l'email existe déjà
      const exists = await Email.findOne({ email });
      if (exists) {
        return res.status(409).json({ message: "Cet email est déjà abonné." });
      }

      const newEmail = new Email({ email });
      try {
        await newEmail.save();
      } catch (err: unknown) {
        // Gestion du cas où deux requêtes arrivent en même temps
        if (typeof err === "object" && err !== null && "code" in err ) {
          return res
            .status(409)
            .json({ message: "Reessayez." });
        }
        throw err;
      }

      return res.status(201).json({ message: "Subscription successful" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erreur serveur", error });
    }
  }

  // GET: retourne la liste des emails abonnés
  const emails = await Email.find();
  res.status(200).json(emails);
};

export default handler;
