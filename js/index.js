fetch('https://jsonplaceholder.typicode.com/photos/1')
      .then( r => r.json())
      .then( data => console.info( data ))
      .catch( e => console.error( 'Something went wrong') );