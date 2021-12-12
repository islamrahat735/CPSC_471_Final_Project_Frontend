import React from 'react'

export default function FetchPrac() {

    function login()
    {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3001/api/account', true);
        xhr.onload = function() {
            if(this.status === 200)
            {
                const response = JSON.parse(this.responseText);
                if(response[0].Access === 'parent')
                {
                    console.log('Hello World')
                }
                let output = '';


                console.log(response[0]);

            }
        }
        xhr.send();
    }

    return (
        <div>
          <button onClick = {login}> Click Here </button>

          <div>
          </div>
        </div>
    )
}