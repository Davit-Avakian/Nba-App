const aroundNba = [
  {
    id: 1,
    image: 'https://cdn.nba.com/manage/2022/10/draymond-warmup-bench-cropped.jpg?w=384&h=224',
    title: 'NEW UNIS FOR 2022-23',
    description: 'Keep up with the latest new uniform looks for the 2022-23 NBA season.',
    date: 'September 15, 2022'
  },
  {
    id: 2,
    image: 'https://cdn.nba.com/manage/2022/10/GettyImages-1243880221-scaled.jpg?w=384&h=224',
    title: 'New take-foul penalty, score changes in 2022-23',
    description:
      'The new penalty for a take foul is 1 free throw, which may be attempted by any player on the offended team in the game at the time the foul was committed.',
    date: 'September 23, 2022'
  },
  {
    id: 3,
    image: 'https://cdn.nba.com/manage/2022/10/jalen-green-iso-preseason-cropped.jpg?w=384&h=224',
    title: 'Fantasy Basketball: 12-team, 1st-round mock draft',
    description:
      'Who goes No. 1 overall in a 12-team 1st-round mock draft? We reveal each selection.',
    date: 'September 24, 2022'
  },
  {
    id: 4,
    image: 'https://cdn.nba.com/manage/2022/10/GettyImages-1243779330-scaled.jpg?w=384&h=224',
    title: 'NBA Fantasy: New updates to Top 150 rankings',
    description:
      'From Nikola Jokic to Evan Fournier, take a look at the fantasy landscape across the league.',
    date: 'September 21, 2022'
  },
  {
    id: 5,
    image: 'https://cdn.nba.com/manage/2022/10/silver.jpg?w=384&h=224',
    title: 'Leonard officially cleared for 5-on-5 drills',
    description:
      "Lawrence Frank says the Clippers may limit some of Kawhi Leonard's activity in camp as the forward gears up for 2022-23.",
    date: 'September 22, 2022'
  },
  {
    id: 6,
    image: 'https://cdn.nba.com/manage/2022/10/USATSI_19169091-scaled.jpg?w=384&h=224',
    title: 'Will Wall or Beverley make a bigger impact?',
    description:
      'Assessing whether John Wall (Clippers) or Patrick Beverley (Lakers) will help their team the most in 2022-23.',
    date: 'September 20, 2022'
  },
  {
    id: 7,
    image: 'https://cdn.nba.com/manage/2022/10/lebron-dame-2021-22-cropped.jpg?w=384&h=224',
    title: 'Film Study: Impact players back for 2022-23',
    description:
      'Breaking down stats & film on Kawhi Leonard, Zion Williamson and other notable players who missed all of last season.',
    date: 'September 25, 2022'
  },
  {
    id: 8,
    image: 'https://cdn.nba.com/manage/2022/09/USATSI_19121549-1-scaled.jpg?w=384&h=224',
    title: "Ranking the East's 3 best teams on paper",
    description:
      'Assessing the top rosters in the Eastern Conference before all 30 teams begin play next month.',
    date: 'September 14, 2022'
  },
  {
    id: 9,
    image: 'https://cdn.nba.com/manage/2022/10/3.png?w=384&h=224',
    title: 'DeRozan works to improve footwork, range',
    description:
      'Bulls All-Star guard DeMar DeRozan is working to better his 3-point shot and more to help Chicago rise higher in the East.',
    date: 'September 14, 2022'
  },
  {
    id: 10,
    image: 'https://cdn.nba.com/manage/2022/10/4.png?w=384&h=224',
    title: "Ranking the West's 3 best teams on paper",
    description:
      'Assessing the top rosters in the Western Conference before all 30 teams begin play next month.',
    date: 'September 15, 2022'
  },
  {
    id: 11,
    image: 'https://cdn.nba.com/manage/2022/10/USATSI_19169091-scaled.jpg?w=384&h=224',
    title: "10 can't-miss games on national television",
    description:
      "The 'battle of L.A.' resumes in November, Grizzlies-Warriors headlines Christmas Day and the Ball brothers meet in January.",
    date: 'August 18, 2022'
  },
  {
    id: 12,
    image:
      'https://cdn.nba.com/manage/2022/10/gobert-preseason-debut-wolves-cropped.jpg?w=384&h=224',
    title: 'NEW UNIS FOR 2022-23',
    description: 'Keep up with the latest new uniform looks for the 2022-23 NBA season.',
    date: 'September 15, 2022'
  },
  {
    id: 13,
    image: 'https://cdn.nba.com/manage/2022/02/lebron021622.jpg?w=384&h=224',
    title: 'New take-foul penalty, score changes in 2022-23',
    description:
      'The new penalty for a take foul is 1 free throw, which may be attempted by any player on the offended team in the game at the time the foul was committed.',
    date: 'September 23, 2022'
  },
  {
    id: 14,
    image:
      'https://cdn.nba.com/manage/2022/05/GettyImages-1240560416-scaled-e1652392260270.jpeg?w=384&h=224',
    title: 'Fantasy Basketball: 12-team, 1st-round mock draft',
    description:
      'Who goes No. 1 overall in a 12-team 1st-round mock draft? We reveal each selection.',
    date: 'September 24, 2022'
  },
  {
    id: 15,
    image: 'https://cdn.nba.com/manage/2022/10/domantas-sabonis-iso-looks.jpg?w=384&h=224',
    title: 'NBA Fantasy: New updates to Top 150 rankings',
    description:
      'From Nikola Jokic to Evan Fournier, take a look at the fantasy landscape across the league.',
    date: 'September 21, 2022'
  },
  {
    id: 16,
    image: 'https://cdn.nba.com/manage/2022/09/USATSI_19121549-1-scaled.jpg?w=384&h=224',
    title: 'Leonard officially cleared for 5-on-5 drills',
    description:
      "Lawrence Frank says the Clippers may limit some of Kawhi Leonard's activity in camp as the forward gears up for 2022-23.",
    date: 'September 22, 2022'
  },
  {
    id: 17,
    image: 'https://cdn.nba.com/manage/2022/09/leonard-murray-bubble-cropped.jpg?w=384&h=224',
    title: 'Will Wall or Beverley make a bigger impact?',
    description:
      'Assessing whether John Wall (Clippers) or Patrick Beverley (Lakers) will help their team the most in 2022-23.',
    date: 'September 20, 2022'
  }
];

export default aroundNba;
