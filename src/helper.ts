export function getVideosInPlaylist(playlistName: string) {
  const videoIds = window.playlists.find(playlist => playlist.name === playlistName).videoIds;
  return window.videos.filter(video => videoIds.includes(video.id));
}
