

const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function copyFolderFromGitHub(owner, repo, branch, folderPath, targetPath, token) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${folderPath}?ref=${branch}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const contents = response.data;

    if (Array.isArray(contents)) {
      for (const item of contents) {
        if (item.type === 'file') {
          const fileUrl = item.download_url;
          const filePath = path.join(targetPath, item.path);

          const fileResponse = await axios.get(fileUrl, {
            responseType: 'stream',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const fileDir = path.dirname(filePath);
          if (!fs.existsSync(fileDir)) {
            fs.mkdirSync(fileDir, { recursive: true });
          }

          const writer = fs.createWriteStream(filePath);
          fileResponse.data.pipe(writer);

          await new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
          });

          console.log(`Copied file: ${filePath}`);
        } else if (item.type === 'dir') {
          const nestedFolderPath = path.join(folderPath, item.name);
          const nestedTargetPath = path.join(targetPath, item.name);
          await copyFolderFromGitHub(owner, repo, branch, nestedFolderPath, nestedTargetPath, token);
        }
      }

      console.log(`Folder copied successfully: ${targetPath}`);
    } else {
      console.log('No folder found at the specified path.');
    }
  } catch (error) {
    console.error('An error occurred while copying the folder:', error.message);
  }
}

// Usage example

// Usage example
// copyFolderFromGitHub('username', 'repo-name', 'main', 'path/to/folder', 'target/folder', 'your-access-token');


// const token = "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"
// const targetPath = "./aws"
// const owner = "aistiak"
// const repo = "daily-learn"
// const branch = "main"
// const outDir = "./out"

const token = "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"
const targetPath = "./ops"
const owner = "markopolo-inc"
const repo = "analytics-service-express"
const branch = "main"
const outDir = "./out"
// Usage example
copyFolderFromGitHub(owner, repo, branch,targetPath, outDir,token);
