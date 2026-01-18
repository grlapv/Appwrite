#!/usr/bin/env node

const YT_WARPOUT = process.env.YT_WARPOUT || false;   // 设置为true时强制使用warp出站访问youtube,false时自动检测是否设置warp出站
const FILE_PATH = process.env.FILE_PATH || './.npm';  // sub.txt订阅文件路径
const SUB_PATH = process.env.SUB_PATH || 'sub';       // 订阅sub路径，默认为sub,例如：https://google.com/sub
const UUID = process.env.UUID || 'c7b76961-bece-44ae-b45d-247c1837de87';  // UUID,如果开启了哪吒v1,也会使用此uuid
const NEZHA_SERVER = process.env.NEZHA_SERVER || 'tta.wahaaz.xx.kg:80';         // 哪吒面板地址,v1形式：nz.serv00.net:8008  v0形式：nz.serv00.net
const NEZHA_PORT = process.env.NEZHA_PORT || '';             // v1哪吒请留空，v0 agent端口，当端口为{443,8443,2087,2083,2053,2096}时，自动开启tls
const NEZHA_KEY = process.env.NEZHA_KEY || 'OZMtCS6G39UpEgRvzRNXjS7iDNBRmTsI';               // v1的NZ_CLIENT_SECRET或v0 agwnt密钥 
const ARGO_DOMAIN = process.env.ARGO_DOMAIN || 'flup.topcd.ggff.net';           // argo固定隧道域名,留空即使用临时隧道
const ARGO_AUTH = process.env.ARGO_AUTH || 'eyJhIjoiOWY2ODlkYjlhZDNmM2VmMTc1MTcwNThjZjI3MTQwZTIiLCJ0IjoiYTJmZmZjZjQtNTllNy00ZWUyLThkZjgtN2FhNzNlNTcxMjViIiwicyI6Ik0ySXhPR1V5WWpFdFl6RmxNeTAwWmpaaUxUazBaR1V0WkdZNU5tWXlZVE13TVRnMiJ9';               // argo固定隧道token或json,留空即使用临时隧道
const ARGO_PORT = process.env.ARGO_PORT || 8001;             // argo固定隧道端口,使用token需在cloudflare控制台设置和这里一致，否则节点不通
const TUIC_PORT = process.env.TUIC_PORT || '';               // tuic端口，支持多端口的可以填写，否则留空
const HY2_PORT = process.env.HY2_PORT || '';                 // hy2端口，支持多端口的可以填写，否则留空
const REALITY_PORT = process.env.REALITY_PORT || '';         // reality端口，支持多端口的可以填写，否则留空
const CFIP = process.env.CFIP || 'cf.090227.xyz';            // 优选域名或优选IP
const CFPORT = process.env.CFPORT || 443;                    // 优选域名或优选IP对应端口    
const NAME = process.env.NAME || 'flootup';                 // 节点名称
const CHAT_ID = process.env.CHAT_ID || '';                   // Telegram chat_id  两个变量不全不推送节点到TG 
const BOT_TOKEN = process.env.BOT_TOKEN || '';               // Telegram bot_token 两个变量不全不推送节点到TG 
