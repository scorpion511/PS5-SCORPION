# PS5 Relapse Exploit — by Muhammad Yaser

Supported firmware: 7.00 through 13.60.

## Usage
- In the network settings, set Primary DNS to `45.56.67.85` (Recommended).
- Run `python serve.py` locally, or open https://muhammad10yaser.github.io/exploit on the PS5.
- The payloads are stored in `payloads/`. After a successful run, the ELF loader listens on port `9021`.
- Once elfldr is listening on port `9021`:
  - Press **X** to select/deselect a payload.
  - Use **D-pad ↑ / ↓** to move the cursor.
  - Press **L2** to run all selected payloads.
  - Press **R1** to run **etaHEN only**.

## Included payloads
All payloads are stored in `payloads/`:

- `elfldr-ps5-1360.elf` — ELF loader (listens on port 9021)
- `kstuff.elf` — kernel payload
- `shadowmountplus.elf` — mount helper
- `etaHEN.elf` — homebrew enabler
- `webkit-autoloader-installer_v0.5.0.elf` — WebKit autoloader installer
- `game-compressor.elf` — game compressor payload
- `pldmgr_v0.5.1.elf` — payload manager

Missing payloads are skipped automatically.

## Controls
| Button | Action |
|---|---|
| **X** | Toggle select on the cursor row |
| **D-pad ↑ / ↓** | Move cursor up / down |
| **L2** | Run all selected payloads |
| **R1** | Run **etaHEN.elf only** |

Clicking a row with the mouse has the same effect as pressing X on it.

## Payload list (display order)
1. `pldmgr_v0.5.1.elf`
2. `kstuff.elf`
3. `shadowmountplus.elf`
4. `game-compressor.elf`
5. `webkit-autoloader-installer_v0.5.0.elf`
6. `etaHEN.elf`

When you press **L2**, only the **selected** payloads are sent, in the order above.
Each payload is sent with a short delay (3 s) so elfldr can finish loading before the next one arrives.

## Already jailbroken?
If the console is already jailbroken when the page is opened, the payload sender becomes ready automatically — no re-jailbreak needed. Just select payloads and press **L2**.

## Stability notes
WebKit may need several attempts — reload the page if the browser stalls. The kernel exploit may hang or panic the console, so reboot before trying again if that happens.

## Exploit chain
Browser stage uses JSC info leaks and a structured clone object pool mismatch to corrupt a typedarray. The kernel stage combines an address leak with an `aio_multi_wait` UAF race to establish kernel R/W.

## Developer
**Muhammad Yaser** — PS5 dashboard, payload sender, launcher UI, and payload integration.

## Credits
ntfargo, ufm42, Sonic-Iso, Jordy, Dr. Yenyen, TheFlow, SlidyBat, Flatz, cow, nhk, bollarz, Sleirsgoevy, EchoStretch, EarthOnion.

## Disclaimer
This project is intended for **educational and security research purposes only**. It does not endorse piracy, unauthorized access, or misuse of commercial devices. Use it only on devices you own or are authorized to test, and comply with applicable laws and regulations.

The software is provided as-is, without warranty. You assume the risks of using it, including system instability, data loss, and account bans. The maintainers accept no liability for resulting damage.