import os
import re

# Directories and files to ignore
IGNORE_DIRS = {".git", ".github"}
IGNORE_FILES = {"Dockerfile", "Cloner.py"}

# Folders to process
TARGET_FOLDERS = {"plugins", "data"}

# Text replacements
REPLACEMENTS = {
    "Mr Frank": "DUDAS",
    "SUBZERO-MD": "ENCRYPTO-27",
    "SubZero MD": "ENCRYPTO-27",
    "Subzero": "ENCRYPTO-27",
    "Darrell Mucheri": "Diego Allies",
    "18062212660": "27679291800",
    "263719647303": "27679291800",
    "https://github.com/mrfrank-ofc/SUBZERO-MD": "https://i.ibb.co/hx0rGm5/Encrypto.webp",
    "https://whatsapp.com/channel/0029VagQEmB002T7MWo3Sj1D": "https://i.ibb.co/hx0rGm5/Encrypto.webp",
    "https://chat.whatsapp.com/InsR5qk3cBsG2781A6uxcO": "https://i.ibb.co/hx0rGm5/Encrypto.webp",
    "ＳＵＢＺＥＲＯ - ＭＤ- ＢＯＴ": "ENCRYPTO-MD-BOT",
}

# Metadata block to prepend to README.md
README_METADATA = """---
license: apache-2.0
title: ENCRYPTO MD
sdk: docker
emoji: 🚀
colorFrom: blue
colorTo: blue
short_description: The Best W.A bo
---
"""

# Dockerfile content
DOCKERFILE_CONTENT = """
FROM node:lts-buster

# Install Git and other dependencies
RUN apt-get update && \\
    apt-get install -y \\
    git \\
    ffmpeg \\
    imagemagick \\
    webp && \\
    apt-get upgrade -y && \\
    rm -rf /var/lib/apt/lists/*

# Copy package.json and install dependencies
COPY package.json .
RUN npm install && npm install -g qrcode-terminal pm2

# Copy application code
COPY . .

# Expose port and set command
EXPOSE 3000
CMD ["pm2-runtime", "start", "index.js"]
"""

# Function to log messages to a text file
def log_to_file(log_message, log_file_path='logfile.txt'):
    """Function to log messages to a text file."""
    with open(log_file_path, 'a') as log_file:
        log_file.write(log_message + '\n')

def process_file(file_path):
    """Process a single file to replace text."""
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        original_content = content
        for old, new in REPLACEMENTS.items():
            content = re.sub(re.escape(old), new, content)

        if content != original_content:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)
            log_to_file(f'Replaced text in {file_path}')
            return True
        else:
            log_to_file(f'No changes made to {file_path}')
            return False

    except Exception as e:
        log_to_file(f"Failed to process {file_path}: {e}")
        return False
    return False

def process_directory(directory):
    """Recursively process files in a directory."""
    total_files = 0
    successful_replacements = 0

    for root, dirs, files in os.walk(directory):
        # Ignore specified directories
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]

        # Only process files in the target folders
        if any(target_folder in root for target_folder in TARGET_FOLDERS):
            for file in files:
                if file in IGNORE_FILES:
                    continue

                file_path = os.path.join(root, file)
                total_files += 1
                if process_file(file_path):
                    successful_replacements += 1

    return total_files, successful_replacements

def update_readme(directory):
    """Add metadata to README.md in the root directory."""
    readme_path = os.path.join(directory, "README.md")
    try:
        if os.path.exists(readme_path):
            with open(readme_path, "r+", encoding="utf-8") as f:
                content = f.read()
                f.seek(0, 0)
                f.write(README_METADATA + "\n" + content)
            log_to_file(f'Updated README.md at {readme_path}')
        else:
            with open(readme_path, "w", encoding="utf-8") as f:
                f.write(README_METADATA)
            log_to_file(f'Created and added metadata to README.md at {readme_path}')
    except Exception as e:
        log_to_file(f"Failed to update README.md: {e}")

def create_dockerfile(dockerfile_path='Dockerfile'):
    """Function to create or replace the Dockerfile with the given content."""
    try:
        with open(dockerfile_path, 'w') as dockerfile:
            dockerfile.write(DOCKERFILE_CONTENT)
        log_to_file(f'Dockerfile has been created/updated at {dockerfile_path}.')
    except Exception as e:
        log_to_file(f"Failed to create/update Dockerfile: {e}")

if __name__ == "__main__":
    repo_dir = os.getcwd()  # Root directory of the repository
    log_to_file('Script started.')

    print("Starting bulk text replacement...")

    total_files, successful_replacements = process_directory(repo_dir)
    update_readme(repo_dir)
    create_dockerfile()

    log_to_file('Script completed successfully.')

    print("\nBulk task completed!")
    print(f"Total files processed: {total_files}")
    print(f"Successful replacements: {successful_replacements}")

    log_to_file(f"Total files processed: {total_files}")
    log_to_file(f"Successful replacements: {successful_replacements}")