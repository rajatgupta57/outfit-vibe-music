const styleSelect = document.getElementById("styleSelect");
const playlistContainer = document.getElementById("playlistContainer");
const imageInput = document.getElementById("imageInput");
const previewContainer = document.getElementById("previewContainer");

const playlists = {
  casual: "https://open.spotify.com/embed/playlist/37i9dQZF1DX2sUQwD7tbmL",
  formal: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO",
  sporty: "https://open.spotify.com/embed/playlist/37i9dQZF1DX70RN3TfWWJh",
};

styleSelect.addEventListener("change", () => {
  const selectedStyle = styleSelect.value;
  const embedLink = playlists[selectedStyle];

  playlistContainer.innerHTML = `
    <iframe src="${embedLink}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  `;
});

imageInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewContainer.innerHTML = `<img src="${e.target.result}" alt="Outfit Preview" />`;
    };
    reader.readAsDataURL(file);
  }
});
