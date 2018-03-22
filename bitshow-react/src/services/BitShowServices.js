import Show from '../entities/show';

class BitShowService {
    fetchShow() {
        return fetch("https://api.tvmaze.com/shows")
            .then((response) => {
                return response.json()
            })
            .then(data => {
                return data.map(show => new Show(show.id, show.name, show.image.medium))
            })
    }
}

export const showService = new BitShowService();