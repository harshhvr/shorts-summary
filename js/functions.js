// functions.js

function getYtShort(videoId) {
  return {
    thumbnail_url: `https://i.ytimg.com/vi/${videoId}/oardefault.jpg`,
    embed_url: `https://www.youtube.com/embed/${videoId}`,
    video_url: `https://www.youtube.com/shorts/${videoId}`,
  };
}
