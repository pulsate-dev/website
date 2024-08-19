import { useEffect, useState } from 'react';

/**
 * FetchLatestVersion component fetches and displays the latest version tag, release-note-note date, and release-note-note note URL
 * from the GitHub API for the Pulsate repository.
 *
 * @returns The rendered component.
 */
export default function FetchLatestVersion() {
  const [latestVersionTag, setLatestVersionTag] = useState<string>();
  const [releaseDate, setReleaseDate] = useState<string>();
  const [releaseNoteURL, setReleaseNoteURL] = useState<string>();

  useEffect(() => {
    fetchLatestVersion();
  }, []);

  const fetchLatestVersion = async () => {
    const res = await fetch(
      'https://api.github.com/repos/pulsate-dev/pulsate/releases/latest',
    );
    const data = await res.json();
    setLatestVersionTag(data.tag_name as string);
    setReleaseNoteURL(data.html_url as string);

    const date = new Date(data.published_at);
    setReleaseDate(date.toLocaleDateString());
  };

  return (
    <strong>
      <a href={releaseNoteURL} rel="noreferrer" style={{ color: '#016BE6' }}>
        {latestVersionTag}
      </a>{' '}
      ({releaseDate})
    </strong>
  );
}
