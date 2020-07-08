export default async function () {
    const res = await fetch("https://api.github.com/users/luster02/repos")
    let final = await res.json()
    return final
}