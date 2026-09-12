#!/usr/bin/env node
/**
 * God's Eye View (Cloud Edition) — Lifetime Upstream Sync Engine
 * 
 * Automatically synchronizes changes from Bilawal Sidhu's upstream repository
 * (https://github.com/bilawalsidhu/gods-eye-view) while keeping Abhilash Ghosh's
 * Cloud Edition modifications 100% intact (Azure server.mjs, BYOK localStorage,
 * CI/CD workflows, custom README, LICENSE, and EarthSphere coupling).
 */

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function run(cmd, options = {}) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: 'utf8', stdio: options.silent ? 'pipe' : 'inherit', ...options });
  } catch (error) {
    if (!options.allowFailure) {
      throw error;
    }
    return null;
  }
}

function runSilent(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: 'utf8', stdio: 'pipe' }).trim();
  } catch {
    return '';
  }
}

console.log('===========================================================');
console.log("🌐 God's Eye View — Lifetime Upstream Sync Engine");
console.log('Maintainer: Abhilash Ghosh (@djabhi31)');
console.log('Upstream:   Bilawal Sidhu (bilawalsidhu/gods-eye-view)');
console.log('===========================================================\n');

// 1. Ensure upstream remote exists with proper ref tracking
const remotes = runSilent('git remote');
if (!remotes.split('\n').map((r) => r.trim()).includes('upstream')) {
  console.log('[1/5] Adding upstream remote...');
  run('git remote add upstream https://github.com/bilawalsidhu/gods-eye-view.git');
} else {
  console.log('[1/5] Upstream remote configured.');
}
run('git config remote.upstream.fetch "+refs/heads/*:refs/remotes/upstream/*"');

// 2. Fetch latest commits from upstream into explicit ref
console.log('[2/5] Fetching upstream branches...');
run('git fetch upstream +refs/heads/main:refs/remotes/upstream/main');

// 3. Check for new commits
const aheadBehind = runSilent('git rev-list --count HEAD..upstream/main');
const parsed = parseInt(String(aheadBehind || '').trim(), 10);
const newCommitsCount = (Number.isNaN(parsed) || parsed <= 0) ? 0 : parsed;

if (newCommitsCount === 0) {
  console.log('\n✅ Your repository is already 100% up-to-date with upstream!');
  console.log("No new commits found in bilawalsidhu/gods-eye-view:main.\n");
  process.exit(0);
}

console.log(`\n[3/5] Found ${newCommitsCount} new commit(s) from upstream. Preparing sync...`);

// 4. Backup Cloud Edition custom files to temporary memory
const BACKUP_FILES = [
  'README.md',
  'LICENSE',
  'server.mjs',
  '.dockerignore',
  'Dockerfile',
  '.gitignore',
  '.github/workflows/main_godseyeview.yml',
  '.github/workflows/sync-upstream.yml',
  '.github/workflows/release.yml',
  'src/keySetup.js',
  'public/og-image.jpg',
];

const backups = new Map();
for (const file of BACKUP_FILES) {
  const filePath = path.join(ROOT, file);
  if (fs.existsSync(filePath)) {
    backups.set(file, fs.readFileSync(filePath));
  }
}

// 5. Merge upstream
console.log('[4/5] Merging upstream/main...');
try {
  run('git merge upstream/main -m "chore(upstream): sync latest updates from bilawalsidhu/gods-eye-view"');
} catch {
  console.log('Resolving conflicts and restoring Abhilash Ghosh Cloud Edition protections...');
  for (const [file, content] of backups) {
    const filePath = path.join(ROOT, file);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content);
    run(`git add "${file}"`, { silent: true });
  }

  // Resolve any remaining unmerged conflict files using ours
  const unmerged = runSilent('git diff --name-only --diff-filter=U');
  if (unmerged) {
    for (const f of unmerged.split('\n').map((s) => s.trim()).filter(Boolean)) {
      run(`git checkout --ours -- "${f}"`, { allowFailure: true, silent: true });
      run(`git add "${f}"`, { allowFailure: true, silent: true });
    }
  }
  
  const mergeHead = path.join(ROOT, '.git', 'MERGE_HEAD');
  if (fs.existsSync(mergeHead)) {
    run('git commit -m "chore(upstream): sync latest updates with Cloud Edition protections"');
  }
}

// Re-verify BYOK in main.js
function patchBYOK() {
  const mainPath = path.join(ROOT, 'src/main.js');
  if (fs.existsSync(mainPath)) {
    let mainSrc = fs.readFileSync(mainPath, 'utf8');
    if (!mainSrc.includes('localCesium')) {
      if (mainSrc.includes('createStandaloneApplication')) {
        const replacement = `const localCesium = typeof localStorage !== 'undefined' ? localStorage.getItem('gev_cesium_token') : null;
const localGoogle = typeof localStorage !== 'undefined' ? localStorage.getItem('gev_google_maps_key') : null;

const application = createStandaloneApplication({
  googleApiKey: (localGoogle && localGoogle.trim()) || import.meta.env.GOOGLE_MAPS_API_KEY || '',
  cesiumToken: (localCesium && localCesium.trim()) || import.meta.env.CESIUM_ION_TOKEN || '',`;
        mainSrc = mainSrc.replace(/const application = createStandaloneApplication\(\{[\s\S]*?cesiumToken:[^\n,]+,?/, replacement);
      } else if (mainSrc.includes('const cesiumToken = import.meta.env.CESIUM_ION_TOKEN;')) {
        mainSrc = mainSrc.replace(
          'const cesiumToken = import.meta.env.CESIUM_ION_TOKEN;',
          `const localCesium = typeof localStorage !== 'undefined' ? localStorage.getItem('gev_cesium_token') : null;\n    const localGoogle = typeof localStorage !== 'undefined' ? localStorage.getItem('gev_google_maps_key') : null;\n    const cesiumToken = (localCesium && localCesium.trim()) || import.meta.env.CESIUM_ION_TOKEN || '';\n    const googleApiKey = (localGoogle && localGoogle.trim()) || import.meta.env.GOOGLE_MAPS_API_KEY || '';\n    if (googleApiKey) window.__GOOGLE_MAPS_API_KEY__ = googleApiKey;`
        );
      }
      fs.writeFileSync(mainPath, mainSrc, 'utf8');
      run('npm run format', { allowFailure: true, silent: true });
      run('git add src/main.js', { silent: true });
      const status = runSilent('git status --porcelain src/main.js');
      if (status) {
        run('git commit -m "chore(byok): preserve localStorage BYOK fallback in main.js"', { allowFailure: true });
      }
    }
  }
}
patchBYOK();

// 6. Test build integrity
console.log('\n[5/5] Verifying build integrity...');
if (!fs.existsSync(path.join(ROOT, 'node_modules'))) {
  console.log('Installing dependencies...');
  run('npm install');
}
run('npm run build');

console.log('\n===========================================================');
console.log('🎉 LIFETIME SYNC SUCCESSFUL!');
console.log('Upstream features merged. Cloud Edition & Azure configs 100% intact.');
console.log('Push updates to live Azure deployment with:');
console.log('   git push origin main');
console.log('===========================================================\n');
