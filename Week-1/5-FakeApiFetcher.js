function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        if (Math.random() < 0.7) {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
          );
          if (!response.ok) throw new Error("Network response was not ok");
          const data = await response.json();
          resolve(data);
        } else {
          reject(new Error("Failed to fetch user data"));
        }
      } catch (error) {
        reject(new Error("Failed to fetch user data"));
      }
    }, 0);
  });
}

async function getUserData(userId) {
  try {
    const userData = await fetchUserData(userId);
    console.log(userData);
  } catch (error) {
    console.error(error.message);
  }
}

getUserData(1);
