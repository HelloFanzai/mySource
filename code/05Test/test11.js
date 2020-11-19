var stdin = 6;
      var result = [[1]];
      for(var i = 1;i < stdin;i++) {
        result[i] = [];
        for(var j = 0; j < i + 1;j++) {
          result[i][j] = (result[i - 1][j] || 0) + (result[i - 1][j - 1] || 0);
        }
      }
      result=result.join(',').split(',').join(' ');
      return console.log( result );
