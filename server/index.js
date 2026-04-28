import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { createServer as createViteServer } from "vite";
import { getCars } from "./services/carService.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const root = path.resolve(__dirname, "..");
const isProduction = process.argv.includes("--prod");

const readTemplate = (templatePath) => fs.readFileSync(templatePath, "utf-8");

const startServer = async () => {
  let vite;

  app.use(express.static(path.resolve(root, "public"), { index: false }));

  if (!isProduction) {
    vite = await createViteServer({
      root,
      server: { middlewareMode: true },
      appType: "custom",
    });

    app.use(vite.middlewares);
  } else {
    app.use(
      "/assets",
      express.static(path.resolve(root, "dist/client/assets"), {
        index: false,
      }),
    );
  }

  app.get("/api/cars", (req, res) => {
    res.json(getCars());
  });

  app.get("*", async (req, res) => {
    try {
      const url = req.originalUrl;
      const templatePath = isProduction
        ? path.resolve(root, "dist/client/index.html")
        : path.resolve(root, "index.html");

      let template = readTemplate(templatePath);
      let render;

      if (!isProduction) {
        template = await vite.transformIndexHtml(url, template);
        ({ render } = await vite.ssrLoadModule("/server/entry-server.jsx"));
      } else {
        const serverEntryUrl = pathToFileURL(
          path.resolve(root, "dist/server/entry-server.js"),
        ).href;
        ({ render } = await import(serverEntryUrl));
      }

      const { html: appHtml } = await render(url);
      const html = template.replace("<!--ssr-outlet-->", appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      if (vite) {
        vite.ssrFixStacktrace(e);
      }
      res.status(500).end(e.message);
    }
  });

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};

startServer();
