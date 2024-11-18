import { Client, Databases,Query  } from "appwrite";

const client = new Client();

// Initialize the Appwrite client
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("673b8f07002dfa118b38");

// Create a new instance of the Databases service
const databases = new Databases(client);

export { client, databases,Query };
