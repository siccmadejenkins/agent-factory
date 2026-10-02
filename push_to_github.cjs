/**
 * Automated GitHub Deployer for Agent Factory
 * Usage: node push_to_github.js <GITHUB_TOKEN>
 */

const git = require('isomorphic-git');
const http = require('isomorphic-git/http/node');
const fs = require('fs');

async function deploy() {
  const token = process.argv[2] || process.env.GITHUB_TOKEN;
  if (!token) {
    console.error('❌ Error: Please provide a GitHub Personal Access Token (PAT).');
    console.error('Usage: node push_to_github.js ghp_xxxxxxxxxxxxxxxxxxxx');
    process.exit(1);
  }

  const cleanToken = token.trim();
  const repoName = 'agent-factory';
  const owner = 'siccmadejenkins';

  console.log('======================================================================');
  console.log('🚀 DEPLOYING AGENT FACTORY TO GITHUB (siccmadejenkins/agent-factory)');
  console.log('======================================================================\n');

  // Step 1: Ensure Repo Exists on GitHub (Create via API if needed)
  console.log(`[*] Checking if repository ${owner}/${repoName} exists on GitHub...`);
  const checkRes = await fetch(`https://api.github.com/repos/${owner}/${repoName}`, {
    headers: {
      'Authorization': `Bearer ${cleanToken}`,
      'Accept': 'application/vnd.github+json',
      'User-Agent': 'Agent-Factory-Deployer'
    }
  });

  if (checkRes.status === 404) {
    console.log(`[*] Repository does not exist yet. Creating public repository ${owner}/${repoName}...`);
    const createRes = await fetch('https://api.github.com/user/repos', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${cleanToken}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'User-Agent': 'Agent-Factory-Deployer'
      },
      body: JSON.stringify({
        name: repoName,
        description: '3D WebGL Showroom & Catalog for 24 Plug-and-Play Autonomous Agent Chassis with Swappable Skill Packets',
        homepage: 'https://label-tour-doctor-trades.trycloudflare.com',
        private: false,
        has_issues: true,
        has_projects: true,
        has_wiki: true
      })
    });

    if (createRes.ok) {
      console.log(`  ✅ Successfully created public repository: https://github.com/${owner}/${repoName}`);
    } else {
      const errData = await createRes.json();
      console.error('❌ Failed to create repository:', errData.message || errData);
      process.exit(1);
    }
  } else if (checkRes.ok) {
    console.log(`  ✅ Repository https://github.com/${owner}/${repoName} is confirmed.`);
  }

  // Step 2: Push commits to main branch
  console.log('\n[*] Pushing commits to branch main on GitHub...');
  const dir = '/home/siccmade/Downloads/app';

  const pushResult = await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: 'main',
    force: true,
    onAuth: () => ({
      username: cleanToken,
      password: ''
    })
  });

  console.log('  ✅ Push response:', pushResult);
  console.log('\n======================================================================');
  console.log(`🎉 DEPLOYMENT COMPLETE!`);
  console.log(`🔗 Live Repository: https://github.com/${owner}/${repoName}`);
  console.log('======================================================================\n');
}

deploy().catch(err => {
  console.error('❌ Push Failed:', err);
  process.exit(1);
});
