const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349066658797";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_27_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAzMixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDg2LFxuICAgICAgICA0NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTczLFxuICAgICAgICA5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDgyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY1LFxuICAgICAgICA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDYxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFcUlKczBybG40SDJ3UGU4dUEvSHY3aXMvWmkyZU9YQWljb0lwYzlqTXNJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNjY2NTg3OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRDNjJEMTVDRDA5QzY0NjNCNzQ3RjFCNUJBQjFERkIzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTM5MjQyOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNjY2NTg3OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJFNEY3MjI5QjdDRjUxQ0IzRjI0QkRGODYzQzUwNjExXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTM5MjQzMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWb0NsWkVYQlR6T094RERXTmE0WXVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgzMjIyOGFmLTI0MTUtNGZjMS05OWRlLTM1ODE1OGRiMzhlZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MCxcbiAgICAgIDQzLFxuICAgICAgOTcsXG4gICAgICAyMjUsXG4gICAgICA1OSxcbiAgICAgIDksXG4gICAgICAyMTAsXG4gICAgICAxOTksXG4gICAgICAxNDksXG4gICAgICAyNTQsXG4gICAgICAxNzQsXG4gICAgICAxMDAsXG4gICAgICA3OSxcbiAgICAgIDIwNSxcbiAgICAgIDE2MixcbiAgICAgIDIyLFxuICAgICAgNjMsXG4gICAgICAyMzksXG4gICAgICA0MCxcbiAgICAgIDIzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDIsXG4gICAgICAyMzQsXG4gICAgICA5MSxcbiAgICAgIDIxOCxcbiAgICAgIDEzMixcbiAgICAgIDEyNCxcbiAgICAgIDEyNCxcbiAgICAgIDI0NyxcbiAgICAgIDQ5LFxuICAgICAgMjQxLFxuICAgICAgMTMzLFxuICAgICAgMTE4LFxuICAgICAgMTMwLFxuICAgICAgMzksXG4gICAgICAyMjksXG4gICAgICAxODYsXG4gICAgICAyMDMsXG4gICAgICA5MixcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWSFc2SFg5WVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2NjY1ODc5Nzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzc0Mjk5MTQxMDc5MzI6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLbUp5NElGRUtiNXY3c0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkR3ZmpUbTZWbktyTHc3MDJTZGllU1pHM1B4Qm9INXFhWnRCM0JVcndQakk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ0NKWlQ0WVo1VVFMQTRuZy9BcEg3NG1TWXhzaUJVT1poNmxnb3RCRkpNa2hWRWVKaW4yV1Z6ZHpSd3pqY3hmYmo1aTFNM0VsYktxQ052UXZHV0lQQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT1lGOXFieXpjbkExRG9mSjBwdnA3bExua1pyVHMwOG9zQ3hlRHgwV2xDTHNiaUt6eGJwcXNoaGJiMXdXSWlJcitHUWFER3IvaTdQNmt4UTUwaEFRZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2NjY1ODc5Nzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MzkyNDI1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVNPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJU08uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVUEVWOWxxaTZNZ2kzcnBIMldacDM5OWNubXlSTnZqbzNYaGJxYnVaZXl3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNDc2MDE1NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTM5MjQzMTIyNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
