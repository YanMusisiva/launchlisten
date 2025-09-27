import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

function isValidEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.toLowerCase());
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const client = await clientPromise;
    const db = client.db("launchmails");

    const existing = await db
      .collection("subscribers")
      .findOne({ email: normalizedEmail });

    if (existing) {
      return NextResponse.json(
        { message: "Déjà inscrit", exists: true },
        { status: 200 }
      );
    }

    await db.collection("subscribers").insertOne({
      email: normalizedEmail,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Email ajouté avec succès", exists: false },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur MongoDB:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
