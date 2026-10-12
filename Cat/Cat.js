// 本规则基于xiaolin007(https://raw.githubusercontent.com/xiaolin-007/clash-verge-script/refs/heads/main/%E6%89%A9%E5%B1%95%E8%84%9A%E6%9C%AC-%E4%BC%98%E5%8C%96%E7%89%88.js)基础上增加自定义的分组和规则

// 国内DNS服务器
const domesticNameservers = [
  "https://223.5.5.5/dns-query", // 阿里DoH
  "https://doh.pub/dns-query" // 腾讯DoH
];
// 国外DNS服务器
const foreignNameservers = [
  "https://208.67.222.222/dns-query", // OpenDNS
  "https://77.88.8.8/dns-query", //YandexDNS
  "https://1.1.1.1/dns-query", // CloudflareDNS
  "https://8.8.4.4/dns-query", // GoogleDNS  

];
// DNS配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": false,
  "prefer-h3": false,
  "respect-rules": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    // 本地主机/设备
    "+.lan",
    "+.local",
    // // Windows网络出现小地球图标
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    // QQ快速登录检测失败
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
      // 追加以下条目
    "+.in-addr.arpa", 
    "+.ip6.arpa",
    "time.*.com",
    "time.*.gov",
    "pool.ntp.org",
    // 微信快速登录检测失败
    "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": ["223.5.5.5","1.2.4.8"],//可修改成自己ISP的DNS
  "nameserver": [...foreignNameservers],
  "proxy-server-nameserver":[...domesticNameservers],
  "direct-nameserver":[...domesticNameservers],
  "nameserver-policy": {
  "geosite:private,cn": domesticNameservers
  }
};
// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};
// 规则集配置
const ruleProviders = {
  "reject": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/loyalsoldier/reject.yaml"
  },
  "icloud": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    "path": "./ruleset/loyalsoldier/icloud.yaml"
  },
  "apple": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    "path": "./ruleset/loyalsoldier/apple.yaml"
  },
  "google": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    "path": "./ruleset/loyalsoldier/google.yaml"
  },
  "proxy": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    "path": "./ruleset/loyalsoldier/proxy.yaml"
  },
  "direct": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/loyalsoldier/direct.yaml"
  },
  "private": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/loyalsoldier/private.yaml"
  },
  "gfw": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    "path": "./ruleset/loyalsoldier/gfw.yaml"
  },
  "tld-not-cn": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
    "path": "./ruleset/loyalsoldier/tld-not-cn.yaml"
  },
  "telegramcidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    "path": "./ruleset/loyalsoldier/telegramcidr.yaml"
  },
  "cncidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/loyalsoldier/cncidr.yaml"
  },
  "lancidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/loyalsoldier/lancidr.yaml"
  },
  "applications": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/loyalsoldier/applications.yaml"
  },
  "bahamut": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Bahamut.txt",
    "path": "./ruleset/xiaolin-007/bahamut.yaml"
  },
  "YouTube": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/YouTube.txt",
    "path": "./ruleset/xiaolin-007/YouTube.yaml"
  },
  "Money": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/Alonso0729/Davis/refs/heads/main/Cat/Money.txt"
  },
  "Netflix": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Netflix.txt",
    "path": "./ruleset/xiaolin-007/Netflix.yaml"
  },
  "Spotify": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Spotify.txt",
    "path": "./ruleset/xiaolin-007/Spotify.yaml"
  },
  "BilibiliHMT": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/BilibiliHMT.txt",
    "path": "./ruleset/xiaolin-007/BilibiliHMT.yaml"    
  },
  "AI": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/AI.txt",
    "path": "./ruleset/xiaolin-007/AI.yaml"    
  },
  "TikTok": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/TikTok.txt",
    "path": "./ruleset/xiaolin-007/TikTok.yaml"    
  },
  "Microsoft": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Microsoft.txt",
    "path": "./ruleset/xiaolin-007/Microsoft.yaml"    
  },
};
// 规则
const rules = [
   // Davis的全局直连规则
  "DOMAIN-SUFFIX,weixin.qq.com,全局直连",
  "DOMAIN-SUFFIX,qq.com,全局直连",
  "DOMAIN-SUFFIX,microsoft.com,全局直连",
  "DOMAIN-SUFFIX,52bus.com,全局直连",
  "DOMAIN-SUFFIX,centbrowser.net,全局直连",
  "DOMAIN-SUFFIX,123pan.com,全局直连",
  "DOMAIN-SUFFIX,52pojie.cn,全局直连",
  "DOMAIN-SUFFIX,vfarid.github.io,全局直连",
  "DOMAIN-SUFFIX,nty.tv189.com,全局直连",
  "DOMAIN-SUFFIX,fxmuyuan.huclife.com,全局直连",
  "DOMAIN-SUFFIX,mefcl.com,全局直连",
  "DOMAIN-SUFFIX,lanzouj.com,全局直连",
  "DOMAIN-SUFFIX,steamcontent.com,全局直连",
  "DOMAIN-SUFFIX,tvzb.com,全局直连",
  "DOMAIN-SUFFIX,foodieguide.com,全局直连",
  "DOMAIN-SUFFIX,jrskan8.com,全局直连",
  "DOMAIN-SUFFIX,votebar.com,全局直连",
  "DOMAIN-SUFFIX,1diaocha.com,全局直连",
  "DOMAIN-SUFFIX,api.bigdatacloud.net,全局直连",
  "DOMAIN-SUFFIX,wynd.network,全局直连",
  "DOMAIN-SUFFIX,cdn.jdshipin.com,全局直连",
  "DOMAIN-SUFFIX,51zmt.top,全局直连",
  "DOMAIN-SUFFIX,tonkiang.us,全局直连",
  "DOMAIN-SUFFIX,api.datadoghq.com,全局直连",
  "DOMAIN-SUFFIX,iptv.cc,全局直连",
  "DOMAIN-SUFFIX,bbs.livecodes.vip,全局直连",
  "DOMAIN-SUFFIX,kaniptv.com,全局直连",
  "DOMAIN-SUFFIX,5kds.com,全局直连",
  "DOMAIN-SUFFIX,ditiepi.com,全局直连",
  "DOMAIN-SUFFIX,pangolin-sdk-toutiao.com,全局直连",
  "DOMAIN-SUFFIX,volces.com,全局直连",
  "DOMAIN-SUFFIX,bytescm.com,全局直连",
  "DOMAIN-SUFFIX,pglstatp-toutiao.com,全局直连",
  "DOMAIN-SUFFIX,ctobsnssdk.com,全局直连",
  "DOMAIN-SUFFIX,romielf.com,全局直连",
  "DOMAIN-KEYWORD,wechat,全局直连",
  "DOMAIN-KEYWORD,weixin,全局直连",
  "DOMAIN-KEYWORD,microsoft,全局直连",
  "DOMAIN-KEYWORD,52bus,全局直连",
  "DOMAIN-KEYWORD,centbrowser,全局直连",
  "DOMAIN-KEYWORD,123pan,全局直连",
  "DOMAIN-KEYWORD,52pojie,全局直连",
  "DOMAIN-KEYWORD,vfarid.github,全局直连",
  "DOMAIN-KEYWORD,nty.tv189,全局直连",
  "DOMAIN-KEYWORD,fxmuyuan,全局直连",
  "DOMAIN-KEYWORD,mefcl,全局直连",
  "DOMAIN-KEYWORD,lanzouj,全局直连",
  "DOMAIN-KEYWORD,steamcontent,全局直连",
  "DOMAIN-KEYWORD,tvzb,全局直连",
  "DOMAIN-KEYWORD,foodieguide,全局直连",
  "DOMAIN-KEYWORD,jrskan8,全局直连",
  "DOMAIN-KEYWORD,votebar,全局直连",
  "DOMAIN-KEYWORD,1diaocha,全局直连",
  "DOMAIN-KEYWORD,api.bigdatacloud,全局直连",
  "DOMAIN-KEYWORD,wyndwork,全局直连",
  "DOMAIN-KEYWORD,cdn.jdshipin,全局直连",
  "DOMAIN-KEYWORD,51zmt,全局直连",
  "DOMAIN-KEYWORD,tonkiang,全局直连",
  "DOMAIN-KEYWORD,datadoghq,全局直连",
  "DOMAIN-KEYWORD,iptv,全局直连",
  "DOMAIN-KEYWORD,livecodes,全局直连",
  "DOMAIN-KEYWORD,kaniptv,全局直连",
  "DOMAIN-KEYWORD,5kds,全局直连",
  "DOMAIN-KEYWORD,speedtest,全局直连",
  "DOMAIN-KEYWORD,easonzhang,全局直连",
  "DOMAIN-KEYWORD,eason0731,全局直连",
  "DOMAIN-KEYWORD,grass,全局直连",
  "DOMAIN-KEYWORD,olmojzjxjs,全局直连",
  "DOMAIN-KEYWORD,suitechsui,全局直连",
  "DOMAIN-KEYWORD,cjjd19,全局直连",
  "DOMAIN-KEYWORD,kaspersky,全局直连",
  "DOMAIN-KEYWORD,123957,全局直连",
  "DOMAIN-KEYWORD,123684,全局直连",
  "DOMAIN-KEYWORD,123865,全局直连",
  "DOMAIN-KEYWORD,ditiepi,全局直连",
  "DOMAIN-KEYWORD,pangolin,全局直连",
  "DOMAIN-KEYWORD,volces,全局直连",
  "DOMAIN-KEYWORD,bytescm,全局直连",
  "DOMAIN-KEYWORD,pglstatp,全局直连",
  "DOMAIN-KEYWORD,ctobsnssdk,全局直连",
  "DOMAIN-KEYWORD,romielf,全局直连",
  // 自定义规则
  "DOMAIN-SUFFIX,google.com,谷歌服务", // Google
  "DOMAIN-SUFFIX,googleapis.cn,谷歌服务", // Google服务
  "DOMAIN-SUFFIX,gstatic.com,谷歌服务", // Google静态资源
  "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,谷歌服务", // Google Play下载服务
  "DOMAIN-SUFFIX,github.io,节点选择", // Github Pages
  "DOMAIN,v2rayse.com,节点选择", // V2rayse节点工具
  // Loyalsoldier 规则集
  "RULE-SET,applications,全局直连",
  "RULE-SET,private,全局直连",
  "RULE-SET,reject,广告过滤",
  "RULE-SET,Microsoft,微软服务",
  "RULE-SET,icloud,iCloud服务",
  "RULE-SET,apple,苹果服务",
  "RULE-SET,YouTube,YouTube",
  "RULE-SET,Netflix,Netflix",
  "RULE-SET,bahamut,动画疯",
  "RULE-SET,Spotify,Spotify",
  "RULE-SET,BilibiliHMT,哔哩哔哩港澳台",
  "RULE-SET,AI,AI",
  "RULE-SET,TikTok,TikTok",
  "RULE-SET,google,谷歌服务",
  "RULE-SET,proxy,节点选择",
  "RULE-SET,gfw,节点选择",
  "RULE-SET,tld-not-cn,节点选择",
  "RULE-SET,direct,全局直连",
  "RULE-SET,lancidr,全局直连,no-resolve",
  "RULE-SET,cncidr,全局直连,no-resolve",
  "RULE-SET,telegramcidr,电报消息,no-resolve",
  // 其他规则
  "GEOSITE,CN,全局直连",
  "GEOIP,LAN,全局直连,no-resolve",
  "GEOIP,CN,全局直连,no-resolve",
  "MATCH,漏网之鱼"
];
// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

  // 覆盖原配置中的代理组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "节点选择",
      "type": "select",
      "include-all": true,
      "filter": "^(?!.*(官网|套餐|流量|异常|剩余)).*$",
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
    },
    {
      ...groupBaseOption,
      "name": "谷歌服务",
      "type": "select",
      "proxies": ["节点选择","全局直连"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/google.svg"
    },
    {
      ...groupBaseOption,
      "name": "YouTube",
      "type": "select",
      "proxies": ["节点选择","全局直连"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/youtube.svg"
    },
	{
      ...groupBaseOption,
      "name": "Money",
      "type": "select",
      "proxies": ["节点选择","全局直连"],
      "include-all": true,
    },
    {
      ...groupBaseOption,
      "name": "Netflix",
      "type": "select",
      "proxies": ["节点选择","全局直连"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/netflix.svg"
    },
    {
      ...groupBaseOption,
      "name": "电报消息",
      "type": "select",
      "proxies": ["节点选择","全局直连"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg"
    },
    {
      ...groupBaseOption,
      "name": "AI",
      "type": "select",
      "include-all": true,
      "proxies": ["节点选择"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg"
    },
    {
      ...groupBaseOption,
      "name": "TikTok",
      "type": "select",
      "include-all": true,
      "proxies": ["节点选择"],
      "icon": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/tiktok.svg"
    },
    {
      ...groupBaseOption,
      "name": "微软服务",
      "type": "select",
      "proxies": ["全局直连","节点选择"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/microsoft.svg"
    },
    {
      ...groupBaseOption,
      "name": "iCloud服务",
      "type": "select",
      "proxies": ["全局直连","节点选择"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/iCloud.svg"
    },
    {
      ...groupBaseOption,
      "name": "苹果服务",
      "type": "select",
      "proxies": ["节点选择","全局直连"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/apple.svg"
    },
    {
      ...groupBaseOption,
      "name": "动画疯",
      "type": "select",
      "proxies": ["节点选择"],
      "include-all": true,
      "filter": "(?i)台|tw|TW",
      "icon": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/Bahamut.svg"
    },
    {
      ...groupBaseOption,
      "name": "哔哩哔哩港澳台",
      "type": "select",
      "proxies": ["全局直连","节点选择"],
      "include-all": true,
      "filter": "^(?!.*(官网|套餐|流量|异常|剩余)).*$",
      "icon": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/bilibili.svg"
    },
    {
      ...groupBaseOption,
      "name": "Spotify",
      "type": "select",
      "proxies": ["节点选择","全局直连"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/spotify.svg"
    },
    {
      ...groupBaseOption,
      "name": "广告过滤",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg"
    },
    {
      ...groupBaseOption,
      "name": "全局直连",
      "type": "select",
      "proxies": ["DIRECT","节点选择"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg"
    },
    {
      ...groupBaseOption,
      "name": "全局拦截",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/block.svg"
    },
    {
      ...groupBaseOption,
      "name": "漏网之鱼",
      "type": "select",
      "proxies": ["节点选择","全局直连"],
      "include-all": true,
      "filter": "^(?!.*(官网|套餐|流量|异常|剩余)).*$",
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg"
    }
  ];

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;
// 添加判断
  if(config["proxies"]) {
    config["proxies"].forEach(proxy => {
      // 为每个节点设置 udp = true
      proxy.udp = true

    })
  }
  // 返回修改后的配置
  return config;

}
