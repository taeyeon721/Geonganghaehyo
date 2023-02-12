class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient;
    }

    async search(query) {
        const response = await this.youtube.get('serch', {
            params: {
                part: 'snippet',
                maxResults: 1,
                type: 'video',
                q: query,
            },
        });

        return response.data.items.map((item) => ({
            ...item,
            id: item.id.videoId,
        }));
    }
}

export default Youtube;