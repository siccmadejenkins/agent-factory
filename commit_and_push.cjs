const git = require('isomorphic-git');
const http = require('isomorphic-git/http/node');
const fs = require('fs');
const path = require('path');

async function main() {
  const token = (process.argv[2] || process.env.GITHUB_TOKEN || '').trim();
  if (!token) {
    console.error('Missing token');
    process.exit(1);
  }

  const dir = '/home/siccmade/Downloads/app';
  console.log('[*] Scanning git status matrix...');
  
  const statusMatrix = await git.statusMatrix({ fs, dir });
  let changes = 0;
  for (const [filepath, head, workdir, stage] of statusMatrix) {
    if (workdir !== stage) {
      if (workdir === 0) {
        console.log(`[-] Removing: ${filepath}`);
        await git.remove({ fs, dir, filepath });
        changes++;
      } else {
        console.log(`[+] Staging: ${filepath}`);
        await git.add({ fs, dir, filepath });
        changes++;
      }
    }
  }

  console.log(`[*] Staged ${changes} changed file(s).`);

  if (changes > 0) {
    const sha = await git.commit({
      fs,
      dir,
      message: 'fix: Complete 24 agent visual assets and robust texture fallback in VortexGallery',
      author: {
        name: 'siccmadejenkins',
        email: 'siccmadejenkins@users.noreply.github.com'
      }
    });
    console.log(`[+] Committed: ${sha}`);
  } else {
    console.log('[*] No new uncommitted changes detected.');
  }

  console.log('[*] Pushing to GitHub (origin/main)...');
  const pushRes = await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: 'main',
    force: true,
    onAuth: () => ({
      username: token,
      password: ''
    })
  });

  console.log('[+] Push result:', JSON.stringify(pushRes, null, 2));
  console.log('✅ Synchronized successfully with https://github.com/siccmadejenkins/agent-factory');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
