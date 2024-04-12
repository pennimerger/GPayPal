function getImageUrl(name) {
    return new URL(`../assets/homepage/${name}`, import.meta.url).href
}
export { getImageUrl };