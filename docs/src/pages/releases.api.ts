import axios from 'axios';

export const releaseFeed = async () => {
    const result: {
        repo: string;
        url: string;
        tag_name: string;
        name: string;
        body: string;
        published_at: string;
        preRelease: boolean;
    }[] = [];
    const repos = ["openxml-office", "tauri-remote-ui", "xml_rs"];
    for (const repo of repos) {
        const url = `https://api.github.com/repos/DraviaVemal/${repo}/releases`;
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3+json',
            },
        });
        if (response.status !== 200) {
            throw new Error(`Failed to fetch releases from ${repo}: ${response.statusText}`);
        }
        for (const release of response.data) {
            result.push({
                repo,
                url: release.html_url,
                name: release.name,
                preRelease: release.prerelease,
                body: release.body,
                tag_name: release.tag_name,
                published_at: release.published_at,
            });
        }
    }
    result.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
    return result;
}