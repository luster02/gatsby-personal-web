import fetchRepos from './fetchRepos'

export const repoData = async () => {

    const data = sessionStorage.getItem("repos")
    let myRepos
    if (data) {
        myRepos = JSON.parse(data)
        myRepos = myRepos.slice(1, 13)
        return myRepos
    } else {
        myRepos = await fetchRepos()
        myRepos = myRepos.slice(1, 13)
        sessionStorage.setItem("repos", JSON.stringify(myRepos))
        return myRepos
    }

    // return repos || []
}