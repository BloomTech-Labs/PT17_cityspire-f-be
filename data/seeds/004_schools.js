exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('schools')
    .del()
    .then(function () {
      return knex('schools').insert([
        {
          id: '1',
          city: 'Hackensack',
          state: 'New Jersey',
          schoolName: 'Bergen County Academies',
          schoolScore: '1',
          numberOfStudents: '1098',
        },
        {
          id: '2',
          city: 'Worcester',
          state: 'Massachusetts',
          schoolName: 'Massachusetts Academy of Math and Science',
          schoolScore: '2',
          numberOfStudents: '98',
        },
        {
          id: '3',
          city: 'Alexandria',
          state: 'Virginia',
          schoolName: 'Thomas Jefferson High Schhol for Science and Technology',
          schoolScore: '3',
          numberOfStudents: '1781',
        },
        {
          id: '4',
          city: 'Durham',
          state: 'North Carolina',
          schoolName: 'North Carolina School of Science and Mathematics',
          schoolScore: '4',
          numberOfStudents: '680',
        },
        {
          id: '5',
          city: 'Richmond',
          state: 'Virginia',
          schoolName: 'Maggie Walker Governors School',
          schoolScore: '5',
          numberOfStudents: '746',
        },
        {
          id: '6',
          city: 'New-York',
          state: 'New York',
          schoolName: 'Stuyvesant High School',
          schoolScore: '6',
          numberOfStudents: '3319',
        },
        {
          id: '7',
          city: 'Reno',
          state: 'Nevada',
          schoolName: 'The Davidson Academy',
          schoolScore: '7',
          numberOfStudents: '189',
        },
      ]);
    });
};
