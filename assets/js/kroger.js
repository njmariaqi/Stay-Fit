// var token; 

// async function getToken(url) {
//      await fetch('https://api.kroger.com/v1/connect/oauth2/token', {
//           method: 'POST',
//           // mode: 'no-cors', 
//           // cache: 'no-cache', 
//           headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//           'Authorization': 'Basic c3RheWZpdC01ZjI1YjU2ZWFhZTZjNDBmMmJlMzhmZDZmOGUyYTVhMzQzOTc3MTMzMzkyMzkxMTc2NTE6clpkd1Q5T1B4bmxrS0ZJZ2l6dzVVNVFoT0h1eHk4RlFVbjg0b3R5Mg=='
//           },
//           // redirect: 'follow', 
//           // referrerPolicy: 'no-referrer', 
//           body: 'grant_type=client_credentials&scope=product.compact'
//      })
//      .then(function(response) {
//           return response.json(); 
//      })
//      .then(function(data){
//           token = data.access_token;
//           console.log(token);   
//      })
//      // .then(getUrl('https://api.kroger.com/v1/products?filter.term=water&filter.limit=5'))
// }


fetch('https://api.kroger.com/v1/products?filter.term=water&filter.limit=5', {
     method: "GET",
     // mode: 'no-cors',
     headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzdGF5Zml0LTVmMjViNTZlYWFlNmM0MGYyYmUzOGZkNmY4ZTJhNWEzNDM5NzcxMzMzOTIzOTExNzY1MSIsImV4cCI6MTYzMTM5NDIyNCwiaWF0IjoxNjMxMzkyNDE5LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjgyZWNhNzM4LTA5ODgtNTM4OS1iZjhjLTJkYTI5MGZkMWJlOCIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjMxMzkyNDI0NTYyODU2MDMxLCJhenAiOiJzdGF5Zml0LTVmMjViNTZlYWFlNmM0MGYyYmUzOGZkNmY4ZTJhNWEzNDM5NzcxMzMzOTIzOTExNzY1MSJ9.TWGkeSluckfEERx7jO69Uh9xDrQXoz5uivSWrJnO8td7xNmdoXtz6ClkRGmUoyhtZWdJKDiUXD2q6JxqEeCJl21_UqOzp32kfhkgykecq5txel8lsxl4L00K50HB_l9hDVcBgeG9PpdMCCBCx8t9d7Ctgsjkxi2h2UNYkL9BwyKFEtSy1sun6POS_EcVyMqYZIBUiDGKEfjDvOlQCi3JDvUQnrRq25WuLR58x1LMOhJ9uiP_AXOT2s48siF364tqvnouc17aLBRjCmtBByw1s76wSPthTPMun9tU-4VT0AwM5C7mdLY9tJpAx-boxom3KA588aYIx3ppSWubHK6_vQ'
     }
})
     .then(function(response){
          // console.log(response);
          return response.json();
          // console.log(typeof response);
     })
     .then(function(data) {
          console.log(data);
     })


     

