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