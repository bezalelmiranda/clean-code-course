// Nomenclatura de variáveis

const listUsersAndTheirFollowers = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getData(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const githubDataFromAPI = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (githubDataFromAPI.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const userJsonData  = await githubDataFromAPI.json();

  const orderList = listUsersAndTheirFollowers.sort((a, b) =>  b.followers - a.followers); 

  const category = orderList.find(element => userJsonData.followers > element.followers)

  const result = {
    githubUsername,
    category: category.title
  }

  return result
}

getData({ query: {
  username: 'josepholiveira'
}}, {})