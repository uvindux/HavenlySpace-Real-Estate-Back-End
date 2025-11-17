import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: "mongodb+srv://Manohara:Uvi%402018@cluster0.99hzwty.mongodb.net/Estate?retryWrites=true&w=majority"
  },
});
