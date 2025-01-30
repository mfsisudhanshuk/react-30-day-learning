const axios = require('axios');


// Your API key from Google Developers Console
const apiKey = 'xxxxxxxxxxxxx';

// Public Playlist ID (You can get this from the URL of the playlist)
const playlistId = 'xxxxxxxxxxx';

// API URL to fetch playlist items
const url = `https://www.googleapis.com/youtube/v3/playlistItems`;

// Function to fetch all videos from the playlist
async function getPlaylistVideos() {
  try {
    let allVideos = [];
    let nextPageToken = null;

    do {
      // Build API request URL
      const response = await axios.get(url, {
        params: {
          part: 'snippet',
          playlistId: playlistId,
          maxResults: 50, // Max number of items per request
          key: apiKey, // API key
          pageToken: nextPageToken, // For pagination
        },
      });

      // Extract video details
      const videos = response.data.items.map((item) => ({
        title: item.snippet.title,
        videoId: item.snippet.resourceId.videoId,
        videoUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
      }));

      allVideos = allVideos.concat(videos);

      // If there's a next page of results, get it
      nextPageToken = response.data.nextPageToken;
    } while (nextPageToken);

    console.log('Videos in playlist:', allVideos);
    return allVideos;
  } catch (error) {
    console.error('Error fetching playlist videos:', error);
  }
}

// Fetch playlist videos
getPlaylistVideos();
