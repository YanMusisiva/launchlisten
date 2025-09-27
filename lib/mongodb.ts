// lib/mongodb.ts
import { MongoClient } from "mongodb";

// 1️⃣ Déclarer global pour TypeScript
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// 2️⃣ Vérifier que l'URI existe dans .env.local
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// 3️⃣ Client MongoDB
let client: MongoClient;

// 4️⃣ Connecter une seule fois (singleton)
if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

// 5️⃣ Exporter la promesse typée
const clientPromise: Promise<MongoClient> = global._mongoClientPromise;

export default clientPromise;
