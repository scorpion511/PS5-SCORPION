import http.server
import re
import subprocess
from pathlib import Path

PORT = 8000
ROOT = Path(__file__).resolve().parent


class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".js":   "application/javascript",
        ".mjs":  "application/javascript",
        ".json": "application/json",
        ".bin":  "application/octet-stream",
        ".elf":  "application/octet-stream",
        ".wasm": "application/wasm",
        ".png":  "image/png",
        ".jpg":  "image/jpeg",
        ".jpeg": "image/jpeg",
        ".svg":  "image/svg+xml",
    }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def log_message(self, *args):
        pass

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, max-age=0, must-revalidate")
        super().end_headers()


def local_ip():
    output = subprocess.check_output(
        ["ipconfig"],
        text=True,
        encoding="utf-8",
        errors="ignore",
    )

    for ip in re.findall(r"IPv4[^:]*:\s*([\d.]+)", output):
        if ip.startswith("192.168."):
            return ip

    return "localhost"


if __name__ == "__main__":
    with http.server.ThreadingHTTPServer(("0.0.0.0", PORT), Handler) as server:
        print(f"http://{local_ip()}:{PORT}/")
        server.serve_forever()