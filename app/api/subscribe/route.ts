import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email requis" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("launchmails");

    // Empêche les doublons
    const existing = await db.collection("subscribers").findOne({ email });
    if (existing) {
      return NextResponse.json({ message: "Déjà inscrit" }, { status: 200 });
    }

    await db.collection("subscribers").insertOne({
      email,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Email ajouté avec succès" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur MongoDB:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
