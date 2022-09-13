function countBy(x, n) {
    let z = [];
    for (let i = 0; i < n; i++)
    {
      z[i] = (x * (i+1))
    }
    return z;
  }

  var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    
    let catYears = 0;
    let dogYears = 0;
    for (let i = 1; i <= humanYears; i++)
      {
        if (i == 1)
        {
          catYears += 15;
          dogYears += 15;
        }
        else if (i == 2)
        {
          catYears += 9;
          dogYears += 9;
        }
        else
        {
          catYears += 4;
          dogYears += 5;
        }
      }
    return [humanYears,catYears,dogYears];
  }

  function getGrade (s1, s2, s3) {
  // Code here
  
  let scoreAverage = (s1+s2+s3)/3
  let grade;
  
  if (scoreAverage >= 90)
    {
      grade = 'A';
    }
  else if (scoreAverage >= 80)
    {
      grade = 'B';
    }
  else if (scoreAverage >= 70)
    {
      grade = 'C';
    }
  else if (scoreAverage >= 60)
    {
      grade = 'D';
    }
  else
    {
      grade = 'F';
    }
  return grade;
}