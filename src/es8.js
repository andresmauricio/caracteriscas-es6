const data = {
  frontend: "Andrés",
  backend: "Mauricio",
  devops: "Andrés Mauricio",
};

/**
 * Object etries: Tranforma un objeto en un array
 */
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

/**
 * Object values: Retorna en una array los valores de un objeto
 */
const values = Object.values(data);
console.log(values);

/**
 * Padding: Permite añadir cadenas vacias a un string
 */
console.log("Cuentos fantasticos".padStart(27, "Libro - "));

/**
 * Async - Await: Mejor uso de promesas
 */
const loginUser = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => {
          resolve({ status: 202, username: "breack", role: "ADMIN" });
        }, 2000)
      : reject(new Error("Algo paso :("));
  });
};

const callApiAuth = async () => {
  try {
    const user = await loginUser();
    console.log(user);
  } catch (error) {
    console.error("Lo sentimosn intetalo más tarde");
    // throw new Error("Lo sentimosn intetalo más tarde")
  }
};
callApiAuth();

function getUserDb(id) {
  return new Promise((resolve, reject) => {
    const userSearch = { name: "andrés", age: 23, role: "USER" };
    if (true) {
      setTimeout(() => {
        resolve(userSearch);
      }, 4000);
    } else {
      reject(new Error('Pool conections satured db context :('))
    }
  });
}

async function compareUser() {
  const user = await getUserDb();
  console.log(user);
}
compareUser()
