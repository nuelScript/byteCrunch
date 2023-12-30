import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { apiVersion } from "./sanity/env";
import { schema } from "./sanity/schema";
import schemas from "./sanity/schemas";

export default defineConfig({
  projectId: "fi8c3k01",
  title: "ByteCrunch",
  dataset: "production",
  apiVersion: "2023-11-14",
  basePath: "/admin",
  plugins: [
    deskTool(),
    visionTool({
      defaultApiVersion: apiVersion,
      defaultDataset: "development",
    }),
  ],
  schema: { types: schemas },
});
