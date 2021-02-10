import React from "react";
import path from "path";
import { useSnackbar } from "react-simple-snackbar";
import { uploadMedia } from "../utils/upload-media";
import { UploadIcon } from "./Icons";
import UploadVideoModal from "./UploadVideoModal";

function UploadVideo() {
  const [showModal, setShowModal] = React.useState(false);
  const [previewVideo, setPreviewVideo] = React.useState("");
  const [thumbnail, setThumbnail] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [defaultTitle, setDefaultTitle] = React.useState("");
  const [openSnackbar] = useSnackbar();

  const closeModal = () => setShowModal(false);

  async function handleUploadVideo(event) {
    const file = event.target.files[0];

    event.persist();
    if (file) {
      const filesize = file.size / 1000000;
      if (filesize > 50) {
        return openSnackbar("Video file should be less than 50 Mb");
      }

      const previewVideo = URL.createObjectURL(file);
      setPreviewVideo(previewVideo);

      setShowModal(true);
      const url = await uploadMedia({
        type: "video",
        file,
        preset: "vc8yiebl",
      });
      const defaultTitle = path.basename(file.name, path.extname(file.name));
      setDefaultTitle(defaultTitle);
      const extension = path.extname(url);
      setThumbnail(url.replace(extension, ".jpg"));
      setUrl(url);
      event.target.value = "";
    }
  }
  return (
    <div>
      <label htmlFor="video-upload">
        <UploadIcon />
      </label>
      <input
        style={{ display: "none" }}
        id="video-upload"
        type="file"
        accept="video/*"
        onChange={handleUploadVideo}
      />
      {showModal && (
        <UploadVideoModal
          previewVideo={previewVideo}
          thumbnail={thumbnail}
          defaultTitle={defaultTitle}
          url={url}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default UploadVideo;
