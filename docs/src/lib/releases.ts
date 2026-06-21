export interface ReleaseItem {
    repo: string;
    url: string;
    tag_name: string;
    name: string;
    body: string;
    published_at: string;
    preRelease: boolean;
}

export const releaseFeed = async (): Promise<ReleaseItem[]> => {
    const result: ReleaseItem[] = [];
    const repos = ["openxml-office", "tauri-remote-ui", "xml_rs"];

    const headers: Record<string, string> = {
        Accept: 'application/vnd.github.v3+json',
    };
    if (process.env.RELEASE_TOKEN) {
        headers.Authorization = `Bearer ${process.env.RELEASE_TOKEN}`;
    }

    for (const repo of repos) {
        const url = `https://api.github.com/repos/DraviaVemal/${repo}/releases`;
        try {
            const response = await fetch(url, { headers });
            if (!response.ok) {
                console.warn(`Skipping releases for ${repo}: HTTP ${response.status}`);
                continue;
            }
            const releases = await response.json();
            if (!Array.isArray(releases)) continue;
            for (const release of releases) {
                result.push({
                    repo,
                    url: release.html_url,
                    name: release.name,
                    preRelease: release.prerelease,
                    body: release.body ?? '',
                    tag_name: release.tag_name,
                    published_at: release.published_at,
                });
            }
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            console.warn(`Failed to fetch releases for ${repo}: ${message}`);
        }
    }

    result.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
    return result;
}
