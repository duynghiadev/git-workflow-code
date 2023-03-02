function slowAddition(n1, n2) {
  return new Promise((resolve, reject) => {
    // setTimeout( ()=> resolve(n1 + n2), 3000)
    setTimeout(() => {
      reject(new Error("kế hoạch tan vỡ, nhanh chóng tăng lương"));
    }, 3000);
  });
}

async function increaseSalary(base, increase) {
  const newSalary = await slowAddition(base, increase);
  return newSalary;
  // let newSalary;
  // try {
  //   newSalary = await slowAddition(base, increase);
  // } catch (error) {
  //   console.log(`Error get newSalary ${error.message}`);
  //   newSalary = base * 2;
  // }

  // console.log(`new Salary ${newSalary}`);
  // return newSalary;
}

increaseSalary(1000, 100)
  .then()
  .catch((e) => console.log(`Error get newSalary ${e.message}`));
