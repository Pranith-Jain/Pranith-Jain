<div align="center">

```
██████╗ ██████╗  █████╗ ███╗   ██╗██╗████████╗██╗  ██╗
██╔══██╗██╔══██╗██╔══██╗████╗  ██║██║╚══██╔══╝██║  ██║
██████╔╝██████╔╝███████║██╔██╗ ██║██║   ██║   ███████║
██╔═══╝ ██╔══██╗██╔══██║██║╚██╗██║██║   ██║   ██╔══██║
██║     ██║  ██║██║  ██║██║ ╚████║██║   ██║   ██║  ██║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝   ╚═╝  ╚═╝
```

### Security Analyst & Detection Engineer · Threat Intel · Email Defense · Edge-native Tooling

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pranithjain/)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://pranithjain.qzz.io)
[![DFIR Toolkit](https://img.shields.io/badge/DFIR_Toolkit-2c3ee5?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pranithjain.qzz.io/dfir)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hello@pranithjain.qzz.io)
[![X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Npj8448)

![Profile Views](https://komarev.com/ghpvc/?username=Pranith-Jain&label=Profile+Views&color=0e75b6&style=flat)

</div>

---

## whoami

```yaml
name: Pranith Jain
role: Security Analyst & Detection Engineer
company: Qubit Capital
location: Bengaluru, India
focus:
  - Email Security & BEC Investigations
  - Threat Intelligence & IOC Analysis
  - Phishing Triage & Malware Detection
  - Detection Engineering & Edge-native Security Tooling
  - Security Automation & AI Workflows
  - DMARC Enforcement & Domain Abuse Monitoring
currently_building:
  - DFIR toolkit on Cloudflare Workers (24 tools, 22 IOC sources, no signup)
  - MCP-based threat intelligence pipelines
  - n8n security automation workflows
  - AI-powered email security tooling with Claude Code
expanding_into:
  - AI Security & NHI (Non-Human Identity) governance
open_to: Security Engineering · Detection Engineering · AI Security · Email Security
```

---

## what I work on

I secure email infrastructure at scale and ship the tools to do it faster.

At **Qubit Capital** I own email security across 150+ early-stage startups — 1,300+ domains, 2,700+ inboxes, and a continuous stream of phishing, BEC, and impersonation threats to investigate, block, and remediate.

- Investigated **250+ phishing, BEC, and malware incidents** — false positives down 25%, per-incident analysis time down 35%, threat-remediation rate above 90%
- Enforced **SPF, DKIM, DMARC** across 1,300+ domains — 98%+ authentication alignment, 60% drop in spoofing incidents
- Automated phishing triage in **n8n** — average response time from 4 hours to under 75 minutes
- Built an **email infrastructure monitoring dashboard** with Claude Code — real-time visibility across 1,300+ domains and 2,700+ inboxes
- Developed a **Smartlead MCP server** with 23 custom analytics tools for Claude Code-queryable campaign intelligence
- Identified and mitigated **30+ lookalike domain campaigns** — phishing surface area reduced by 40%

---

## featured project: DFIR Toolkit

> **Live:** [pranithjain.qzz.io/dfir](https://pranithjain.qzz.io/dfir)
> **Source:** [Pranith-Jain.github.io](https://github.com/Pranith-Jain/Pranith-Jain.github.io)

A working, free DFIR toolkit. **24 tools, 22 IOC sources, zero credits required**, deployed end-to-end on Cloudflare Workers.

```
┌───────────────────────────────────────────────────────────────────────────┐
│   IOC Checker      Subdomain Takeover    STIX Viewer       Threat Map    │
│   IOC Extractor    Phishing Analyzer     Dark Web Watch    JWT Inspector │
│   Domain Lookup    File Analyzer         CVE Lookup        URL Preview   │
│   Homograph Det.   ASN Lookup            Breach Checker    EXIF Parser   │
│   MITRE ATT&CK     Threat Actors         Intel Briefings   Knowledge Base│
│   Decoder          Privacy Check         Recent Lookups                  │
└───────────────────────────────────────────────────────────────────────────┘
```

**IOC Checker** streams **22 threat-intel providers** in parallel for IPs, domains, URLs, and hashes:

- Commercial: VirusTotal · AbuseIPDB · Shodan · OTX · URLScan · Hybrid Analysis
- abuse.ch (one shared free key): ThreatFox · URLhaus · MalwareBazaar
- Public lists / no signup: Feodo · Spamhaus · Tor · OpenPhish · Cloudflare DoH · Bitwire · Blocklist.de · Binary Defense · Ipsum · Phishing Army · CIRCL Hashlookup · TweetFeed · CINS Army

**Cyber Threat Map** geo-locates malicious infrastructure across 7 IOC sources onto a live world choropleth, with per-type panels for URLs, domains, and hashes.

**Dark Web Watch** aggregates 15 ransomware leak-site, breach, and dark-web research feeds, with a persistent keyword watchlist and regex search (last-30-day window).

**Intel Briefings** are auto-generated daily (00:05 UTC) and weekly (Mon 00:15 UTC) from CISA KEV + abuse.ch + 6 snapshot blocklists.

Engineered to fit the Cloudflare free tier: provider results cache to the Cache API (not KV), KV writes stay under 5% of the daily quota.

**Stack:**
![Cloudflare](https://img.shields.io/badge/Cloudflare_Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Hono](https://img.shields.io/badge/Hono-E36002?style=flat-square&logo=hono&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

---

## also building

### Qubit Email Infrastructure Automation Platform

> End-to-end platform for domain purchase, DNS setup, Google Workspace provisioning, and email warmup management across 1,300+ domains.

```
Domain Purchase → DNS Config → Workspace Provisioning → Warmup → Monitoring
     Spaceship       Cloudflare      Playwright          Smartlead    Dashboard
```

- Automated 6 previously-disconnected workflows into one platform
- Per-domain setup time: several hours → under 10 minutes
- Smartlead MCP server with 23 analytics tools for Claude Code querying
- Real-time monitoring dashboards across 2,700+ inboxes

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white)
![Claude](https://img.shields.io/badge/Claude_Code-D97757?style=flat-square&logo=claude&logoColor=white)
![n8n](https://img.shields.io/badge/n8n-EA4B71?style=flat-square&logo=n8n&logoColor=white)

---

## tech stack

### security operations

![Sumo Logic](https://img.shields.io/badge/Sumo_Logic-000099?style=for-the-badge&logo=sumologic&logoColor=white)
![Elastic](https://img.shields.io/badge/Elastic-005571?style=for-the-badge&logo=elastic&logoColor=white)
![Wazuh](https://img.shields.io/badge/Wazuh-00A9E0?style=for-the-badge&logoColor=white)
![VirusTotal](https://img.shields.io/badge/VirusTotal-394EFF?style=for-the-badge&logo=virustotal&logoColor=white)
![Wireshark](https://img.shields.io/badge/Wireshark-1679A7?style=for-the-badge&logo=wireshark&logoColor=white)

### email security

![DMARC](https://img.shields.io/badge/DMARC_Enforcement-EA4335?style=for-the-badge&logo=gmail&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare_DNS-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![Google Workspace](https://img.shields.io/badge/Google_Workspace-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Proofpoint](https://img.shields.io/badge/Proofpoint-0096D6?style=for-the-badge&logoColor=white)

### automation, AI, edge

![Claude](https://img.shields.io/badge/Claude_Code-D97757?style=for-the-badge&logo=claude&logoColor=white)
![n8n](https://img.shields.io/badge/n8n-EA4B71?style=for-the-badge&logo=n8n&logoColor=white)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### threat intelligence & OSINT

![Shodan](https://img.shields.io/badge/Shodan-FF0000?style=for-the-badge&logoColor=white)
![Maltego](https://img.shields.io/badge/Maltego-0078D7?style=for-the-badge&logoColor=white)
![IBM X-Force](https://img.shields.io/badge/IBM_X--Force-052FAD?style=for-the-badge&logo=ibm&logoColor=white)
![MITRE](https://img.shields.io/badge/MITRE_ATT&CK-EE3340?style=for-the-badge&logoColor=white)

### cloud security

![GCP](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white)

### scripting

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Bash](https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white)
![PowerShell](https://img.shields.io/badge/PowerShell-5391FE?style=for-the-badge&logo=powershell&logoColor=white)

---

## what you'll find here

- [**Pranith-Jain.github.io**](https://github.com/Pranith-Jain/Pranith-Jain.github.io) — portfolio + DFIR toolkit (the deployed thing at pranithjain.qzz.io)
- [**DFIR-PLATFORM**](https://github.com/Pranith-Jain/DFIR-PLATFORM) — design trail and prototypes for the toolkit
- [**Email-Infrastructure-Automation-Platform**](https://github.com/Pranith-Jain/Email-Infrastructure-Automation-Platform) — Smartlead MCP server + n8n workflows
- [**cti-stix-connector**](https://github.com/Pranith-Jain/cti-stix-connector) — Containerised Python CLI that ingests JSON campaign + CSV IOC feeds and emits STIX 2.1 bundles
- [**AI-Agent-Portfolio**](https://github.com/Pranith-Jain/AI-Agent-Portfolio) — MindStudio AI Agent experiments
- [**Secure-Patient-Data-Platform-on-Google-Cloud-Capstone-**](https://github.com/Pranith-Jain/Secure-Patient-Data-Platform-on-Google-Cloud-Capstone-) — Zero Trust HIPAA-aligned GCP capstone (Grade A, 93/100)

---

## certifications

| Certification | Issuer | Year |
|---|---|---|
| Proofpoint Certified AI Agent Security Specialist | Proofpoint | 2026 |
| SOC Summit 2026 | SOC Summit | 2026 |
| Antisyphon Training | Antisyphon | 2026 |
| Data Loss Prevention (DLP) Survival Guide | Fortra | 2026 |
| Social Media Intelligence (SOCMINT) | CyberSudo | Mar 2026 |
| Certified AI Security Expert | Virtual Cyber Labs | Mar 2026 |
| Proofpoint AI Email Security Specialist | Proofpoint | 2025 |
| Effective AI for Practical SecOps Workflows | ISC2 | 2025 |
| Mastering Cyber Threat Intelligence for SOC Analysts | MCSI | 2025 |
| DSPM Fundamentals | Fortra | 2025 |
| Certified Cyber Criminologist | Virtual Cyber Labs | 2025 |
| Google Cloud Cybersecurity Certificate | Google | 2025 |
| Multi-Cloud Blue Team Analyst (MCBTA) | CyberWarFare Labs | 2025 |

---

## github stats

<div align="center">

![Pranith's GitHub Stats](https://github-readme-stats.vercel.app/api?username=Pranith-Jain&show_icons=true&theme=tokyonight&hide_border=true&count_private=true&include_all_commits=true)
&nbsp;
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs?username=Pranith-Jain&layout=compact&theme=tokyonight&hide_border=true&langs_count=6)

![GitHub Streak](https://streak-stats.demolab.com?user=Pranith-Jain&theme=tokyonight&hide_border=true)

</div>

---

## open to

- Collaborating on **DFIR tooling** and detection pipelines
- Building **AI-powered security automation** with Claude Code and MCP
- Discussing **threat intelligence**, BEC investigation techniques, and OSINT
- **Email security** consulting (DMARC enforcement, deliverability, abuse response)
- Contributing to **open-source security projects**

Security is a team sport. Let's raise the bar.

---

<div align="center">

*Building at the intersection of AI, email security, and edge-native DFIR tooling*

</div>
