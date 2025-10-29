import { exec } from "child_process";

console.log("Starting Stremio server...");
const process = exec("npx stremio-server");

process.stdout.on("data", data => console.log(data));
process.stderr.on("data", data => console.error(data));
