# 🦂 SCORPION HOST — PS5 Jailbreak Portal
### Designed and Maintained by Ahmed Essam
**Live URL:** [scorpion511.github.io/PS5-SCORPION/](https://scorpion511.github.io/PS5-SCORPION/)

An ultra-lightweight, high-speed manual exploit host explicitly tailored for PlayStation 5 consoles running system firmware versions **7.00 through 13.60**.

---

## 🚀 Setup & Execution Guide

### 1. Console DNS Configuration (Recommended)
To route directly to the custom execution payload server block, update your console network interface values:
* **Primary DNS:** `45.56.67.85`
* **Secondary DNS:** Leave blank or default `0.0.0.0`

### 2. Launch Interface
Navigate directly to your public deployment mirror URL inside the PS5 User Guide panel or standard browser overlay environment:
👉 **[https://scorpion511.github.io/PS5-SCORPION/](https://scorpion511.github.io/PS5-SCORPION/)**

### 3. Payload Injection Engine
* The integrated ELF loader background worker framework listens actively on network port `9021`.
* Once initialization finishes and the `elfldr` routine hooks to port `9021`, use the dualsense controller configurations to manage operations:
  * Press **X** to select/deselect a payload.
  * Use **D-pad ↑ / ↓** to move the selection cursor.
  * Press **L2** to run all selected payloads sequentially.
  * Press **R1** to instantly run **etaHEN.elf only**.

---

## 📦 Included Payload Packages
All payloads are actively integrated into the `payloads/` directory and skipped automatically if missing:
1. `pldmgr_v0.5.1.elf` — Advanced Payload Manager
2. `kstuff.elf` — Kernel payload utility (fdev support up to 13.60)
3. `shadowmountplus.elf` — Mount helper enhancements
4. `game-compressor.elf` — Active game storage compressor tool
5. `webkit-autoloader-installer_v0.5.0.elf` — WebKit persistent autoloader handler
6. `etaHEN.elf` — Comprehensive homebrew enabler interface

---

## 📊 Performance & System Stability Notes
* **WebKit Initialization:** The browser engine framework requires variable attempts depending on memory layout allocation shifts. If the UI panel text readout stalls or freezes during execution stages, simply close out and refresh the host viewport completely.
* **Kernel Stability:** If a critical memory race condition triggers a terminal panic event or soft console lock, fully cycle power to clear registers before initiating another sequential attempt.

---

## 🛡️ Special Attributions
* **Compiled & Maintained By:** Ahmed Essam 
* **Original Developer Framework:** muhammad10yaser
* **Exploit Core Contributors:** ntfargo, ufm42, Sonic-Iso, Jordy, Dr. Yenyen, TheFlow, SlidyBat, Flatz, cow, nhk, bollarz, Sleirsgoevy, EchoStretch, EarthOnion.

---

## ⚖️ Disclaimer & Compliance Guidelines
This deployment package framework is compiled purely for architectural validation and research verification procedures. It does not validate, authorize, or facilitate software piracy mechanisms or structural tampering routines across protected corporate configurations. Users take full structural liabilities for system behaviors, operational stability variables, or account profile alignment anomalies following ongoing exploit interaction procedures.
