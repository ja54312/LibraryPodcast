export interface Data {
    feed:Feed
}
export interface Feed {
    readonly author:object
             entry:(object)[]
    readonly icon:object
    readonly id:object
             link:(object)[]
    readonly rights:object
    readonly title:object
    readonly updated:object
}

type TPodcast = {
    resultCount:number,
    results:[
        {
            wrapperType:string
            kind:string
            artistId:number
            collectionId:number
            trackId:number
            artistName:string
            collectionName:string
            trackName:string
            collectionCensoredName:string
            trackCensoredName:string
            artistViewUrl:string
            collectionViewUrl:string
            feedUrl:string
            trackViewUrl:string
            artworkUrl30:string
            artworkUrl60:string
            artworkUrl100:string
            collectionPrice:number
            trackPrice:number
            trackRentalPrice:number
            collectionHdPrice:number
            trackHdPrice:number
            trackHdRentalPrice:number
            releaseDate:string
            collectionExplicitness:string
            trackExplicitness:string
            trackCount:number
            country:string
            currency:string
            primaryGenreName:string
            contentAdvisoryRating:string
            artworkUrl600:string
            genreIds:[]
            genres:[]
        }
    ]
}