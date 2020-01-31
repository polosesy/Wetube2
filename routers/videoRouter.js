import express from "express";
import routes from"../routes";
import { videos, upload, videoDetail, deleteVideo, editVideo } from "../controller/videoController";


const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videosDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;