
// ejemplo de users ---> const users = ['@xd', '@dx'@el']

const {users} = process.env

 async function mentions(url) {

    let params = {
        chat_id : '-1001936376699',
        text: users
       }

    const response =  await fetch(url,
        {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(params)
        }
    )

    
    await response.json()




}

module.exports = {mentions}