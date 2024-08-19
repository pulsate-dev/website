import { useEffect, useState } from 'react';

/**
 * FetchVersion component fetches and displays the latest version tag, release-note-note date, and release-note-note note URL
 * for a given version tag from the GitHub API.
 *
 * @param {Object} props - The component props.
 * @param {string} props.versionTag - The version tag to fetch information for.
 * @returns The rendered component.
 */
export default function FetchVersion({ versionTag }: { versionTag: string }) {
  const [releaseDate, setReleaseDate] = useState<string>();
  const [releaseNoteURL, setReleaseNoteURL] = useState<string>();

  useEffect(() => {
    fetchVersion(versionTag);
  }, [versionTag]);

  const fetchVersion = async (versionTag: string) => {
    const res = await fetch(
      `https://api.github.com/repos/pulsate-dev/pulsate/releases/tags/${versionTag}`,
    );
    const data = await res.json();
    setReleaseNoteURL(data.html_url as string);

    const date = new Date(data.published_at);
    setReleaseDate(date.toLocaleDateString());
  };

  return (
    <strong>
      Release:{' '}
      <a href={releaseNoteURL} rel="noreferrer">
        {releaseDate}
      </a>
    </strong>
  );
}
