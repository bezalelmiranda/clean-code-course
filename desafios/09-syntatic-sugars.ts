function getFirstFiveRatings(appRatingsValuesList) {
  return appRatingsValuesList.length >= 5 && appRatingsValuesList.slice(0, 5)
}

function sumFirstFiveRatings(appRatingsValuesListInString: string[]) {
  const isRankingListNotNull = Boolean(appRatingsValuesListInString)

  if (isRankingListNotNull) {

    const hasFirstFiveRatings = getFirstFiveRatings(appRatingsValuesListInString)

    if (hasFirstFiveRatings) {

      let appRatingsSum = 0;

      for (const rating of hasFirstFiveRatings) {
        appRatingsSum += Number(rating)
      }

      return { appRatingsSum, created_at: Number(new Date()) }
    }
    
    return { error: 'there must be at least 5 ratings' }
  }

  return { error: 'ratings is required' }
}

const appRatingsValuesListInString = ['5', '3', '4', '4', '5', '1', '5', '4', '4', '3']
sumFirstFiveRatings(appRatingsValuesListInString)