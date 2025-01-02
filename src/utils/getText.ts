export default (arr: string[]): string => {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}