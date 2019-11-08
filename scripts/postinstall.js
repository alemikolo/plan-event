const fs = require("fs");
const path = require("path");
const { EOL } = require("os");

try {
  const defaultHookPath = path.resolve(
    __dirname,
    "../.git/hooks/prepare-commit-msg"
  );
  const customHookPath = path.resolve(
    __dirname,
    "./githooks/prepare-commit-msg"
  );

  const defaultHookContent = fs.readFileSync(defaultHookPath, "utf8");

  const customHookContent = fs.readFileSync(customHookPath, "utf8");
  const clearedCustomHookContent = customHookContent.replace("#!/bin/sh", "");

  const newHookContent = `${defaultHookContent}${EOL}${clearedCustomHookContent}`;

  fs.writeFileSync(defaultHookPath, newHookContent, "utf8");
} catch (error) {
  console.error("Updating git hook failed... ", error);
}
