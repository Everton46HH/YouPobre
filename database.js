import { randomUUID } from "crypto";


export class database {
    #videos = new Map();

    list() {
        return this.#videos.values();
    }

    createVideo(video) {
        const videoId = randomUUID();

        this.#videos.set(videoId, video);
    }

    updateVideo(videoId,video) {

        this.#videos.set(videoId, video);
        
    }  
    
    deleteVideo(videoId) {

        this.#videos.delete(videoId);

    }  

    getVideo(videoId) {
        return this.#videos.get(videoId);
    }


}