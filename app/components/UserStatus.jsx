import { useEffect, useState } from 'react';

function UserStatus() {
  const [user, setUser] = useState(null);

  

  useEffect(() => {

    // Obtén el nonce en WordPress
    fetch(`${process.env.NEXT_PUBLIC_APIURL}/my-authentication-nonce/v1/nonce`)
        .then(response => response.json())
        .then(data => {
            const nonce = data.nonce; // Obtén el nonce de la respuesta
            getUserStatus(nonce)
        })
        .catch(error => {
            console.error(error);
        });

function getUserStatus(nonce){
   

    fetch(`${process.env.NEXT_PUBLIC_APIURL}/wp/v2/users/me`,
    {
    method: 'GET',
    headers: {
      'X-WP-Nonce': nonce, // Incluye el nonce en el encabezado personalizado
      // Otras cabeceras necesarias para tu solicitud
    }
    })
  .then(response => {
    console.log(response)

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Usuario no logueado.');
    }
  })
  .then(userData => {
    setUser(userData);
  })
  .catch(error => {
    console.error(error);
  });
}

  }, []);

  return user;
}

export default UserStatus;
