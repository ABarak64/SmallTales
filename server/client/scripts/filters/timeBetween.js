'use strict';

app.filter('timeBetween', function() {
  return function(startDate, endDate) {

    var seconds = 1000,
      minutes = seconds * 60,
      hours = minutes * 60,
      days = hours * 24,
      months = days * 30.5,
      years = months * 12;

    var timeTypes = [
      {
        title: 'second',
        divisorForMilliseconds: seconds,
        max: 60
      },
      {
        title: 'minute',
        divisorForMilliseconds: minutes,
        max: 60
      },
      {
        title: 'hour',
        divisorForMilliseconds: hours,
        max: 24
      },
      {
        title: 'day',
        divisorForMilliseconds: days,
        max: 30
      },
      {
        title: 'month',
        divisorForMilliseconds: months,
        max: 12
      },
      {
        title: 'year',
        divisorForMilliseconds: years,
        max: Number.MAX_VALUE
      }
    ];

    var diff = new Date(endDate).getTime() - new Date(startDate).getTime();

    var correctType = timeTypes.filter(function(item) {
      return Math.floor(diff / item.divisorForMilliseconds) < item.max;
    })[0];

    var numOfThisType = Math.floor(diff / correctType.divisorForMilliseconds);
    return numOfThisType +  ' ' + correctType.title + (numOfThisType === 1 ? '' : 's');
  };
});