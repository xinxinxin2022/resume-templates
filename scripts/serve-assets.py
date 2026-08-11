#!/usr/bin/env python3
"""Simple static file server for resume assets during development."""
import http.server
import os
import sys

PORT = 8080
DIRECTORY = "/tmp/resume-assets"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

if __name__ == "__main__":
    with http.server.HTTPServer(("localhost", PORT), Handler) as httpd:
        print(f"Serving assets at http://localhost:{PORT}/")
        print(f"Press Ctrl+C to stop")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")
