import app from "./src/app";
import { connectDB } from "./src/config/database";

const PORT = process.env.PORT || 3000;

// ANSI colors
const green = "\x1b[32m";
const red = "\x1b[31m";
const cyan = "\x1b[36m";
const yellow = "\x1b[33m";
const reset = "\x1b[0m";
const bold = "\x1b[1m";

connectDB()
  .then(() => {
    console.log(`\n${cyan}${bold}>> INITIATING SECURE HANDSHAKE...${reset}`);
    console.log(`${green}✔ DATABASE LINK ESTABLISHED${reset}`);
    console.log(`${yellow}⚠ AUTHORITY GRANTED${reset}`);

    app.listen(PORT, () => {
      console.log(`\n${green}${bold}██╗    ██╗██╗  ██╗██╗███████╗████████╗██╗     ███████╗${reset}`);
      console.log(`${green}${bold}██║    ██║██║  ██║██║██╔════╝╚══██╔══╝██║     ██╔════╝${reset}`);
      console.log(`${green}${bold}██║ █╗ ██║███████║██║███████╗   ██║   ██║     █████╗  ${reset}`);
      console.log(`${green}${bold}██║███╗██║██╔══██║██║╚════██║   ██║   ██║     ██╔══╝  ${reset}`);
      console.log(`${green}${bold}╚███╔███╔╝██║  ██║██║███████║   ██║   ███████╗███████╗${reset}`);
      console.log(`${green}${bold} ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝   ╚══════╝╚══════╝${reset}`);

      console.log(`${cyan}\n>> WHISTLE CHAT PLATFORM ONLINE${reset}`);
      console.log(`${green}>> LISTENING ON PORT :: ${PORT}${reset}`);
      console.log(`${cyan}>> REAL-TIME CONNECTIONS READY...\n${reset}`);
    });
  })
  .catch((error) => {
    console.error(`\n${red}${bold}!!! SYSTEM FAILURE !!!${reset}`);
    console.error(`${red}>> WHISTLE CORE CRASHED${reset}`);
    console.error(`${red}>> EMERGENCY SHUTDOWN INITIATED${reset}`);
    console.error(`${red}${error}${reset}\n`);
    process.exit(1);
  });
