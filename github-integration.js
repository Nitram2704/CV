// GitHub API Integration
// Fetches repository stats and caches results in localStorage

const GITHUB_API_BASE = 'https://api.github.com';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds
const CACHE_PREFIX = 'gh_stats_';

/**
 * Extract owner and repo from GitHub URL
 * @param {string} url - GitHub repository URL
 * @returns {object|null} - {owner, repo} or null if invalid
 */
function parseGitHubUrl(url) {
    if (!url) return null;
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) return null;
    return { owner: match[1], repo: match[2].replace('.git', '') };
}

/**
 * Get cached data from localStorage
 * @param {string} key - Cache key
 * @returns {object|null} - Cached data or null if expired/missing
 */
function getCachedData(key) {
    try {
        const cached = localStorage.getItem(CACHE_PREFIX + key);
        if (!cached) return null;

        const { data, timestamp } = JSON.parse(cached);
        const now = Date.now();

        if (now - timestamp > CACHE_DURATION) {
            localStorage.removeItem(CACHE_PREFIX + key);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Error reading cache:', error);
        return null;
    }
}

/**
 * Set cached data in localStorage
 * @param {string} key - Cache key
 * @param {object} data - Data to cache
 */
function setCachedData(key, data) {
    try {
        const cacheEntry = {
            data,
            timestamp: Date.now()
        };
        localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(cacheEntry));
    } catch (error) {
        console.error('Error writing cache:', error);
    }
}

/**
 * Fetch repository stats from GitHub API
 * @param {string} owner - Repository owner
 * @param {string} repo - Repository name
 * @returns {Promise<object>} - Repository stats
 */
async function fetchRepoStats(owner, repo) {
    const cacheKey = `${owner}/${repo}`;

    // Check cache first
    const cached = getCachedData(cacheKey);
    if (cached) {
        return cached;
    }

    try {
        const response = await fetch(`${GITHUB_API_BASE}/repos/${owner}/${repo}`);

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();

        const stats = {
            stars: data.stargazers_count || 0,
            forks: data.forks_count || 0,
            watchers: data.watchers_count || 0,
            language: data.language || 'Unknown',
            description: data.description || '',
            topics: data.topics || [],
            updatedAt: data.updated_at,
            createdAt: data.created_at,
            openIssues: data.open_issues_count || 0,
            size: data.size || 0
        };

        // Cache the results
        setCachedData(cacheKey, stats);

        return stats;
    } catch (error) {
        console.error(`Error fetching stats for ${owner}/${repo}:`, error);

        // Return fallback data
        return {
            stars: 0,
            forks: 0,
            watchers: 0,
            language: 'Unknown',
            description: '',
            topics: [],
            error: true
        };
    }
}

/**
 * Fetch stats for a project
 * @param {object} project - Project object with githubUrl
 * @returns {Promise<object>} - Repository stats
 */
async function getProjectGitHubStats(project) {
    if (!project.githubUrl) {
        return { error: true, message: 'No GitHub URL' };
    }

    const parsed = parseGitHubUrl(project.githubUrl);
    if (!parsed) {
        return { error: true, message: 'Invalid GitHub URL' };
    }

    return await fetchRepoStats(parsed.owner, parsed.repo);
}

/**
 * Fetch stats for multiple projects
 * @param {Array} projects - Array of project objects
 * @returns {Promise<object>} - Map of project IDs to stats
 */
async function getMultipleProjectStats(projects) {
    const statsMap = {};

    const promises = projects.map(async (project) => {
        const stats = await getProjectGitHubStats(project);
        statsMap[project.id] = stats;
    });

    await Promise.all(promises);

    return statsMap;
}

/**
 * Format number with K/M suffix
 * @param {number} num - Number to format
 * @returns {string} - Formatted number
 */
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

/**
 * Clear all GitHub stats cache
 */
function clearGitHubCache() {
    try {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith(CACHE_PREFIX)) {
                localStorage.removeItem(key);
            }
        });
        console.log('GitHub cache cleared');
    } catch (error) {
        console.error('Error clearing cache:', error);
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        parseGitHubUrl,
        fetchRepoStats,
        getProjectGitHubStats,
        getMultipleProjectStats,
        formatNumber,
        clearGitHubCache
    };
}
